/*global console, $, alert*/





$(document).ready(function generate() {
    "use strict";
    var x = $(".1").text(Math.floor((Math.random() * 10))),
        a = $(".2").text(Math.floor((Math.random() * 10))),
        b = $(".3").text(Math.floor((Math.random() * 10))),
        c = $(".4").text(Math.floor((Math.random() * 10))),
        d = $(".5").text(Math.floor((Math.random() * 10))),
        e = $(".6").text(Math.floor((Math.random() * 10))),
        f = $(".7").text(Math.floor((Math.random() * 10))),
        g = $(".8").text(Math.floor((Math.random() * 10))),
        h = $(".9").text(Math.floor((Math.random() * 10))),
        i = $(".10").text(Math.floor((Math.random() * 10))),
        j = $(".11").text(Math.floor((Math.random() * 10))),
        k = $(".12").text(Math.floor((Math.random() * 10))),
        l = $(".13").text(Math.floor((Math.random() * 10)));
        
    $(".div").text(x.text() + a.text() + b.text() + c.text() + d.text() + e.text() + f.text() + g.text() + h.text());
    $(".div1").text(x.text() + a.text() + b.text() + c.text());
    $(".div2").text(x.text() + a.text() + b.text() + c.text() + d.text() + e.text() + f.text());
    
    $(".start").click(function () {
        $(this).fadeOut(200);
        $(".1").fadeIn(1000, function () {
            $(".1").fadeOut(1000, function () {
                $(".2").fadeIn(1000, function () {
                    $(".2").fadeOut(1000, function () {
                   
                        $(".3").fadeIn(1000, function () {
                            $(".3").fadeOut(1000, function () {
                                $(".4").fadeIn(1000, function () {
                                    $(".4").fadeOut(1000, function () {
                                        $(".5").fadeIn(1000, function () {
                                            $(".5").fadeOut(1000, function () {
                                                $(".6").fadeIn(1000, function () {
                                                    $(".6").fadeOut(1000, function () {
                                                        $(".7").fadeIn(1000, function () {
                                                            $(".7").fadeOut(1000, function () {
                                                                $(".8").fadeIn(1000, function () {
                                                                    $(".8").fadeOut(1000, function () {
                                                                        $(".9").fadeIn(1000, function () {
                                                                            $(".9").fadeOut(1000, function () {
                                                                               
                                                                                       
                                                                                               
                                                                                                    
                                                                                                       
                                                                                                        
                                                                                $("h2").fadeIn();
                                                                                $("input").fadeIn();
                                                                                $(".show").fadeIn();
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                                                        
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                                                        
                        });
                    });
                });
            });
        });
    });
                                
              
                
            
           
          
            
       
           


    
   
});

var show = document.getElementById("show"),
   
    again = document.getElementById("try");

again.onclick = function () {
    "use strict";
    var show = document.getElementById("show"),
   
        again = document.getElementById("try"),
        result = document.getElementById("result");
   
        location.reload();
      

    
    

};

show.onclick = function () {
   
    "use strict";
    $("h2").fadeOut();
    $("input").fadeOut();
    $(".show").fadeOut();
    $(".result").fadeIn(100);
    $(".try").fadeIn();
    
    var your = document.getElementById("your").value,
        div = document.getElementById("div").textContent,
        div1 = document.getElementById("div1").textContent,
        div2 = document.getElementById("div2").textContent,
        result = document.getElementById("result");
    if (your === div1) {
        result.innerHTML = ("good, try again to get excellent");
    } else if (your === div2) {
        result.innerHTML = ("Very good, try again to get excellent");
    } else if (your === div) {
        result.innerHTML = ("Excellent!");
   
    } else if (your === "") {
        result.textContent = ("!احنا هنستهبل");
    }
};
    


