function validateform(){
    let name=document.myform.name.value;
    let password=document.myform.password.value;


    if(name.length<5){
        alert("name can't  be blanck")
        return false
    }
    else if(password.length<6){
        alert("password must be at least 6 charcater long");
        return false
    }
}