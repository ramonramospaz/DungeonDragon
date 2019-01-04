//Clases principales

//clase de Trabajos

function Razas(){
	this.nombre="";
	this.fm=0;
	this.dm=0;
	this.com=0;
	this.im=0;
	this.sm=0;
	this.cam=0;
	this.Imagen="";
	
}

//Definimos las razas
function generar_razas(){
	var grupo_raza=[];
	//Humano
	grupo_raza["Humano"]=new Razas();
	grupo_raza["Humano"].nombre="Humano";
	grupo_raza["Humano"].fm=0
	grupo_raza["Humano"].dm=0;
	grupo_raza["Humano"].com=0;
	grupo_raza["Humano"].im=0;
	grupo_raza["Humano"].sm=0;
	grupo_raza["Humano"].cam=0;
	grupo_raza["Humano"].Imagen="Imagenes/Humano.jpg";
	//Elfo
	grupo_raza["Elfo"]=new Razas();
	grupo_raza["Elfo"].nombre="Elfo";
	grupo_raza["Elfo"].fm=0
	grupo_raza["Elfo"].dm=2;
	grupo_raza["Elfo"].com=-2;
	grupo_raza["Elfo"].im=0;
	grupo_raza["Elfo"].sm=0;
	grupo_raza["Elfo"].cam=0;
	grupo_raza["Elfo"].Imagen="Imagenes/Elfos.jpg";
	//Enano
	grupo_raza["Enano"]=new Razas();
	grupo_raza["Enano"].nombre="Enano";
	grupo_raza["Enano"].fm=0
	grupo_raza["Enano"].dm=0;
	grupo_raza["Enano"].com=2;
	grupo_raza["Enano"].im=0;
	grupo_raza["Enano"].sm=0;
	grupo_raza["Enano"].cam=-2;
	grupo_raza["Enano"].Imagen="Imagenes/Enanos.jpg";
	return grupo_raza;
}

function Trabajos(){
	this.nombre="";
	this.vidaBase=0;
	this.armaBase="";
	this.armaduraBase="";
	this.habilidadesBase="";
	this.Imagen="";
	this.dataurl=="";
}

function generar_trabajos(){
	var grupo_trabajo=[];
	grupo_trabajo["Guerrero"]=new Trabajos();
	grupo_trabajo["Guerrero"].nombre="Guerrero";
	grupo_trabajo["Guerrero"].vidaBase=10;
	grupo_trabajo["Guerrero"].armaBase="Espada Corta (1d6))";
	grupo_trabajo["Guerrero"].armaduraBase="Cuero 5D";
	grupo_trabajo["Guerrero"].habilidadesBase="Estampida";
	grupo_trabajo["Guerrero"].Imagen="Imagenes/Guerrero.jpg";
			
	grupo_trabajo["Mago"]=new Trabajos();
	grupo_trabajo["Mago"].nombre="Mago";
	grupo_trabajo["Mago"].vidaBase=4;
	grupo_trabajo["Mago"].armaBase="Daga (1d4)";
	grupo_trabajo["Mago"].armaduraBase="Vestido 2D";
	grupo_trabajo["Mago"].habilidadesBase="Misil Magico (1d8))";
	grupo_trabajo["Mago"].Imagen="Imagenes/Mago.jpg";
	
	grupo_trabajo["Ladron"]=new Trabajos();
	grupo_trabajo["Ladron"].nombre="Ladron";
	grupo_trabajo["Ladron"].vidaBase=8;
	grupo_trabajo["Ladron"].armaBase="Daga (1d6) + D";
	grupo_trabajo["Ladron"].armaduraBase="Cuero 5D";
	grupo_trabajo["Ladron"].habilidadesBase="Puñalada Tracera (1d10))";
	grupo_trabajo["Ladron"].Imagen="Imagenes/Ladron.jpg";
	return grupo_trabajo;
}

function show_raza(){
	grupo_raza=generar_razas();
	for (var item in grupo_raza){	
			document.write("<img src="+grupo_raza[item].Imagen+" width=150 height=180 onclick=selecionar_raza('"+grupo_raza[item].nombre+"')>");
	}
}

function show_trabajo(){
	grupo_trabajo=generar_trabajos();
	for (var item in grupo_trabajo){	
			document.write("<img src="+grupo_trabajo[item].Imagen+" width=150 height=180 onclick=selecionar_trabajo('"+grupo_trabajo[item].nombre+"')>");
	}
}



//clase personaje
function Personaje(){
	//propiedades
	this.nombre="";
	this.sexo="";
	this.nivel=1;
	this.raza="";
	this.trabajo="";
	this.vida=0;
	this.armadura=0;
	//estatus
	this.fuerza=0;
	this.destreza=0;
	this.constitucion=0;
	this.inteligencia=0;
	this.sabiduria=0;
	this.carisma=0;
	//Elementos
	this.arma=""
	this.armadura=""
	this.habilidades="";
}

Personaje.prototype.setNombre=function(nombre){
	this.nombre=nombre;
}

