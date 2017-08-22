//Modulo API YouTube
var YouTube = (function() {

	//Clave de la API
	var apiKey = "AIzaSyAui_QAn-hrAA9fFwqyrafVtfeAvSXub3I";
	
	//Referencia a la API de YouTube. Se usará como atajo para hacer las llamadas
	var API = null;
	//Referencia a función de inicialización del cliente que está usando este módulo
	var clientInitCallBack = null;

	//Carga la API de YouTube
	var _init = function(callback) {
		if(callback)
			clientInitCallBack = callback;
		//Se inicializa la API de YouTube
		gapi.client.setApiKey(apiKey);
		gapi.client.load("youtube", "v3", __APILista);
	};

	//Asigna la API de YouTube a la variable correspondiente cuando haya cargado
	function __APILista() {
		API = gapi.client.youtube;
		//Si hay un callback de inicialización, se llama
		if (clientInitCallBack)
			clientInitCallBack();
	};
	
	//Llama a la API que obtiene info del canal
	//Parámetros: nombre del canal, función de callback
	//Llama a la función de callback pasándole el identificador del canal
	var _getUploadsListID = function(sNomCanal, callback){
		if (!API){
			callback("");
			return;
		}
		
		var req = API.channels.list({
			part: "contentDetails",
			forUsername: sNomCanal
		});
		req.execute(function(resp){
			var uploadsID = resp.result.items[0].contentDetails.relatedPlaylists.uploads;
			//LLamo a la función de callback con este dato
			callback(uploadsID);
		});
	};
	
	//Obtiene una matriz con los vídeos de la lista especificada
	//El segundo parámetro es el máximo de vídeos a devolver.
	//El tercer parámetro es la función de callback a llamar a la que se le devuelve
	var _getListaVideos = function(listID, maxVideos, callback) {
		if (!API){
			callback(0);
			return;
		}
		
		var requestOptions = {
			playlistId: listID,
			part: "snippet",
			maxResults: maxVideos
		};
		
		var req = API.playlistItems.list(requestOptions);
		req.execute(function (resp){
			var listaVideos = resp.result.items;
			//Los recorro y creo un objeto personalizado con algunas propiedades
			var videos = []
			for(i=0; i< listaVideos.length; i++){
				var videoInfo =  listaVideos[i].snippet;
				videos[i] = {
					titulo : videoInfo.title,
					descripcion : videoInfo.description,
					vistasPrevias : videoInfo.thumbnails,
					videoId : videoInfo.resourceId.videoId
				};
			}
			//Llamo a la función de callback y le paso la lista de vídeos del canal
			callback(videos);
		});
	};
	
	return {
		init: _init,
		getUploadsListID: _getUploadsListID,
		getListaVideos: _getListaVideos
	};
})();
