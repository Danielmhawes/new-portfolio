 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCBd_uAF5m7fAKJx9bQBqx-EvQlNWqm6Yc",
  authDomain: "daniel-hawes-cv.firebaseapp.com",
  databaseURL: "https://daniel-hawes-cv.firebaseio.com",
  projectId: "daniel-hawes-cv",
  storageBucket: "daniel-hawes-cv.appspot.com",
  messagingSenderId: "977556863667",
  appId: "1:977556863667:web:eb30bc3fe20929e11b8ec6",
  measurementId: "G-HKHGBL46F0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