Personaje.prototype.getNombre=function(){
	return this.nombre;
}

Personaje.prototype.setSexo=function(Sexo){
	this.Sexo=Sexo;
}

Personaje.prototype.getSexo=function(){
	return this.Sexo;
}

Personaje.prototype.setRaza=function(raza){
	this.raza=raza;
	
}

Personaje.prototype.getRaza=function(){
	return this.raza;
}

Personaje.prototype.setTrabajo=function(trabajo){
	this.trabajo=trabajo;
	trb=generar_trabajos();
	this.vida=trb[trabajo].vidaBase;
	this.armadura=trb[trabajo].armaduraBase;
	this.arma=trb[trabajo].armaBase;
	this.habilidades=trb[trabajo].habilidadesBase;
}

Personaje.prototype.getTrabajo=function(){
	return this.trabajo;
}

Personaje.prototype.setStatus=function(fuerza,destreza,constitucion,inteligencia,sabiduria,carisma){
	this.fuerza=fuerza;
	this.destreza=destreza;
	this.constitucion=constitucion;
	this.inteligencia=inteligencia;
	this.sabiduria=sabiduria;
	this.carisma=carisma;
	
}

Personaje.prototype.getVida=function(){
	return this.vida;
}

Personaje.prototype.getArmadura=function(){
	return this.armadura;
}

Personaje.prototype.getHabilidades=function(){
	return this.habilidades;
}
// variable general

var mi_personaje=new Personaje();


//funciones generales

function genera_personaje(id){
	sound_click();
	if(id=="s2"){
		mi_personaje.setNombre(document.getElementById('Nombre').value);	
		mi_personaje.setSexo(document.getElementById('Sexo').value);
		
	}
	if(id=="s3"){
		mi_personaje.setRaza(document.getElementById('raza_seleccionada').value);
	}
	if(id=="s4"){
		fuerza=document.getElementById('Fuerza');
		destreza=document.getElementById('Destreza');
		constitucion=document.getElementById('Constitucion');
		inteligencia=document.getElementById('Inteligencia');
		sabiduria=document.getElementById('Sabiduria');
		carisma=document.getElementById('Carisma');
		mi_personaje.setStatus(fuerza.value,destreza.value,constitucion.value,inteligencia.value,sabiduria.value,carisma.value);
	}
	if(id=="s5"){
		mi_personaje.setTrabajo(document.getElementById('trabajo_seleccionado').value);
		generar_hoja();
	}
}


function siguiente(id){
	genera_personaje(id);
	zona=document.getElementById(id);
	zona.className="hi";
	zona.style.display="none";
	newid=id[0]+(parseInt(id[1])+1);
	zona=document.getElementById(newid);
	zona.className="vi";
	zona.style.display="block";
	
}

function iniciar(){
	zona=document.getElementById('s1');
	zona.style.display="block";	
	zona.className="vi";	
	
}

function reiniciar(){
	zona=document.getElementById('s1');
	zona.style.display="block";	
	zona.className="vi";
	zona=document.getElementById('s2');
	zona.style.display="none";	
	zona.className="hi";
	zona=document.getElementById('s3');
	zona.style.display="none";	
	zona.className="hi";
	zona=document.getElementById('s4');
	zona.style.display="none";	
	zona.className="hi";
	zona=document.getElementById('s5');
	zona.style.display="none";	
	zona.className="hi";
	zona=document.getElementById('s6');
	zona.style.display="none";	
	zona.className="hi";
}

function selecionar_raza(raza){
	miraza=document.getElementById('raza_seleccionada');
	document.getElementById('miraza').innerHTML=raza;	
	miraza.value=raza;
}

function selecionar_trabajo(trabajo){
	mitrabajo=document.getElementById('trabajo_seleccionado');
	document.getElementById('miclase').innerHTML=trabajo;
	mitrabajo.value=trabajo;
}

function estatus_aleatorios(){
	sound_click();
	fuerza=document.getElementById('Fuerza');
	destreza=document.getElementById('Destreza');
	constitucion=document.getElementById('Constitucion');
	inteligencia=document.getElementById('Inteligencia');
	sabiduria=document.getElementById('Sabiduria');
	carisma=document.getElementById('Carisma');
	fuerza.value=dado6()+dado6()+dado6();
	destreza.value=dado6()+dado6()+dado6();
	constitucion.value=dado6()+dado6()+dado6();
	inteligencia.value=dado6()+dado6()+dado6();
	sabiduria.value=dado6()+dado6()+dado6();
	carisma.value=dado6()+dado6()+dado6();
	compensacion_raza();
	
}

function dado6(){
	var valores=[1,2,3,4,5,6];
	return valores[Math.floor(Math.random()*6)];
}

