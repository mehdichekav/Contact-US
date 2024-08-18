const formEl = document.querySelector("form");
const firstNEl = document.querySelector(".first-name");
const lastNEl = document.querySelector(".last-name");
const emailEl = document.querySelector(".email");
const messageEl = document.querySelector(".txt-message");
const messageParent = document.querySelector(".message");
const btnRadio = document.querySelectorAll(".btn-radio");
const btnEl = document.querySelector("button");
const termEl = document.querySelector("termsCondition");
const termswrapper = document.querySelector(".terms-wrapper");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    errorHandle();
});

function errorHandle() {
    const firstName = firstNEl.value.trim();
    const lastName = lastNEl.value.trim();
    const email= emailEl.value.trim();
    const textmessage = messageEl.value.trim();

    if (firstName === '') {
        
        showError(firstNEl, showErrorMessage());
    }else {
        setSuccess(firstNEl);
    }

    if (lastName === '') {
       
        showError(lastNEl, showErrorMessage());
    }else {
        setSuccess(lastNEl);
    }

    if (email === "") {
        showError(emailEl, showErrorMessage())
    }else if(!isvalidEmail(email)){
        showError(emailEl, "please Enter Valid Email");
    }else {
        setSuccess(emailEl);
    }

    if (textmessage === '') {
        showError(messageParent, showErrorMessage());
    }else {
        setSuccess(messageParent);
    }
}

function checkBoxHandle(){
    btnRadio.forEach((radio)=>{
        radio.addEventListener("click", ()=>{
            btnRadio.forEach((l)=> l.parentElement.classList.remove("active"));
            if(radio.checked == true){
                radio.parentElement.classList.add("active");
            }

            
        })
    })
}
checkBoxHandle()
const showError = (ele, msg) => {
    const inputControl = ele.parentElement;
    const errorMessage = inputControl.querySelector(".error");
    errorMessage.innerText= msg;
    inputControl.classList.add("errormessage")
};


const setSuccess = (ele) => {
    const inputControl = ele.parentElement;
    const errorMessage = inputControl.querySelector(".error");
    errorMessage.innerText= "";
    inputControl.classList.remove("errormessage")
};


const isvalidEmail = (email) => {
    const reTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return reTest.test(String(email).toLowerCase());
}

function showErrorMessage() {
    return "This Filed is Required";
}

