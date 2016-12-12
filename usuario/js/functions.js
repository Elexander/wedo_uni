//Global variables
var ip = 'http://192.168.1.104:5000'; //La ip que se agregue aquí va sin diagonal '/'
var x = new XMLHttpRequest();


function ledSwitch(urlBulb){
	var ajaxR = new XMLHttpRequest();
	ajaxR.open('GET', urlBulb, true);
	ajaxR.send();
	x.onreadystatechange = function(){
		if(ajaxR.status == 200 & ajaxR.readyState == 4){
			console.log(JSON.parse(ajaxR.responseText));
		}
        else{
            console.log("error");
        }
	}
}

var status;
function acccionarFoco(){
	if(status == 'false')
	{
		encender();
	}
	else
	{
		apagar();		
	}
}

function encender(){
	var urlBulb = ip + '/activar/3';
	ledSwitch(urlBulb);
    //ledswitch(ip+)
	var boton = document.getElementById("lamp");
	boton.value = true;
	boton.setAttribute("class","red");
//    if $('#the_id').data('original-t  itle');  to get data custom attrs()
	document.getElementById("lamp").setAttribute("class", "glyphicon glyphicon-lamp big-fs on");
    status = 'true';
}

function apagar(){
	var urlBulb = ip + '/activar/4';
	ledSwitch(urlBulb);
	var boton = document.getElementById("lamp");
	boton.value = false;
	boton.setAttribute("class","green");
	document.getElementById("lamp").setAttribute("class", "glyphicon glyphicon-lamp big-fs off");
    status = 'false';
}
//------------------------------------------------------------------------------//
function acccionarFoco2(){
	if(status == 'false')
	{
		encender2();
	}
	else
	{
		apagar2();		
	}
}

function encender2(){

//    if $('#the_id').data('original-title');  to get data custom attrs()
    var urlBulb = ip + '/activar/C';
	ledSwitch(urlBulb);
	var boton = document.getElementById("tv");
	boton.value = true;
	boton.setAttribute("class","red");
	document.getElementById("tv").setAttribute("class", "icon-display big-fs on");
    status = 'true';
}

function apagar2(){
    var urlBulb = ip + '/activar/D';
	ledSwitch(urlBulb);
	var boton = document.getElementById("tv");
	boton.value = false;
	boton.setAttribute("class","green");
	document.getElementById("tv").setAttribute("class", "icon-display big-fs off");
    status = 'false';
}
//---------------------------------------------------------------------------------//
function acccionarFoco3(){
	if(status == 'false')
	{
		encender3();
	}
	else
	{
		apagar3();		
	}
}

function encender3(){
    var urlBulb = ip + '/activar/M';
	ledSwitch(urlBulb);
	var boton = document.getElementById("cd");
	boton.value = true;
	boton.setAttribute("class","red");
	document.getElementById("cd").setAttribute("class", "icon-power-cord big-fs on");
    status = 'true';
}

function apagar3(){
    var urlBulb = ip + '/activar/Z';
	ledSwitch(urlBulb);
	var boton = document.getElementById("cd");
	boton.value = false;
	boton.setAttribute("class","green");
	document.getElementById("cd").setAttribute("class", "icon-power-cord big-fs off");
    status = 'false';
}
//-----------------------------------------------------------------------------//
function acccionarFoco4(){
	if(status == 'false')
	{
		encender3();
	}
	else
	{
		apagar3();		
	}
}

function encender4(){
    var urlBulb = ip + '/activar/C';
	ledSwitch(urlBulb);
	var boton = document.getElementById("pw");
	boton.value = true;
	boton.setAttribute("class","red");
	document.getElementById("cd").setAttribute("class", "icon-power-cord big-fs on");
    status = 'true';
}

function apagar4(){
    var urlBulb = ip + '/activar/D';
	ledSwitch(urlBulb);
	var boton = document.getElementById("pw");
	boton.value = false;
	boton.setAttribute("class","green");
	document.getElementById("cd").setAttribute("class", "icon-power-cord big-fs off");
    status = 'false';
}
//---------------------Login--------------------//
function pass(){
    if (document.getElementById('email').value == 'usr1' & document.getElementById('passwd').value == '123'){
        window.location.href="main.html";
        console.log('great!')
}
    else{
        console.log('error');
    }
}