$(document).ready(function(){
    $("#submit").click(function(){
        var SelectedCase = $("#cases").val();
    
        switch(SelectedCase){
            case "p1":
                window.location.href = "Problems/p1.html";
                break;
            case "p2":
                window.location.href = "Problems/p2.html";
                break;
            case "p3":
                window.location.href = "Problems/p3.html";
                break;
            case "p4":
                window.location.href = "Problems/p4.html";
        }
    });
});

