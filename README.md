# MyReactTODOApp: 

Simple React Js TODO App using ```hooks```.

https://programandoconro.github.io/MyReactTODOApp/

```
   git clone https://github.com/programandoconro/MyReactTODOApp
   cd MyReactTODOApp/mytodoapp
   npm install && npm start
   
``` 
Features: Write and delete todos from Firebase Real Time database. 

Add your Firebase credentials to ``src/firebase.js``.

You can easily build and serve this app with Docker, just create a Dockerfile like this:

```
FROM node
RUN apt update -y && \
apt upgrade -y && \
npm install -g npm && \
npm install -g create-react-app serve && \
git clone https://github.com/programandoconro/MyReactTODOApp
WORKDIR ./MyReactTODOApp/
RUN npm install && npm run build
CMD serve -s ./build
EXPOSE 5000
```
Build and run:
```
docker build . -t todoapp
docker run -d -p 3011:5000 --restart always todoapp
```
The app will be at [localhost:3011](localhost:3011)

<div style="text-align:center"><img src="https://raw.githubusercontent.com/programandoconro/MyReactTODOApp/master/todo.png" /></div>
