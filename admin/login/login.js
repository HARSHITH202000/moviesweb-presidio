
function login(){
    const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
if(email=="admin" && password=="Admin@123"){
    alert("Logged in Successfully");
    window.location="../public/index.html"  
}
else{
    alert("Please log in using correct credentials");
}
}
