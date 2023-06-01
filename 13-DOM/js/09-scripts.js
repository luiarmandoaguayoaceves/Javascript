//******************************* */
//  Eliminar desde la etiqueta
//******************************* */
// const navegacion = document.querySelector('a');
// navegacion.remove();



//*******************************************/
//            Eliminar desde el padre 
//*******************************************/
const navegacion = document.querySelector('.navegacion')

console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);//eliminar desde el padre
