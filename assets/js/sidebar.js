document.addEventListener("DOMContentLoaded", function(event) { 
    var navlist = document.getElementsByClassName("navlist")[0];
    var hamburgerButton = document.getElementById("hamburger-menu-button");
    var body = document.getElementsByTagName("body")[0];
    hamburgerButton.addEventListener("click", function(e){
        navlist.classList.toggle("closed");
        hamburgerButton.classList.toggle("open");
        body.classList.toggle("no-overflow");
    });

    if(window.innerWidth <= 736){
        navlist.classList.add("closed");
        hamburgerButton.classList.remove("hidden");
    }

    window.matchMedia("(max-width: 736px)").addListener(function (e) {  
        
        if(e.matches)  
        {
            navlist.classList.add("closed");
            hamburgerButton.classList.remove("hidden");

        }else{  
            navlist.classList.remove("closed");
            hamburgerButton.classList.add("hidden");
            
        }  
    });
});