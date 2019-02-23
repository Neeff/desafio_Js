'use strict'

window.addEventListener('load', () => { 
        var links_pagina = document.getElementsByTagName('a');
        console.log("cantidad de enlaces:", links_pagina.length);
        var penultimo_enlace = document.getElementsByTagName('a');
        console.log('enlace al que apunta:',penultimo_enlace[(links_pagina.length)-2].origin); 
        var contador = 0
        for (let i = 0; i < links_pagina.length; i++) {
                const element = links_pagina[i];
                if (element.origin === 'http://prueba') {
                        contador = contador +1;
                }

                
        }
        console.log('numeros de enlaces que enlazan a  http://prueba:',contador);
        var parrafos = document.getElementsByTagName('p');
        console.log('numero de enlaces del tercer parrafo:',parrafos[parrafos.length -1].childElementCount);

})