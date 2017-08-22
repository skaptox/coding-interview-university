//Inicialización de la API
function YouTubeInit(){
	YouTube.init(cargarListaVideos);

	//Carga la lista de vídeos
	function cargarListaVideos() {
		YouTube.getUploadsListID("campusMVPes", function(uploadsID) {
			//Recibe el id de la lista de vídeos subidos al canal
			YouTube.getListaVideos(uploadsID, 3, mostrarVideos);
		});
	};

	//Muestra los vídeos en el DIV de la página
	function mostrarVideos(videos) {
		if(videos && videos.length>0) {
			var videoHTML = "";
			for (i=0; i<videos.length; i++) {
				var item = videos[i];
				var videoid = "https://www.youtube.com/embed/"+item.videoId;
				videoHTML += "<iframe width='300' height='200' src='"+videoid+"' frameborder='0' allowfullscreen></iframe><br/>"; 
			}
			document.getElementById("YouTubeRecentVideos").innerHTML = videoHTML;
		}
	};
}