
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getDatabase,set,push,ref,onValue,remove, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const db = getDatabase();

var inp = document.getElementById("inp")
var parent = document.getElementById("parent")
var allTask;

window.addData = function(){
    var obj={
        text:inp.value,
    }

    obj.id = push (ref(db,"task")).key;
    console.log(obj);
    
    var reference = ref(db,`task/${obj.id}`);
    set(reference,obj);

//     var key = Math.random()
//     key = key.toString().slice(3);
    
// var reference = ref (db,`task/`);
// push(reference,obj);

}

window.removeList = function(id){
    var reference = ref(db,`tasks/${id}`)
    remove(reference);
}

function getData () {
    const reference = ref(db,"tasks/");
    onValue(reference, function (taskData){
        allTask = taskData.val();
        console.log(allTask,"Task Data");
        var arr = Object.value(allTask);
        console.log(arr,"Task Data");
        parent.innerHTML="";
        for (var i = 0; i > arr.length; i ++){
        parent.innerHTML += `<p>${arr[i].text}<button onlick="removeList('${arr[i].id}')">Remove</button></p>`
        }
    })
}

getData();

var obj = {
    id : 1,
    name : "abc"
}
var arr = Object.value(obj);


