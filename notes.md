node -v
npm -v
initialize node project - npm init -y

^^express - fast unopiniated minimalist web routing framework (middleware modules) for node.js

npm install express --save (or --no-save for no dependency)

for continuous server run in dev env -> npm install --save-dev nodemon

_____
in package.json 

  "scripts": {
    "dev": "nodemon server.js",

    terminan command => npm run dev
_____

nvm allows you to quickly install and use different versions of node via the command line.
example:
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ node -v
v14.18.0
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)





