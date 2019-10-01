// Patrón modular para cada sección del sitio
const section = (() => {

    // Objeto que guardará como objetos JQuery todos los elementos pertenecientes a la sección
    const elems = {
        elem : $('selector')
    };

    return {

        $ : elems

    };

})();

$(document).ready(function () {
    
});

$(window).on('load', () => {

});

$(window).resize(()=> {

});