### Changes from main 
Updated code to work with Vue x3.0 and added the SideBar.Vue component  
(14 commits on 18/02 is manual merge with local copy, I forgot to clone the repos)

In your local clone of this repos you need to create a firestore.js file in "/"  
Which should contain firebaseConfig part of the code from your firebase project settings  
And then add `export {firebaseConfig};` as follows  
![example of above](https://github.com/Mehr1us/Gaminity/blob/main/example.png)

### Compiles and hot-reloads for development 
```
npm run serve
```

### Compiles and minifies for production 
```
npm run build
```
