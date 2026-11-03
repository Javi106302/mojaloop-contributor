# mojaloop-contributor

## Technology Stack and development setup:  

### Windows 11 (already installed)

### Git 
1. GitHub desktop - For windows download through the github website. With ubuntu through WSL 2 it came included

### NodeJS version 24 latest (this includes nvm, .nvmrc and package.jason)
	
1. Install the pre requisites then install nvm using the official script. 



<img width="1119" height="417" alt="image" src="https://github.com/user-attachments/assets/404a72ce-eb05-4470-a89c-f62d367885b2" />



2. Next load the nvm into your current shell then verify it works. 



<img width="948" height="381" alt="image" src="https://github.com/user-attachments/assets/883d4132-ab89-4b96-bf62-d389241b5577" />



3. Next install Node.js24 with the following command



<img width="318" height="168" alt="image" src="https://github.com/user-attachments/assets/56599964-bebd-4c1d-87ce-fed86faf9a30" />



4. Next make it default and confirm. For this case it will display that its on version 24.22.1



<img width="545" height="240" alt="image" src="https://github.com/user-attachments/assets/ff5d323a-74a6-446e-b587-5d000ee457bd" />



5. To set up .nvmrc a tiny file in the projects root tells nvm which Node version to use. So Create it. Then use the command "nvm use" to switch to the version in .nvmrc then "nvm install" to isntall it if its missing



<img width="604" height="335" alt="image" src="https://github.com/user-attachments/assets/50c0e9d2-730c-4795-9486-e82358b03989" />



6. package.json is the projects manifests which cani+ include dependecies, scripts, metadata, etc. If you dont have one type the following command "npm init -y".



<img width="1119" height="328" alt="image" src="https://github.com/user-attachments/assets/74e78284-d5b2-4583-8436-1c71144500e6" />



### VS code
1.  ask anthropic cloude for instructions to configure VS code  so it can be open from the ubuntu terminal using "code ." - First dowload VS code on windows. After set up and configuring your preferences use claude to ask for instructions to configure VS code to so it can be opened form ubuntu terminal using "code ." The configuration that claude gave me that worked was the .tar.gz archive method.



<img width="979" height="421" alt="image" src="https://github.com/user-attachments/assets/b6fe6223-6e59-4a21-a238-277fec49e895" />



### Docker (This included Docker desktop, Dockerfile and Docker-compose)

1. On windows download the Docker desk application through this page: https://docs.docker.com/desktop/setup/install/windows-install/ Dockerfile and Docker-compose come included. 

### WSL 2 and ubuntu 26

1. FIrst go to task managar and check if virtualization is enabled. You will find it in the CPU tab. 



<img width="1263" height="727" alt="image" src="https://github.com/user-attachments/assets/e76c4a92-530b-4225-a5c9-76935bc4161b" />



2. Next open a terminal. You can do this by right clicking the start button and choosing "Terminal(Admin)" or "WindowsPowerShell(Admin)". For this instalation I used "WindowsPowerShell(Admin)'. Next type "WSl --install" then press Enter. This will enable the required windows feature, for this case Virtual Machine Platform and WSL, download the Linux kernel, set WSL 2 as the default and it will install ubuntu. It may ask to restart the PC if needed. Once installed you will create your username and password. These are seperate from windows. To acces Ubuntu on PowerShell press the down arrow next to the plus tab on the screen and select ubuntu.
   
### claude code (Ask anthropic cloude for instructions to install and configure claude code using "claude")
	
1. To install claude on ubuntu use the following. (This is the command that worked in my case)

sudo mkdir -p /etc/apt/keyrings
sudo curl -fsSL https://downloads.claude.ai/keys/claude-code.asc -o /etc/apt/keyrings/claude-code.asc
echo "deb [signed-by=/etc/apt/keyrings/claude-code.asc] https://downloads.claude.ai/claude-code/apt/stable stable main" \
  | sudo tee /etc/apt/sources.list.d/claude-code.list
sudo apt update && sudo apt install claude-code

2. After installed verify that its installed and check if it has the latest version.



<img width="1064" height="182" alt="image" src="https://github.com/user-attachments/assets/8e3646af-9126-4c46-a48e-28d7f7bfe7ba" />



3. To acces claude just type "claude" then press enter. (if its your first time opening claude on ubuntu it will ask to log in with your account. It will open on your browser) To exit cluade type "/exit" then press ENTER. 

