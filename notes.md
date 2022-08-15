# Creating vue / node express app #

First two things to make this work is installing some vue and npm packages
```
sudo npm i -g @vue/cli-init
sudo npm install -g npm@8.17.0
```

Then:
```
vue init webpack client
```

##The server configuration##
```
mkdir server
cd server
npm init -f
npm install nodemon eslint --save