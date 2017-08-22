

//MENU-RESPONSIVE;



$(".display").click(function () {
    $("#main-nav").slideDown("slow", function () {
        // Animation complete.
    });
});


$(".close").click(function () {
    $("#main-nav").slideUp("slow", function () {
        // Animation complete.
    });
});



$("#categoriasToggle").click(function () {

    if ($("#backToggle").hasClass("responsiveCategorias")) {
        $("#categorylist").slideDown("slow", function () {
            // Animation complete.
            $("#backToggle").removeClass("responsiveCategorias").addClass("responsiveCategoriasToggle");
        });
    }
    else {
        // Animation complete.
        $("#categorylist").slideUp("slow", function () {
            $("#backToggle").removeClass("responsiveCategoriasToggle").addClass("responsiveCategorias");
        });
    }

});





 