### ml-core-test-harness and Golden Path tests
    1. Prepare WSL
    2. Check with claude becuase setup depends on ram of computer
    3. Connect Docker Desktop to Ubuntu. In Docker Desktop make sure it says engine running then go to settings then general then scroll to choose how to run docker containers and see if WSL 2 is checked then go to resourses then WSL integration and check the checkbox and enable ubuntu. then switch resources
    4. In ubuntu clone ml-core-test-harnes then check if the files are there
 


    <img width="610" height="377" alt="image" src="https://github.com/user-attachments/assets/dc528a66-143c-432b-b032-58449fb9e862" />



5. Do the smoke test: run a simple P2P transfer. (the first time takes 10 to 20 minutes because it downloads many images. Also it depends on your internet speeds)


   
<img width="590" height="129" alt="image" src="https://github.com/user-attachments/assets/47fcf96f-7d65-4f43-bd1d-6bbb119b4d59" />



6. When test is finished and has 0 failed assertions shutdown the smoke test and clear up data.


	
<img width="602" height="193" alt="image" src="https://github.com/user-attachments/assets/e5f3a1a3-c73d-4690-8f57-03d2819bf193" />



7. Run the golden path test (this takes 5 to 10 minutes to complete)


   
<img width="590" height="137" alt="image" src="https://github.com/user-attachments/assets/0bf96ab1-c416-4272-87cd-947f1d88d8b3" />



8. Use this command to check the status. Whne both say Exited the test is complete


   
<img width="616" height="183" alt="image" src="https://github.com/user-attachments/assets/25ddd2f3-201e-476a-a2af-d7967645695c" />



9.Open the reports on the Windows browser with this command



<img width="626" height="185" alt="image" src="https://github.com/user-attachments/assets/5f14d6c5-bbf6-44c9-97a7-8aa3d9ae063d" />



 	This is what it will look like


	
<img width="1594" height="736" alt="image" src="https://github.com/user-attachments/assets/348a3382-f3f3-4871-92fb-aa3efbfa23de" />



10. Finally when finished shut everything down to free up computers memory with this command.


	
<img width="596" height="130" alt="image" src="https://github.com/user-attachments/assets/c860016d-a9a8-4637-9364-f3d8e65d5589" />



### Build the quoting-service Docker image locally and deploy it in ml-core-test-harness
  
  1. Clone the repo and switch to its Node version
 


    <img width="612" height="326" alt="image" src="https://github.com/user-attachments/assets/9a488662-672d-454e-8719-abf9b149d9af" />



2.  Biuld the image



<img width="593" height="159" alt="image" src="https://github.com/user-attachments/assets/31b494e6-be3b-46f2-af32-71e6360c4e33" />



3. Run your image in ml-core-test-harness.



<img width="614" height="254" alt="image" src="https://github.com/user-attachments/assets/dcef44dc-2de2-409e-b92e-258624ce7d9c" />



4. Check that your image is the one running



<img width="612" height="140" alt="image" src="https://github.com/user-attachments/assets/11a9d544-f61f-4c26-b7e4-db8ece758e43" />



5. After code changes, rebuild and restart only the quoting containers



<img width="611" height="240" alt="image" src="https://github.com/user-attachments/assets/4b2db5a1-688a-4d5f-9ff1-95f8fe0fae0c" />



6. When done free up memory with the following command



<img width="603" height="166" alt="image" src="https://github.com/user-attachments/assets/1cded2ea-bc02-495a-b137-2dbea20abd67" />

### Access the Testing Toolkit (TTK) from the browser in ml-core-test-harness
1. Start the harness in the background (Docker Desktop has to be opened)



   <img width="542" height="228" alt="image" src="https://github.com/user-attachments/assets/e72ae129-2265-48a2-b18c-1322c93b33a4" />

   

2. Check that the TTK containers are up 



<img width="529" height="100" alt="image" src="https://github.com/user-attachments/assets/d98a46b6-d123-4fac-87ab-183290bc5bbe" />



3. Wait for the setup to finish. This is the step that registers the test banks (DFSPs). When its summary shows 0 failed assertions, the switch is ready.



   <img width="518" height="84" alt="image" src="https://github.com/user-attachments/assets/cf7029d9-7dc0-4067-8a66-65a6ec307d3a" />



6. Open http://localhost:9660 in your browser



<img width="1599" height="727" alt="image" src="https://github.com/user-attachments/assets/1c0338f6-6861-4966-a528-c562e8ff6054" />


   
8. Run the P2P transfor from the browser



<img width="675" height="251" alt="image" src="https://github.com/user-attachments/assets/cae99ff8-96ab-4721-bf34-0abaca248691" />



<img width="1587" height="735" alt="image" src="https://github.com/user-attachments/assets/c4497d17-760d-4adf-9af0-61ce5ae0befc" />



