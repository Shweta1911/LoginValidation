function check1(){
    let Fname=document.getElementById("fname").value;
    var Flabel=document.getElementById("flabel");
   
    if(Fname.length<3){
       // console.log("invalid");
        Flabel.innerHTML="Invalid"
        Flabel.style.color="red";
    }
    else{
        Flabel.innerHTML=""
    }    
}

function check2(){
    let Lname=document.getElementById("lname").value;
    var Llabel=document.getElementById("llabel");
    if(Lname.length<3){
        // console.log("invalid");
         Llabel.innerHTML="Invalid"
         Llabel.style.color="red";
     }
     else{
         Llabel.innerHTML=""
     }
}

function check3(){
    let Email=document.getElementById("email").value;
    var Elabel=document.getElementById("elabel");
    var regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(Email.match(regex)){
        Elabel.style.color="green";
        Elabel.innerHTML="Valid";
    }
    else{
        Elabel.style.color="red";
        Elabel.innerHTML="Invalid";
    }
}

function pcheck(){
    let Password=document.getElementById("password").value;
    var Plabel=document.getElementById("plabel");
    var weakregex=/^(?=.{4,}).*$/;
    var mediumregex=/^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
    var strongregex=/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).*$/;
    if(Password.match(weakregex)){
        Plabel.style.color="red";
        Plabel.innerHTML="Weak";
    }
    if(Password.match(mediumregex)){
        Plabel.style.color="orange";
        Plabel.innerHTML="Medium";
        
    }
    if(Password.match(strongregex)){
        Plabel.style.color="green";
        Plabel.innerHTML="Strong";
        
    }
}
function onsubmitt(){
    alert("Submited");
}