# sentinel.id-frontend
The (original) frontend repo for our Capstone Authentication Service group project

Tech Stack Used: 
- React
- HTML
- CSS

Git Flow:

git clone https://github.com/FardeenB2/sentinel.id-frontend.git
cd (to your correct local repository)

git config user.name "My Name"
git config user.email "my.email@example.com"

git checkout main                 
git pull origin main              

Run npm install   --> to install the dependencies located in the  package.json file

npm run dev     --> to run Vite

git checkout -b feature/settingsUpdate        --> make a new branch for your update

git add . 

git commit -m "added multi-factor authentication"

git push -u origin feature/settingsUpdate       --> Only for pushing the first time. subsequent pushes are just 'git push'



git checkout main

git pull origin main

git merge feature/settingsUpdate

git push origin main    --> push your local main to the Github main for everyone to see

git branch -d feature/settingsUpdate   --> optional, but for cleaning up





* To best run this, run the demo app first with "npm install" and "npm run dev". 
Then do "npm run dev" for this repo.