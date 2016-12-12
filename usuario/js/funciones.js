var urlServidor = 'http://localhost/wedo/';
var urlSesion = 'servicios/getsession.php';
var urldispositivo = 'servicios/getdispositivo.php';
var urlToken = 'servicios/gettoken.php';
var token = '';
var x = new XMLHttpRequest();
var s;

function inicializar()
{
	s = document.getElementById('resultadoTest');
	crearGrafica();
}

function buscarDispositivo()
{
	var id = document.getElementById('txtFolio').value;
	var url = urlServidor+urldispositivo+'?txtdispositivo='+id;
	console.log(url);
	x.open('GET',url,true)
	
	x.send();
    
	 x.onreadystatechange = function()
	 {
	 	if(x.status == 200 && x.readyState == 4){
			var respuestaJSON = JSON.parse(x.responseText);
			var datos = respuestaJSON.pacientetest; 
				console.log(x.responseText);
				 /*var txtNombre = document.getElementById('txtNombre');
				 var txtCorreo = document.getElementById('txtCorreo');
				 var txtSexo = document.getElementById('txtSexo');
				 var txtEdad = document.getElementById('txtEdad');
				 var txtTest = document.getElementById('txtTest');
				 var txtFecha = document.getElementById('txtFecha');
				 var txtPuntuacion = document.getElementById('txtPuntuacion');
				 txtNombre.value = datos.paciente.nombre;
				 txtCorreo.value = datos.paciente.correo;
				 txtSexo.value = datos.paciente.sexo;
				 txtEdad.value = datos.paciente.edad;
				 txtTest.value = datos.test.descripcion;
				 txtFecha.value = datos.fechaDeRealizacion;
				 txtPuntuacion.value = datos.puntuacion;
				 
				 graficarPuntuacion(datos.puntuacion);
				 
				 window.location = '#';
 				 datosPaciente();*/
            var foco = document.getElementById("foco");
//            var nuevoFoco = document.createElement("div");
//            nuevoFoco.setAttribute("class", )
            foco.innerHTML = '<span data-v=\"3\" id=\"cd\" onclick=\"acccionarFoco3();\" class=\"icon-power-cord big-fs off cursor\"><\/span>';
		}	
	 }
}
/*
				 personales
				 genetica
				 habitos
				 hormonales
*/
function graficarPuntuacion(puntos)
{	
	var colores = ['#00CC00', '#66CC00', '#CCCC00', '#CC6600', '#CC0000' ];
	var i = 0;
	if(puntos>=0 && puntos<=20)
		i = 0;
	if(puntos>=21 && puntos<=40)
		i = 1;
	if(puntos>=41 && puntos<=60)
		i = 2;
	if(puntos>=61 && puntos<=80)
		i = 3;
	if(puntos>=81 && puntos<=100)
		i = 4;

	puntos = (puntos*200/100);
	
	dibujarRectangulo(s, '20%', (250-puntos)+'px', '35%',puntos+'px', '#d5d1d6', colores[i]);
}


function crearGrafica()
{
    //gráfica de barra
	dibujarTexto(s,'Resultado General','10%','30px','start',24,'#464545',false);
    dibujarLinea(s,'15%','50px','15%','700px','#464545');
    dibujarLinea(s,'15%','250px','55%','250px','#464545');
    
    var lineaY = 50;
    var texto = 100;
    for(var i = 0; i<10; i++)
    {
    	dibujarLinea(s,'12%',lineaY+'px','18%',lineaY+'px','#464545');
		dibujarTexto(s,texto,'7%',lineaY+'px','middle',8,'#464545',false);
		texto-=10;
		lineaY+=20;
	}
    
}

function datosPaciente()
{
	
	/*document.getElementById('pricing').style.display = 'none';*/
	document.getElementById('doctor').style.display = 'none';
	
	var contenedor = document.getElementById('enmedio');
	
	var resultado = document.getElementById('resultado');
	resultado.style.display = 'inline';
	
	var resultados = document.getElementById('resultadoTest');
	resultados.style.display = 'inline';
	
	
	var pacientes = document.getElementById('pacientes');
	pacientes.style.display = 'inline';
	
	contenedor.appendChild(resultados);
	contenedor.appendChild(resultado);
	
	contenedor.appendChild(pacientes);
	
	

}

/*function abrirMembresias()
{
	document.getElementById('pacientes').style.display = 'none';
	document.getElementById('resultadoTest').style.display = 'none';
	document.getElementById('doctor').style.display = 'none';
	
	
	var contenedor = document.getElementById('enmedio');
	
	var tabla = document.getElementById('pricing');
	tabla.style.display = 'inline';
	tabla.style.width = '40%';
	
	contenedor.appendChild(tabla);
	
}
*/

function contactar()
{
	alert('Se ha enviado el correo');
	txtAsunto = document.getElementById('asunto');
	txtMensaje = document.getElementById('msn');
	
	txtAsunto.value = "";
	txtMensaje.value = "";
}


function abriPerfil()
{
   
    document.getElementById('pacientes').style.display = 'none';
    document.getElementById('resultadoTest').style.display = 'none';
	
	var contenedor = document.getElementById('enmedio');
	
	var doc = document.getElementById('doctor');
	doc.style.display = 'inline';
    tabla.style.width = '100%';
	
	contenedor.appendChild(doc);
}