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

terminal command => npm run dev
_____

nvm allows you to quickly install and use different versions of node via the command line.
example:
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ node -v
v14.18.0
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)


npm commands - npmjs.com keyword:css
--------------------
npm init -y
npm install express bcryptjs jsonwwebtoken
npm install --- will install packages listed in package.json
npm list --- to find all packages installed
npm view [package_name] version - current version
npm view [package_name] versions - all versions
npm update - get new version (minor and patch)
npm install [package_name]@latest (or) @particularversion or @~major.

npm run dev

---------------------







