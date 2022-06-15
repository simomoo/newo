// 
///******************************************************************************************* 
// *  NUEVA:
// *
// *      REFERENCIA:  P00023418
// *      FECHA: 22/07/2019
// *      AUTOR: DRAGO
// *      Descripcion: Funciones generales de la web
// *
// ********************************************************************************************/

/**
 * Generacion de token para llamadas a rviaoperations
 * @param {*} nodo
 * @param {*} idSesion
 * @param {*} isumServideId
 * @param {*} callBackOk
 * @param {*} callBackError
 */
function getTokenJWT(nodo,idSesion,isumServideId, callBackOk,callBackError) {
	var strUrl = '/api/rest/rviasession/login?node=' + nodo +'&RVIASESION='+ idSesion +'&isumServiceId=' + isumServideId ;   
	var req = new XMLHttpRequest();
	req.open('GET', strUrl, true);
	req.responseType = "json";
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				var token = req.response.response.data.JWT;
				console.log("Token recibido");
				if (typeof callBackOk !== 'undefined') {
					callBackOk(token);
				}
			} else {
				console.error("Error al obtener TOKEN  " +  errorThrown);
				if (typeof callBackError !== 'undefined') {
					callBackError();
				}
			}
		}
	};
	req.send(null);
}

/**
 * Llamada generica para llamadas api
 *
 * @param {*} token token necesario para realizar la llamada
 * @param {*} url direccion de la llamada
 * @param {*} cbSuccess callback de respuesta
 * @param {*} cbError callback de error
 */
function callApi(token, url, cbSuccess, cbError){
	this.token = this.token == "" ? token : this.token; 
	var path = url;
	var req = new XMLHttpRequest();
	req.open('GET', path, true);
	req.responseType = "json";
	req.setRequestHeader("Authorization", this.token)
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				cbSuccess(req.response);
			} else {
				console.error("Error al obtener");
				cbError(req.response);
			}
		}
	};
	req.send(null);
}

/**
 *
 * @param {*} type Type of DOM element
 * @param {*} classList classes for element
 * @param {*} innerHtml content of element
 * @param {*} parent element to attach
 * @param {*} attributes extra attributes
 */
function createElem(type, classList, innerHtml, parent, attributes) {
	var elem = document.createElement(type);
	if (classList && Array.isArray(classList)) {
		for (var i = 0; i < classList.length; i++) {
			elem.classList.add(classList[i]);
		}
	} else {
		classList ? elem.classList.add(classList) : "";
	}
	if (attributes && Array.isArray(attributes)) {
		for (var i = 0; i < attributes.length; i++) {
			elem.setAttribute(attributes[i].key, attributes[i].value)
		}
	} else {
		attributes ? elem.setAttribute(attributes.key, attributes.value) : ""
	}
	elem.innerHTML = innerHtml ? innerHtml : "";
	parent ? parent.appendChild(elem) : "";
	return elem;
}