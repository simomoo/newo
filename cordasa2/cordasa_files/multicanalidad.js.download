 function validarCampannaLateral(accionComercial, actuacionComercial, siguiente, canal, cliente, entidad, externo ) 
 {     	
	document.FORM_RVIA_LATERAL.clavePagina.value 	 = "BDP_MULTICANAL_ACTUALIZAR_CONTENIDO";
    document.FORM_RVIA_LATERAL.accionComercial.value       = accionComercial;
    document.FORM_RVIA_LATERAL.actuacionComercial.value    = actuacionComercial;
    document.FORM_RVIA_LATERAL.siguiente.value             = siguiente;
    document.FORM_RVIA_LATERAL.canal.value                 = canal;
    document.FORM_RVIA_LATERAL.cliente.value               = cliente;
    document.FORM_RVIA_LATERAL.entidad.value               = entidad;
    if(externo == "si"){
		var url = document.getElementById("urlExternaLateral").href;
	    var win=window.open(url,"NEW","width=500,height=500,top=0,left=0,menubar=yes,scrollbars=yes,resizable=yes");
   	}else{
		document.FORM_RVIA_LATERAL.submit();
   	}
 }