10. When done shut down to free up memory


	
<img width="553" height="174" alt="image" src="https://github.com/user-attachments/assets/52b8d67b-49b2-47bd-bee1-19e705d9d8e2" />



---
### Load a test collection and run one request manually (Docker has to be openned and running)
1. Open http://localhost:9660 and click Test Runner in the left menu.
   
3. CLick Collection Manager, then Import Folder
   
3. Pick this folder from your harness clone:
docker/ml-testing-toolkit/test-cases/collections/tests
Your browser runs on Windows and the files are in WSL, so open them through the WSL network path in the file picker:
\\wsl$\Ubuntu\home\<your-ubuntu-user>\ml-core-test-harness\docker\ml-testing-toolkit\test-cases\collections\tests
(Use Import File instead if you only want one .json file.)

4. In the file tree, tick p2p.json. It’s the simplest collection.
   
5. Click the shaded area to the right of the panel to close Collection Manager. The test case now shows in the Test Runner.

6. Run requests manually by either running the whole test case by clicking run at the top right or by one request at a time. The first image shows the results of an entire test. The seccond image shows the result of a manual request



<img width="1598" height="729" alt="image" src="https://github.com/user-attachments/assets/20694885-6d0a-4135-ad9a-f8dd3e90c25e" />



<img width="1590" height="735" alt="image" src="https://github.com/user-attachments/assets/b6b1b501-d2c8-4d36-8d03-0e825e5ef3e4" />



7. When done shutdown to free up memory.



   <img width="520" height="137" alt="image" src="https://github.com/user-attachments/assets/a660e98e-ccb1-4feb-a734-2b97d28cad34" />



### ci-config-orb-biuld
1. For this you have to clone orb ad quoting service repos



<img width="511" height="225" alt="image" src="https://github.com/user-attachments/assets/c7ff9e03-3dac-4629-94a1-a3f5868ac9e8" />



### Adding one new test on the TTk for the quotiing-service
1. Fork mojaloop/testing-toolkit-test-cases, clone the fork and create a branch.
2. Now change directory to testing-toolkit-test-cases
3. Link it to the original repo so that ic call pull the updates later



   <img width="584" height="130" alt="image" src="https://github.com/user-attachments/assets/66843e9a-d0aa-438a-930a-391ea8237842" />



4. Create a branh for your test



   <img width="580" height="98" alt="image" src="https://github.com/user-attachments/assets/b2a88904-cd43-468f-8f79-6a2200b0fffa" />

   

5. Open it in VS code and follow claude instructions
6. Run it in the TTk UI. (you have to have Docker running)



   <img width="1595" height="732" alt="image" src="https://github.com/user-attachments/assets/3426e207-245d-4e0e-a22e-69d9b1c7eb4d" />



7. Commit, push to your fork and open a PR against mojaloop/testing-toolkit-test-cases. You don’t need to edit master.json, because the file is already in a folder it includes.



### api-snippet libraries updates and vulnerabilities. 
1. First ask claude the following message "I need to clone api-snippet then update libraries then patch vulnerabilities. I can use previous PRs as reference and i have to create a new PR. Can yoy tell me how to do all of this?' it will check for any vilnerabilites and determine the best possible way to do this based on your case. The steps are based on my case

2. Create a new for =k by going to this page "https://github.com/mojaloop/api-snippets", then click Fork. You can leave 'Copy the main branch only" as checked. Then click Create Fork.

3. Now clone it on Ubuntu and change directory to api-snippets



<img width="1108" height="198" alt="image" src="https://github.com/user-attachments/assets/87e59dc3-e9af-4ed4-8224-6e16956d6d45" />



4. Link to the original repo so that you can pull the updates



<img width="531" height="376" alt="image" src="https://github.com/user-attachments/assets/d07b5a18-612a-4639-b10a-a8c56195b857" />



<img width="1117" height="117" alt="image" src="https://github.com/user-attachments/assets/e83c8d69-4d5b-43cd-9858-3904dede6e75" />



5. Create your working branh from the latest mojaloop code by using this command: "git checkout -b chore/update-deps-security upstream/main". This will create a new branch and move you onto it.
   
6. Switch to the right node versio and install.



   <img width="527" height="167" alt="image" src="https://github.com/user-attachments/assets/506eb0cb-00f3-471c-896c-76d3d3563907" />



7. Update the libraries



   <img width="499" height="246" alt="image" src="https://github.com/user-attachments/assets/02aa8948-0611-411a-92ac-b131596ff6b3" />



8. Patch the vulnerabilities(if any problems happen follow claudes instructions as problems can occur)


  <img width="548" height="166" alt="image" src="https://github.com/user-attachments/assets/30c6376f-b89e-41da-9135-e5f1a72122b2" />



