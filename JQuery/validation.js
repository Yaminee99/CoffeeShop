$("#username").on("blur", ()=>validate1())
const validate1=function(){
    $("#error1").text("");
    const username=$("#username").val();
    console.log(username);
    if(username==""){
        $("#error1").text("user name is required");
        return false;
    }
    else if(username.length<2){
        $("#error1").text("Please enter valid name");
        return false;
    }
    else if(!username.match("^[A-Za-z ]*$")) {
        $("#error1").text("Please enter only characters");
        return false;
    }
    else{
        return true;
    }
}

$("#password").on("blur", ()=>validate2())
const passPattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\?]).{6,12}";
const regExp=new RegExp(passPattern);
const validate2=function(){
    $("#error2").text("")
    const password=$("#password").val();
    console.log(password);
    if(password==""){
        $("#error2").text("password is required");
        return false;
    }
    else if(!regExp.test(password)){
        $("#error2").text("password must contain atleast 1 small letter, capital letter, digit, symbol[]. password must be 6 to 12 chars long");
        return false;
    }
    else{
        return true;
    }
}