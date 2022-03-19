
var firebaseConfig = {
  apiKey: "AIzaSyCZMmZhtkhSLKmkQH8kBBOV37cJqUi5-Wo",
  authDomain: "chatapp-a4a52.firebaseapp.com",
  databaseURL: "https://chatapp-a4a52-default-rtdb.firebaseio.com",
  projectId: "chatapp-a4a52",
  storageBucket: "chatapp-a4a52.appspot.com",
  messagingSenderId: "944282208425",
  appId: "1:944282208425:web:177a067f5581a457df81b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
