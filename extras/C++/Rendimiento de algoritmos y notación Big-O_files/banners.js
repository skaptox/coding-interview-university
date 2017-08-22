//La ubicación de la carpeta que contiene a los banners (debe acabar en /)
var ubicacionBanners = '/recursos/Custom/themes/campusMVP/img/banners/'

/**
* Constructor de objetos de tipo "banner".
* @param {string} src - La ubicación del banner
* @param {string} href - El destino del enlace
* @param {string} titulo - El texto que queremos mostrar en el Title del enlace correspondiente
*/
function Banner(src, href, titulo){
	this.src = src;
	this.href = href;
	this.title = titulo;
}

//Definición de los banners
var banners = [];
banners.push(new Banner('Banner-Errores-Programadores-CampusMVP.gif',
						'http://promos.campusmvp.com/10-gambadas-programadores/?cmvpad=10GambSideRec',
						'En una ventana nueva, te lleva a la página de descarga del eBook gratuito sobre los 10 errores más comunes de los programadores'));
banners.push(new Banner('Banner-Heroe-SQL-CampusMVP.gif',
						'http://promos.campusmvp.com/heroe-sql-manual-iniciacion/?cmvpad=SQL-SideRec',
						'En una ventana nueva, te lleva a la página de descarga del eBook gratuito de introducción a SQL'));
banners.push(new Banner('Banner-Entrevistas-Trabajo-CampusMVP.gif',
						'http://promos.campusmvp.com/trabajar-de-programador-como-triunfar-en-la-entrevista-de-trabajo/?cmvpad=EntrevistasSideRec',
						'En una ventana nueva, te lleva a la página de descarga del eBook gratuito sobre entrevistas de trabajo para programadores'));
banners.push(new Banner('csharp-net-banner-recursos.gif',
						'http://promos.campusmvp.com/ebook-trucos-csharp-dotnet/?cmvpad=CSharp-SideRec',
						'En una ventana nueva, te lleva a la página de descarga del eBook gratuito de 20 consejos sobre desarrollo con C# y .NET'));
banners.push(new Banner('ebook-ios-banner-recursos.png',
						'http://promos.campusmvp.com/desarrollo-ios-primeros-pasos/?cmvpad=iOS-SideRec',
						'En una ventana nueva, te lleva a la página de descarga del eBook gratuito de primeros pasos con Swift y Objective-C'));
banners.push(new Banner('guia-angularjs-banner.png',
						'http://promos.campusmvp.com/angularjs/?cmvpad=angularjs-SideRec',
						'En una ventana nueva, te lleva a la página de descarga del eBook gratuito de primeros pasos con Swift y Objective-C'));

//Escoge imagen aleatoriamente
var banner = banners[Math.floor(Math.random()*banners.length)];
//Genera el banner

var htmlImg = "<a href='" + banner.href + 
			  "' target='_blank' title='" + banner.title + 
			  "'><img src='" + ubicacionBanners + banner.src + 
			  "' alt='" + banner.title + "'></a>";
//Se inserta en el documento
document.write("<div id='RandomBannersDescargables'>" + htmlImg + "</div>");