


document.querySelector("button").addEventListener("click",function () {
    
    var d1 = document.getElementById("day").value ;
    var m1 = document.getElementById("month").value ;
    var y1 = document.getElementById("year").value ;

    var currentDate = new Date() ;
    var d2 = currentDate.getDate() ;
    var m2 = 1 + currentDate.getMonth() ; 
    var y2 = currentDate.getFullYear() ;

    var months = [31,28,31,30,31,30,31,31,30,31,30,31] ;

   
    if(d1 > 31)
    {
        document.querySelectorAll(".invalid")[0].innerHTML = "Must be a vaild day";
        
        document.querySelectorAll(".times")[0].style.color = "hsl(0, 100%, 67%)";
        document.querySelectorAll(".box")[0].style.borderColor = "hsl(0, 100%, 67%)";
    }
    if(m1 > 12)
    {
        document.querySelectorAll(".invalid")[1].innerHTML = "Must be a vaild month";
        
        document.querySelectorAll(".times")[1].style.color = "hsl(0, 100%, 67%)";
        document.querySelectorAll(".box")[1].style.borderColor = "hsl(0, 100%, 67%)";
    }
    if(y1 > y2)
    {
        document.querySelectorAll(".invalid")[2].innerHTML = "Must be a vaild year";
        
        document.querySelectorAll(".times")[2].style.color = "hsl(0, 100%, 67%)";
        document.querySelectorAll(".box")[2].style.borderColor = "hsl(0, 100%, 67%)";
    }
    if(!document.getElementById("day").value)
    {
        document.querySelectorAll(".invalid")[0].innerHTML = "This field is required";
        
        document.querySelectorAll(".times")[0].style.color = "hsl(0, 100%, 67%)";
        document.querySelectorAll(".box")[0].style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("fd").innerHTML = "- -" ; 
    }

    if(!document.getElementById("month").value)
    {
        document.querySelectorAll(".invalid")[1].innerHTML = "This field is required";
        
        document.querySelectorAll(".times")[1].style.color = "hsl(0, 100%, 67%)";
        document.querySelectorAll(".box")[1].style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("fm").innerHTML = "- -" ;
    }

    if(!document.getElementById("year").value)
    {
        document.querySelectorAll(".invalid")[2].innerHTML = "This field is required";
        
        document.querySelectorAll(".times")[2].style.color = "hsl(0, 100%, 67%)";
        document.querySelectorAll(".box")[2].style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("fy").innerHTML = "- -"  ;
    }
  

    else
    {
    if ((y2%4) === 0 ) {
        if(y2%100 !== 0)
        {
            if(y2%400 === 0)
            {
                months[1] = 29 ;
            }
        }
    }
    
    if( d2 < d1 ){
        d2 = d2 + months[m2 - 1] ;
        m2 = m2 -1 ;
    }

    if( m1 > m2 ){
        y2 = y2 - 1  ;
        m2 = m2 + 12 ;
    }
    
    var finalYears = y2 - y1 ;
    var finalMonths = m2 - m1 ;
    var finalDays = d2 - d1 ;

    document.getElementById("fy").innerHTML = "" + finalYears ;
    document.getElementById("fm").innerHTML = "" + finalMonths ;
    document.getElementById("fd").innerHTML = "" + finalDays ;
    
    

    }
    
    if(d1 > 31 || m1 > 12 || y1 > y2)
    {
        document.getElementById("fd").innerHTML = "- -" ; 
        document.getElementById("fm").innerHTML = "- -" ;
        document.getElementById("fy").innerHTML = "- -"  ;

    }

});