# mojaloop-contributor

Technology Stack and development setup:  

1. Windows 11 (already installed)
2. Git 
	a. GitHub desktop - For windows download through the github website. With ubuntu through WSL 2 it came included.
3. NodeJS version 24 latest
	a. nvm
	b. .nvmrc
	c. package.jason

Install the pre requisites then install nvm using the official script. 

<img width="1119" height="417" alt="image" src="https://github.com/user-attachments/assets/404a72ce-eb05-4470-a89c-f62d367885b2" />

Next load the nvm into your current shell then verify it works. 

<img width="948" height="381" alt="image" src="https://github.com/user-attachments/assets/883d4132-ab89-4b96-bf62-d389241b5577" />

Next install Node.js24 with the following command

<img width="318" height="168" alt="image" src="https://github.com/user-attachments/assets/56599964-bebd-4c1d-87ce-fed86faf9a30" />

Next make it default and confirm. For this case it will display that its on version 24.22.1

<img width="545" height="240" alt="image" src="https://github.com/user-attachments/assets/ff5d323a-74a6-446e-b587-5d000ee457bd" />

To set up .nvmrc a tiny file in the projects root tells nvm which Node version to use. So Create it. Then use the command "nvm use" to switch to the version in .nvmrc then "nvm install" to isntall it if its missing

<img width="604" height="335" alt="image" src="https://github.com/user-attachments/assets/50c0e9d2-730c-4795-9486-e82358b03989" />

package.json is the projects manifests which cani+ include dependecies, scripts, metadata, etc. If you dont have one type the following command "npm init -y".

<img width="1119" height="328" alt="image" src="https://github.com/user-attachments/assets/74e78284-d5b2-4583-8436-1c71144500e6" />



5. VS code
	a. ask anthropic cloude for instructions to configure VS code  so it can be open from the ubuntu terminal using "code ." - First dowload VS code on windows. After set up and configuring your preferences use claude to ask for instructions to configure VS code to so it can be opened form ubuntu terminal using "code ." The configuration that claude gave me that worked was the .tar.gz archive method.

<img width="979" height="421" alt="image" src="https://github.com/user-attachments/assets/b6fe6223-6e59-4a21-a238-277fec49e895" />


6. Docker
	a. Docker desktop
	b. Dockerfile
	c. Docker-compose

On windows download the Docker desk application through this page: https://docs.docker.com/desktop/setup/install/windows-install/ Dockerfile and Docker-compose come included. 

8. WSL 2 
7. ubuntu 26

FIrst go to task managar and check if virtualization is enabled. You will find it in the CPU tab. 

<img width="1263" height="727" alt="image" src="https://github.com/user-attachments/assets/e76c4a92-530b-4225-a5c9-76935bc4161b" />

Next open a terminal. You can do this by right clicking the start button and choosing "Terminal(Admin)" or "WindowsPowerShell(Admin)". For this instalation I used "WindowsPowerShell(Admin)'. Next type "WSl --install" then press Enter. This will enable the required windows feature, for this case Virtual Machine Platform and WSL, download the Linux kernel, set WSL 2 as the default and it will install ubuntu. It may ask to restart the PC if needed. Once installed you will create your username and password. These are seperate from windows. To acces Ubuntu on PowerShell press the down arrow next to the plus tab on the screen and select ubuntu.
   
9. claude code 
	a. ask anthropic cloude for instructions to install and configure claude code using "claude"

To install claude on ubuntu use the following. (This is the command that worked in my case)

sudo mkdir -p /etc/apt/keyrings
sudo curl -fsSL https://downloads.claude.ai/keys/claude-code.asc -o /etc/apt/keyrings/claude-code.asc
echo "deb [signed-by=/etc/apt/keyrings/claude-code.asc] https://downloads.claude.ai/claude-code/apt/stable stable main" \
  | sudo tee /etc/apt/sources.list.d/claude-code.list
