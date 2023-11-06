## Conseptos generales de Javascript importante saber 


### Scope
1. Scope (alcance) en esta practica se vera al alcance o los limites de las variables donde se asignen de manera global o dentro de alguna funcion que esten privadas. 

### Hosting
2. Hoisting en este tema hablamos de las funciones en dos fases de JS o lo que llamarian Hoisting Js funciona de la siguiente manera con respecto a las funciones se crean despues se ejecutan esto ya que almacena primero todas las funciones y despues se ejecuta en el navegador 

### Coercion
3. Coercion Se toma el tema de los tipos de datos que JS asigna en automatico a valores el principal problema de ello es que como no se le asigna un tipo de dato al declararlo puede llegar a perderse o a cambiar y eso puede llegar a generar muchos problemas 

### Implicit  Binding
4. Dandole el dato por implicito un dato dentro de donde esta su alcance ejemplo [04-app.js](https://github.com/luiarmandoaguayoaceves/Javascript/blob/main/46-DominandoJavaScript/js/04-app.js).

### Explicit Binding
5. En este tema de Explicit binding se toman valores de distintas variables una parte de un objeto y otra de un arreglo usando el metodo **call** (en call un arreglo se debe pasar dato por dato) despues de la funcion donde mandaremos esos datos pero tambien existe el metodo **apply** (puede tomar todo el arreglo) pero el funcionamiento es el mismo tomar los datos para incertarlo en un metodo con parametros pero tambien sin parametros pero se debe usar el implicit binding en ese caso ejemplo en la practica 5 [05-app.js](https://github.com/luiarmandoaguayoaceves/Javascript/blob/main/46-DominandoJavaScript/js/05-app.js)
y para termianr se tiene otra funcion que se llama **bind** pero a diferencia de este metodo este se debe almacenar en otra variable basicamente genera una funcion nueva y la sitaxis es la misma que la de call en el cual se ponen los parametros por separado uno por uno.

## New Binding
6. se usa como las clases de POO pero se llama New Binding pero se muestran tambien las variables de la ventana principal en el navegador "Window"

## Event Loop
7. Modelo de concurrencia y loop de eventos esto es sobre la prioridad que tienen las lineas de codigo en el navegador Javascript es de un solo hilo [Documentacion de prioridades](https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop)

## Self
8.  Es lo equivalente window a self y algunos lo usan para ser explcitos con el this de los datos 