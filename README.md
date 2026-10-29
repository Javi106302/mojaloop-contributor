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