sudo apt update && sudo apt install claude-code

After installed verify that its installed and check if it has the latest version.

<img width="1064" height="182" alt="image" src="https://github.com/user-attachments/assets/8e3646af-9126-4c46-a48e-28d7f7bfe7ba" />

To acces claude just type "claude" then press enter. (if its your first time opening claude on ubuntu it will ask to log in with your account. It will open on your browser) To exit cluade type "/exit" then press ENTER. 

10. ml-core-test-harness and Golden Path tests
    a. Prepare WSL 2. Check with claude becuase setup depends on ram of computer
    b. Connect Docker Desktop to Ubuntu. In Docker Desktop make sure it says engine running then go to settings then general then scroll to choose how to run docker containers and see if WSL 2 is checked then go to resourses then WSL integration and check the checkbox and enable ubuntu. then switch resources
    c. In ubuntu clone ml-core-test-harnes then check if the files are there
    <img width="610" height="377" alt="image" src="https://github.com/user-attachments/assets/dc528a66-143c-432b-b032-58449fb9e862" />
	d. Do the smoke test: run a simple P2P transfer. (the first time takes 10 to 20 minutes because it downloads many images. Also it depends on your internet speeds)
<img width="590" height="129" alt="image" src="https://github.com/user-attachments/assets/47fcf96f-7d65-4f43-bd1d-6bbb119b4d59" />
	e. When test is finished and has 0 failed assertions shutdown the smoke test and clear up data.
<img width="602" height="193" alt="image" src="https://github.com/user-attachments/assets/e5f3a1a3-c73d-4690-8f57-03d2819bf193" />
	f. Run the golden path test (this takes 5 to 10 minutes to complete)
<img width="590" height="137" alt="image" src="https://github.com/user-attachments/assets/0bf96ab1-c416-4272-87cd-947f1d88d8b3" />
	Use this command to check the status. Whne both say Exited the test is complete
<img width="616" height="183" alt="image" src="https://github.com/user-attachments/assets/25ddd2f3-201e-476a-a2af-d7967645695c" />
	g.Open the reports on the Windows browser with this command
<img width="626" height="185" alt="image" src="https://github.com/user-attachments/assets/5f14d6c5-bbf6-44c9-97a7-8aa3d9ae063d" />

 	This is what it will look like
<img width="1594" height="736" alt="image" src="https://github.com/user-attachments/assets/348a3382-f3f3-4871-92fb-aa3efbfa23de" />

	h. Finally when finished shut everything down to free up computers memory with this command.
<img width="596" height="130" alt="image" src="https://github.com/user-attachments/assets/c860016d-a9a8-4637-9364-f3d8e65d5589" />

11. Build and deploy a local quoting-service image
	See [quoting-service-local-build.md](quoting-service-local-build.md) for the steps to clone quoting-service, build its Docker image locally and run it in ml-core-test-harness.


Concepts:

1. Semantic Version
2. GitHub
	a. organization 
	b. repository
	c. .gitignore - research 
	c. commit - conventional commits
	c. branches
	d. PR - peer request
	e. GitHub checks - GitHub actions
	f. reviewers
	g. merge
	
3. Circle CI
4. markdown
	a. markdownviewer.pages.dev
	b. vs code preview 
	c. README.md
5. Secret scan 
	a. GitLeaks https://github.com/gitleaks/gitleakshttps://github.com/gitleaks/gitleaks

	Research how to install and use GitLeaks from the command line. After gitleaks finda a secret in a file you can add the filw to git.ignore. For example files like .env

6. Scrum - Agile project management framework commonly used in software developement Focuses on teamwork, accountability and iterative progress toward a specific goal through short cycles called sprints.In a scrum you will discuss:
	a. What you worked on yesterday?
	b. What are you working on today?
	c. A blocker which means an obstacle or task that prevents you from completing a task and moving forward with a project.

7. 
