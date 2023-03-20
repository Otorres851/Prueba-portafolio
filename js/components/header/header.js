// Seleccionamos cada elemento del menú 
const toggler = document.querySelector("[menu-toggler]");
const sidemenu = document.querySelector("[menu-active]");
const sidemenuClose = document.querySelector("[menu-close]");
const menuHeader = document.querySelector("[menu-header]");

const header = () => {
    // Función del menu lateral 
    toggler.addEventListener("click", () => {
        sidemenu.classList.add("sidemenu__active"); // Agregamos una nueva clase al menu lateral
        sidemenuClose.addEventListener("click", () => { 
        sidemenu.classList.remove("sidemenu__active"); //Eliminamos la nueva clase al menu lateral
        });      
    });
    // Función del encabezado 
    window.addEventListener("scroll", () => {
        const sc = window.pageYOffset; //Guardamos en una constante, el valor de desplazamiento vertical
        if (sc > 150) { // comparamos si el desplazamiento vertical es mayor de 150
            menuHeader.classList.add("menu__sticky"); // Agregamos una nueva clase al encabezado
            menuHeader.classList.add("menu__side"); // Agregamos una nueva clase al encabezado
        } else {
            menuHeader.classList.remove("menu__sticky"); //Eliminamos la nueva clase al encabezado
            menuHeader.classList.remove("menu__side"); //Eliminamos la nueva clase al encabezado
        }
    })
}

export default header; //Exportamos nuestro componente

