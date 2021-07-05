let form =document.querySelector("#form");
let fullName = document.getElementById("username");
let email = document.getElementById("email2");


function validateInput(){

    //fullname
    if(fullName.value.trim()==="")
    {
       onFail(fullName,"Please enter your username")
    }
    else
    {
        onSuccess(fullName);
    }
    //email
    if(email.value.trim()==="")
    {
        onFail(email,"Please enter other contact email");
    }
    else
    {
        if(!isValidEmail(email.value.trim()))
            onFail(email,"This is not email")
        else
            onSuccess(email);
    }
}

document.querySelector("#submit")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});


    function onSuccess(input){
        let parent = input.parentElement;
        let errMess = parent.querySelector("span");
        console.log(errMess);
        errMess.style.visibility = "hidden";
        errMess.innerHTML = "";
        parent.classList.remove("invalid")
    };
    function onFail(input, message){
        let parent = input.parentElement;
        let errMess = parent.querySelector("span");
        console.log(errMess);
        errMess.style.visibility = "visible";
        errMess.innerHTML = message;
        parent.classList.add("invalid")
    };
    function isValidEmail(email){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    };