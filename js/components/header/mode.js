// Seleccionamos elemento del menú 
const dataMode = document.querySelector("[data-mode]");

const mode = () => {
    dataMode.addEventListener("click", () =>{
        let darkmode = document.body;
        darkmode.classList.toggle('mode__dark'); // Agregamos y quitamos clase
        darkmode.classList.toggle('modeside__dark'); // Agregamos y quitamos clase
    });
   
}

export default mode; //Exportamos nuestro componente