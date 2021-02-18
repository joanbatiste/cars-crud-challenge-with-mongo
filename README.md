
## START

```
npm i
npm start
```

# RETO


#### API CON UN RECURSO CRUD CON PERSISTENCIA EN MEMORIA 
### con Base de Datos emulada 

este proyecto sera una buena aproximación a la manera de hacer las cosas con buenas practicas de backend, pero no será la definitiva, ejecutandolo nos daremos cuenta de algunos problemas que nos podemos encontrar y entenderemos por que hacemos las cosas asi en las siguientes sesiones.



> commit:  'kickoff'
> timebox: 5mins

Crearemos un directorio en el cual comenzaremos un proyecto node asociado a un repositorio git.



> commit:  'install dependencies - express'
> timebox: 5mins

Utilizaremos la libreria Express por tanto, instalamos las dependencias y efectuamos una comprobación de que la libreria esta disponible y funcional antes de hacer el commit.


> commit:  'start rules'
> timebox: 5mins

Creamos un punto de partida para nuestra aplicacion que comience un servidor http por el puerto 3000
* archivo app.js en la raiz del proyecto 
* añadir script npm start al package.json  ( si no sabemos ... googleamos )


> commit:  'dabatase mock definition'
> timebox: 15mins

Se requiere escribir una clase que gestione el estado de modo que emule el comportamiento de una base de datos, esta clase tendra un constructor que emite un console log indicando que se ha creado un nuevo estado.
### requisitos
* Esta clase estara en el directorio raiz
* La clase tendra una propiedad llamada state que es un array de objetos.
* La clase tendra un metodo set que reciba por parametro un objeto y tras agregar el objeto al array state devuelve una promesa con el numero total de elementos que hay ahora en el array
* La clase tendra un metodo get que devuelve una promesa de los ultimos 10 datos guardados en el estado.

testearemos el funcionamiento de la clase antes de hacer el commit con la feature.


> commit:  'create CarModel'
> timebox: 5mins

Crearemos un directorio llamado *models* y dentro de el un archivo llamado "car" que sera la definicion del modelo Car en este archivo crearemos una clase llamada Car con un constructor, dicha clase con las siguientes propiedades.
* brand  // que hace referencia a la marca
* model  // que hace referencia al modelo
* year   // que hace referencia al año de matriculacion


> commit:  'create CarController'
> timebox: 5mins

Crearemos un directorio llamado Controllers y dentro de el un archivo llamado "car" que sera el controlador de nuestro recurso cars en este archivo crearemos una clase llamada Car con un constructor y la dejaremos vacia.




> commit: 'connect CarController with mock database'
> timebox: 10 mins

Vamos a hacer que el constructor de la clase Car de directorio Controllers cree una instancia de la clase State y la depositamos en la propiedad store de dicha clase, esta propiedad la crearemos en este commit.


> commit: 'fix store name to state'
> timebox: 5 mins

al leer el siguiente requerimiento nos hemos dado cuenta de que el metodo store se llama igual que la propiedad store anteriormente creada por tanto tenemos que hacer un fix commit antes de proseguir.

> commit: 'create crud scaffolding'
> timebox: 10 mins

crear metodos en la clase Car de directorio Controllers cada uno de los metodos debe devolver una promesa de momento vacia.

los metodos seran

*indexAll
*store
*destroy
*update

# READ FEATURE
> commit: 'add indexAll function'
> timebox: 15 mins

escribir la logica de negocio del metodo indexAll de manera que devuelva la promesa del array de objetos almacenados en la propiedad store.

# STORE FEATURE

> commit: 'add store logic'
> timebox: 15 mins

escribir la logica de negocio del metodo store, este metodo va a recibir por parametro una instancia del modelo Car, esta instancia se la pasara al metodo set de la propiedad "storage", y por ultimo devuelve una promesa del numero total de elementos que hay en el array de la propiedad storage.

# UPDATE FEATURE

> commit: 'add findById method'
> timebox: 15 mins

una propiedad nativa de una base de datos es poder modificar un elemento concreto, para eso la propia base de datos tiene que tener algun mecanismo para acceder a este dato, por tanto añadiremos a la clase State un metodo findById que recibira un entero que representa el id del elemento a buscar y devolverá una promesa de dicho elemento.
El id en nuestro mock sera la posicion del array en la que se encuentre un elemento, por tanto mediante el id recibido obtendremos el elemento mediante su posicion directa array[id + 1] en caso de no existir un elemento en dicha posicion generaremos y devolveremos la promesa de un error.



> commit: 'add updateById method'
> timebox: 15 mins

una propiedad nativa de una base de datos es poder modificar un elemento concreto, crearemos un nuevo metodo updateById que reciba dos parametros el primero el id y el segundo el objeto a modificar, nuestro metodo utilizara el metodo anterior para buscar, y una vez obtenida la promesa del elemento, resolvera el guardado del elemento antes de devoler la promesa con el elemento modificado.
 
> commit: 'add update logic'
> timebox: 15 mins

escribir la logica de negocio del metodo update, este metodo va a recibir por parametro una instancia del modelo Car ademas de un numero entero que representa el identificador del car a modificar, esta instancia se la pasara al metodo updateById de la propiedad "state", y por ultimo devuelve una promesa del elemento ya modificado.



# DELETE FEATURE

> commit: 'add deleteById method'
> timebox: 15 mins

una propiedad nativa de una base de datos es poder eliminar un elemento concreto, para eso la propia base de datos tiene que tener algun mecanismo para realizar esta funcion, al eliminars un elemento su indice debe dejar de estar disponible, al ser nuestra clase State un emulador de base de datos, utilizaremos el "truco" de guardar el valor null en el indice correspondiente al elemento. array[id + 1] 


> commit: 'add delete logic'
> timebox: 15 mins

escribir la logica de negocio del metodo delete, este metodo va a recibir por parametro un id que es un numero entero que representa el identificador del car a eliminar, este id se le pasara al metodo deleteById de la propiedad "state", y por ultimo devuelve una promesa confirmando que el elemento se ha eliminado.



# ENDPOINTS

> commit: 'add restful router'
> timebox: 30 mins

crearemos un archivo llamado routes en la raiz del proyecto

este archivo requerirá express y lo guardara en una variable express, 

y en el...

crearemos una variable como constante llamada "router" cuyo valor lo obtendremos de ejecutar el metodo Router() del objeto express.

al final del archivo exportaremos la variable router con module.exports

invocaremos el archivo router desde app.js y conectaremos la app con nuestro router.


exploraremos que guarda la variable router e investigaremos como podemos incluir finalmente las rutas en el proyecto que ya hemos creado.


