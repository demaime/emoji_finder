Emoji finder.

6/9
Creación del componente <App />, que será la copa del árbol. Mi intención incialmente es crear la estructura buscada, para luego concentrarme rápidamente en la funcionalidad.
Creación del componente <SimbaSolgan />, que contiene el logo y el título del sitio.
Creación del componente <SearchBox />. Inicialmente, contiene el input con el que se realizará la búsqueda. En él, pretendo incorporar las funciones que guarden relación con la búsqueda de emojis.
Creación del componente <EmojisBox />, que contiene en este punto la totalidad de emojis (sus símbolos). Más adelante, deberá filtrar el contenido de acuerdo al valor (current.value) que se ingrese en el input de <SearchBox />
Finalizando el día, conseguí obtener el valor actual en el input durante la escritura, pero no se me ocurrió aún como interactuar entre los dos componentes que se ven afectados por ese valor. Quizá convenga unificar <SearchBox /> y <EmojisBox /> en un solo componente.

7/9
Tengo que traer el valor del input de <SearchBox /> para que pueda ser utilizado por <EmojisBox />, mostrando este segundo el emoji indicado. Como primer paso, importo <EmojisBox /> y lo renderizo al final, en lugar de hacerlo desde <App />
El método funciona: <EmojisBox /> recibe el valor corretcto y filtra sus resultados según lo solicitado.

8/9
Agregada la opción para copiar al clipboard el emoji clickeado, solo restaría conseguir que el div con el mensaje de éxito aparezca y desapareca cuando se realiza la acción de copy.
Consigo mostrar el mensaje de éxito al momento de clickear el emoji seleccionado a través del hook useState().
Se agrega el || para buscar tanto por "title" como por "keywords".



