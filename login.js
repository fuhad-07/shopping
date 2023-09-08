function validateform(){  
    username=document.getElementById("user");
    password=document.getElementById("pass");
    if(username.value == "fuhad"){
     alert("successfull")
    }
    else{
        alert("incorrect username")
    }
}
function validate() {
    var search = document.getElementById("search").value;

    if (search === "newarrival") {
        window.location.assign("arrival.html");
    } else if (search === "brandstore") {
        window.location.assign("brand.html");
    } else {
        alert("Error..!");
    }
}