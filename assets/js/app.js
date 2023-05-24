
let cl = console.log;

const eyeIcon = document.getElementById("eyeIcon")
const password = document.getElementById("password")

const onPassword = (eve) =>{
    cl("clicked");
    if(password.type === 'password'){
        password.type = 'text' ;
        eyeIcon.classList.replace('fa-eye-slash','fa-eye');
    }else{
        password.type = 'password';
        eyeIcon.classList.replace('fa-eye','fa-eye-slash');

    }
}




eyeIcon.addEventListener("click",onPassword)