9. Now make usre nothing broke. When all of the tests pass run git status


<img width="554" height="250" alt="image" src="https://github.com/user-attachments/assets/3bd2eaac-a8d3-4f0f-a208-38683d7325b8" />



10. Bump Node and the CircleCI orb, as PRs with this command: nvm install && nvm use. Then repeat step 9.

11. Comit and push your fork



	<img width="585" height="328" alt="image" src="https://github.com/user-attachments/assets/af745c0b-3a43-47a6-9c74-d89e067dee51" />



12. On the PR. Go to https://github.com/Javi106302/api-snippets and click "Compare & pull request". Make sure the base is mojaloop/api-snippets main.


13. You can do the same with claude with the following repos: ml-number, database-lib, central-services-logger, central-services-metrics, central-services-error-handling and ml-testing-toolkit-share-lib. Claude in my case did most of the job automatically. Here are some aditional steps that it told me to do based on my case.

14. Get the script with the following command "cd ~/mojaloop-contributor && git fetch origin claude/happy-tesla-60hu3g && git checkout claude/happy-tesla-60hu3g"
15. For each of the repos first Fork on GitHub. Go to https://github.com/mojaloop/REPO and click Fork. Then:



	<img width="522" height="371" alt="image" src="https://github.com/user-attachments/assets/a4495627-96e3-410b-be31-4879f5f4f55e" />



16. Update the libraries



<img width="526" height="180" alt="image" src="https://github.com/user-attachments/assets/d071a482-06ae-4d4f-b29e-eb705f3076c1" />



17. Patch the vulnerabilities



<img width="605" height="377" alt="image" src="https://github.com/user-attachments/assets/541f0c00-f56d-4e63-9f1f-63c068bc7631" />



18. Verify



<img width="508" height="159" alt="image" src="https://github.com/user-attachments/assets/30022b88-9e64-4c4f-b4e2-2771d163e70e" />



19. Commit, push and open the PR the same way as api-snippets:


	
	<img width="546" height="277" alt="image" src="https://github.com/user-attachments/assets/6ba327bb-e17e-4b4a-8bde-c9adf1e127f8" />



### ### api-snippet libraries updates and vulnerabilities with quoting service
1. This can be done with claude. Ask claude at it will determine how to do it based on you situation. This can take time because the quoting service is big and has more pins. These are the steps for my case
2. Get the latest files from the contributor repo with this command: "cd ~/mojaloop-contributor && git pull origin claude/happy-tesla-60hu3g".
3. Fork mojaloop/guoting-service on github then clone it.



   <img width="552" height="439" alt="image" src="https://github.com/user-attachments/assets/61b68c09-0d74-481f-8237-2db4c8b57497" />



4. Now install with this command: "nvm install && nvm use && npm ci".
5. Now apply the patch. Make sure you do this before updating.



   <img width="542" height="132" alt="image" src="https://github.com/user-attachments/assets/0b166b5f-9b3d-4b55-9243-53564952f331" />

   

6. Now update the libraries with this command: "npx npm-check-updates -u".
7. Now apply the overrides.



   <img width="578" height="483" alt="image" src="https://github.com/user-attachments/assets/931c9fba-e865-4f96-a332-a4ee4410914e" />



8. Now reinstall and fix with this command: "rm -rf node_modules && npm install && npm audit fix".
9. Use this command to verify: "npm run audit:check && npm run dep:check && npm run lint && npm run test:unit".
10. Finally commit and push



	<img width="553" height="277" alt="image" src="https://github.com/user-attachments/assets/fea483e1-7af9-4d3d-8767-5ae56714e47c" />



---
## Concepts:

### Semantic Version

### GitHub
	1. organization 
	2. repository
	3. .gitignore - research 
	4. commit - conventional commits
	5. branches
	6. PR - peer request
	7. GitHub checks - GitHub actions
	8. reviewers
	9. merge
	10. markdown
	11. fork
	
### Circle CI
### markdown
	1. markdownviewer.pages.dev
	2. vs code preview 
	3. README.md
### Secret scan 
	1. GitLeaks https://github.com/gitleaks/gitleakshttps://github.com/gitleaks/gitleaks

	Research how to install and use GitLeaks from the command line. After gitleaks finda a secret in a file you can add the filw to git.ignore. For example files like .env

### Scrum - Agile project management framework commonly used in software developement Focuses on teamwork, accountability and iterative progress toward a specific goal through short cycles called sprints.In a scrum you will discuss:
	1. What you worked on yesterday?
	2. What are you working on today?
	3. A blocker which means an obstacle or task that prevents you from completing a task and moving forward with a project.

