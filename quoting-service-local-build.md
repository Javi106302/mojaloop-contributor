# Build and deploy a local quoting-service image

These steps clone the Mojaloop `quoting-service`, build its Docker image on your machine, and run that image inside `ml-core-test-harness` instead of the published one. Run them from the Ubuntu (WSL 2) terminal, with Docker Desktop running and WSL integration turned on (see step 10 in the [README](README.md)).

## 1. Clone quoting-service

```bash
cd ~
git clone https://github.com/mojaloop/quoting-service.git
cd quoting-service
```

The repo pins its Node version in `.nvmrc` (24.15.0 at the time of writing). Switch to it:

```bash
nvm install
nvm use
```

Optional: install dependencies and run the unit tests before building, so you know the code works:

```bash
npm ci
npm run test:unit
```

## 2. Build the Docker image

The repo has an npm script that builds the image. It passes the `.nvmrc` version to the Dockerfile and tags the image `mojaloop/quoting-service:local`:

```bash
npm run docker:build
```

That script runs this command, which you can also run yourself:

```bash
docker build --build-arg NODE_VERSION="$(cat .nvmrc)-alpine" -t mojaloop/quoting-service:local -f ./Dockerfile .
```

Check that the image exists:

```bash
docker images mojaloop/quoting-service
```

You should see a row with the tag `local`.

## 3. Deploy the local image with ml-core-test-harness

The harness reads the quoting-service image as `mojaloop/quoting-service:${QUOTING_SERVICE_VERSION}`. The default version is set in its `.env` file, for example `QUOTING_SERVICE_VERSION=v17.8.0`. Set the variable to `local` so both the `quoting-service` and `quoting-service-handler` containers use your image.

```bash
cd ~/ml-core-test-harness
```

**Option A: override it for one run.** A shell variable takes priority over `.env`:

```bash
QUOTING_SERVICE_VERSION=local docker compose --profile all-services --profile ttk-provisioning --profile ttk-tests up
```

**Option B: change it permanently.** Edit `.env` so that it reads `QUOTING_SERVICE_VERSION=local`:

```bash
sed -i 's/^QUOTING_SERVICE_VERSION=.*/QUOTING_SERVICE_VERSION=local/' .env
```

```bash
docker compose --profile all-services --profile ttk-provisioning --profile ttk-tests up
```

If you only need the quoting service and the services it depends on, use these profiles instead:

```bash
QUOTING_SERVICE_VERSION=local docker compose --profile quoting-service --profile central-ledger up
```

Docker Compose uses a local image when one exists, so it does not try to pull `mojaloop/quoting-service:local` from Docker Hub.

## 4. Verify the local image is running

In a second terminal:

```bash
docker ps --filter name=quoting-service --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}'
```

The `IMAGE` column should show `mojaloop/quoting-service:local` for both containers, and the status should become `(healthy)`. You can also check the logs:

```bash
docker logs -f quoting-service
```

The smoke test passes when the TTK summary shows **0 failed assertions**. To run the golden path tests with your image:

```bash
QUOTING_SERVICE_VERSION=local docker compose --profile all-services --profile ttk-provisioning-gp --profile ttk-tests-gp up
```

## 5. Rebuild after code changes

After you edit the quoting-service code, rebuild the image and recreate only the quoting containers. Leave the rest of the stack running:

```bash
cd ~/quoting-service
npm run docker:build
```

```bash
cd ~/ml-core-test-harness
QUOTING_SERVICE_VERSION=local docker compose --profile all-services up -d --force-recreate --no-deps quoting-service quoting-service-handler
```

## 6. Shut down and clean up

```bash
cd ~/ml-core-test-harness
docker compose --profile all-services --profile ttk-provisioning --profile ttk-tests down -v
```

To go back to the published image, reset `.env` (`git checkout .env`) or stop setting `QUOTING_SERVICE_VERSION=local`. To delete your local image:

```bash
docker rmi mojaloop/quoting-service:local
```

## Troubleshooting

- **`429 Too Many Requests` while building:** Docker Hub limits anonymous pulls of the `node` base image. Run `docker login` and build again.
- **Containers still show the old version:** Check that `QUOTING_SERVICE_VERSION` is `local` in the same shell that runs `docker compose`. Then recreate the containers with `--force-recreate`.
- **`npm ci` fails during the build:** Make sure you build from the repo root, where `package.json` and `package-lock.json` are, and that WSL has enough memory (see step 10a in the README).
