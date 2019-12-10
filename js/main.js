//AMBITO: Linea de ejecucion principal 

//1)Variables sueltas
let titulo = ¨Comenzó la venta de entradas para el Mundial de Rusia 2018¨
let autor = ¨Laura Smasnatta¨
let detalle = ¨Hoy se abrió la venta al público de tickets, a través del sitio oficial de la FIFA. El proceso se dividirá en dos partes y los espectadores deberán solicitar una tarjeta de hincha 'Fan ID'¨
let imagen = ¨tickets-rusia-mundial.jpg¨


//crearNoticia(titulo, autor, detalle, imagen)

//2) Array

let noticia3 = [
	¨A 94 años del derechazo que convirtió en leyenda a Luis Ángel Firpo¨,
	¨por Diego Di Marco¨,
	¨El 14/9/1923 el boxeador argentino enfrento en Nueva York a Jack Dempsey, uno de los mejores pesos pesados de la historia.¨
	¨firpo.jgp¨]

//3) Object // array asociativo en php es igual a esto

let noticia4 = {
	titulo : ¨Buenos Aires 2018 presentó su innovador proyecto de parques y de ceremonia inaugural ante el COI¨,
	autor : ¨por Melina Morales¨,
	detalle : ¨El Comité Organizador de los Juegos de la Juventud presentó su concepto de parques ante la 131a sesión del Comité Olímpico Internacional (COI) que se realizó en Lima. La ceremonia inaugural se realizará al aire libre.¨,
	imagen: ¨buenos-aires.jpg¨
}

crearNoticia(titulo, autor, detalle, imagen)
crearNoticia(noticia3[0], noticia3[1], noticia3[2], noticia3[3],)
crearNoticia(noticia4.titulo, noticia.autor, noticia4.detalle, noticia4.imagen)

// AMBITO: Linea de ejecucion funcional

function crearNoticia(t, a, d, i) {

let plantilla = document.querySelector(¨#ultimas-noticias article¨).cloneNode(true)

	plantilla.querySelector(¨h3¨).innerText = t
	plantilla.querySelector(¨p > a¨).innerText = a
	plantilla.querySelector(¨p:last-child¨).innerText = d

	plantilla.querySelector(¨img¨).src = ¨img/¨ i

	//reemplazar(¨h3¨, t)
	//reemplazar(¨p > a¨, a)

 	//console.log(plantilla) no quiero imprimirlo en la consola, sino en el documento

 	document.querySelector(¨#ultimas-noticias¨).appendChild( plantilla ) //silvio deja espacio en argumentos¿ de js

	//alert('Hola desde la funcion de crearNoticias')
	//alert('El titulo a mostrar es ' + t)
	//alert('Escrito por: ' + a)
	}

//para trabajar con la arquitectura de datos necesitamos una fuente de datos
//fuente de datos (bloc de notas, excel, ) - 
//datos determinados o indeterminados
//identificar las entidades para empezar a trabajar con los datos
//ambitos scoup ... lugares donde uno crea codigo, que permiten si pueden o no interactuar entre si, como por ejemplo las habitaciones
POR DEFAULT LO QUE ESTA EN UN AMBITO NO INTERACTUA CON LO QUE ESTA EN OTRO AMBITO, A MENOS QUE SE PROGRAME QUE SI
//scram - metodologias agiles / stream programing - para el trabajo individual
//codigo autodocumentado

//jason (notacion de objeto de js) notacion significa tipo de escritura
//YAML intenta remplazar a jason but no lo estaria logrando

//practica para la prox clase -- crear el archivo jason de las 4 noticias
//con ajax js tiene los medios para conectarse a una fuente de datos, consumir esa info, procesarla y usarla pa su funcionalidad} leer la documentacion de ajax