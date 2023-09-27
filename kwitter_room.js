


const firebaseConfig = {
  apiKey: "AIzaSyDVBJbBtvxOMe7jPT8-4Z1CJFvNELGQnPM",
  authDomain: "kwitter-homework-5f461.firebaseapp.com",
  databaseURL: "https://kwitter-homework-5f461-default-rtdb.firebaseio.com",
  projectId: "kwitter-homework-5f461",
  storageBucket: "kwitter-homework-5f461.appspot.com",
  messagingSenderId: "326132748928",
  appId: "1:326132748928:web:5dcce6d50c5d0f11ad0c65",
  measurementId: "G-FR98CQL0V9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name +"!";


function addroom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room_name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;




row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;




});});}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  
  window.location="index.html";
}

function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}


