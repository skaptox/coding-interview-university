$(document).ready(function () {
    $(".btn-nav").click(function () {
        $(".First-Line").slideToggle("fast");
        $(".Second-Line").slideToggle();
    });
    $(".Footer-Widget-Container .Widget:last-child").addClass("Last-Widget");
    $(".Header #searchbox #searchfield").focus(function () {
        $(".Header #searchbox").addClass("SearchboxSelected");
        $(".Header #searchbox input[type='button']").addClass("Btn-Search-Selected");
    });
    $(".Header #searchbox #searchfield").blur(function () {
        $(".Header #searchbox").removeClass("SearchboxSelected");
    });

    $("#Social-Network").html($(".Blog-Social").html());
    $(window).resize(function () {
        if ($(window).width() > 640) {
            $(".First-Line").show();
        }
    });

	//Hacer que todos los enlaces externos se abran en ventana aparte
	$('.PostBody a').each(function() {
		var that = $(this);
		if ( that.attr('href').indexOf(window.location.host) == -1 && (that.attr('target') != undefined  || that.attr('target') != '') )
				that.attr('target', '_blank');
	});
	
	//Quitar el tamaño a todas las imágenes para hacerlas fluidas
    $('.PostBody img').each(function(){ 
        $(this).removeAttr('width');
        $(this).removeAttr('height');
    });

	//Quitar todos los atributos de tamaño a iframes de contenido (normalmente vídeos) y envolverlos en un div para conservar la relación de aspecto
	$(".PostBody iframe").removeAttr("width").removeAttr("height").wrap('<div class="videoWrapper"/>');


});