function compensacion_raza(){
	fuerza=document.getElementById('Fuerza');
	destreza=document.getElementById('Destreza');
	constitucion=document.getElementById('Constitucion');
	inteligencia=document.getElementById('Inteligencia');
	sabiduria=document.getElementById('Sabiduria');
	carisma=document.getElementById('Carisma');
	miraza=document.getElementById('raza_seleccionada');
	raza=generar_razas();
	fuerza.value=parseInt(fuerza.value)+raza[miraza.value].fm;
	destreza.value=parseInt(destreza.value)+raza[miraza.value].dm;
	constitucion.value=parseInt(constitucion.value)+raza[miraza.value].com;
	inteligencia.value=parseInt(inteligencia.value)+raza[miraza.value].im;
	sabiduria.value=parseInt(sabiduria.value)+raza[miraza.value].sm;
	carisma.value=parseInt(carisma.value)+raza[miraza.value].cam;
	
}

function generar_image(ruta){
	var img = new Image();
	var canvas=document.createElement('canvas');
	img.src=ruta;
	canvas.width=img.width;
	canvas.height=img.height;
	
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img,0,0);
	data=canvas.toDataURL('jpeg');
	return data;
}

function generar_hoja(){
	var doc = new jsPDF();
	doc.setFontSize(22);
	doc.text(20,15,'Hoja de personaje');
	doc.setFontSize(12);
	doc.text(20,25,'Jugador:');
	doc.text(50,25,'_________________________________');
	/* nombre */
	doc.text(20,30,'Nombre:');
	doc.text(50,30,mi_personaje.getNombre());
	doc.text(20,34,'Sexo:');	
	doc.text(50,34,mi_personaje.getSexo());
	
	doc.text(20,38,'Level:');
	doc.text(50,38,mi_personaje.nivel.toString());	
	
	doc.text(20,42,'Raza:');
	doc.text(50,42,mi_personaje.getRaza());
	doc.text(20,46,'Clase:');
	doc.text(50,46,mi_personaje.getTrabajo());
	doc.text(20,50,'Vida Base:');
	doc.text(50,50,mi_personaje.getVida().toString());
	doc.text(60,50,'Vida: ___/___');
	
	doc.text(20,52,'__________________________________________________________________________');
	doc.text(20,58,'Fuerza:');
	doc.text(50,58,mi_personaje.fuerza);
	doc.text(20,62,'Destreza:');
	doc.text(50,62,mi_personaje.destreza);
	doc.text(20,66,'Constitucion:');
	doc.text(50,66,mi_personaje.constitucion);
	doc.text(20,70,'Inteligencia');
	doc.text(50,70,mi_personaje.inteligencia);
	doc.text(20,74,'Sabiduria');
	doc.text(50,74,mi_personaje.sabiduria);
	doc.text(20,78,'Carisma');
	doc.text(50,78,mi_personaje.carisma);
	doc.text(20,80,'__________________________________________________________________________');
	
	doc.text(20,86,'arma 1:');
	doc.text(50,86,mi_personaje.arma);
	doc.text(20,90,'arma 2:');
	doc.text(50,90,'_____________________________________________________________');
	doc.text(20,94,'arma 3:');
	doc.text(50,94,'_____________________________________________________________');
	doc.text(20,98,'arma 4:');
	doc.text(50,98,'_____________________________________________________________');
	doc.text(20,102,'arma 5:');
	doc.text(50,102,'_____________________________________________________________');

	doc.text(20,108,'armadura 1:');
	doc.text(50,108,mi_personaje.armadura);
	doc.text(20,112,'armadura 2:');
	doc.text(50,112,'_____________________________________________________________');
	doc.text(20,116,'armadura 3:');
	doc.text(50,116,'_____________________________________________________________');
	doc.text(20,120,'armadura 4:');
	doc.text(50,120,'_____________________________________________________________');
	doc.text(20,124,'armadura 5:');
	doc.text(50,124,'_____________________________________________________________');

	doc.text(20,130,'habilidad 1:');
	doc.text(50,130,mi_personaje.habilidades);
	doc.text(20,134,'habilidad 2:');
	doc.text(50,134,'_____________________________________________________________');
	doc.text(20,138,'habilidad 3:');
	doc.text(50,138,'_____________________________________________________________');
	doc.text(20,142,'habilidad 4:');
	doc.text(50,142,'_____________________________________________________________');
	doc.text(20,146,'habilidad 5:');
	doc.text(50,146,'_____________________________________________________________');

	doc.text(20,152,'Objetos:');
	doc.text(20,156,'__________________________________________________________________________');
	doc.text(20,160,'__________________________________________________________________________');
	doc.text(20,164,'__________________________________________________________________________');
	doc.text(20,168,'__________________________________________________________________________');
	doc.text(20,172,'__________________________________________________________________________');
	doc.text(20,176,'__________________________________________________________________________');
	doc.text(20,180,'__________________________________________________________________________');
	doc.text(20,184,'__________________________________________________________________________');
	doc.text(20,188,'__________________________________________________________________________');
	doc.text(20,192,'__________________________________________________________________________');
	
	
	doc.output('datauri');
}


function sound_click(){
	var audio = document.getElementsByTagName('audio')[0];
	audio.play();

}
