'use strict'
window.addEventListener 'load', ->
  links_pagina = document.getElementsByTagName('a')
  console.log 'cantidad de enlaces:', links_pagina.length
  penultimo_enlace = document.getElementsByTagName('a')
  console.log 'enlace al que apunta:', penultimo_enlace[links_pagina.length - 2].origin
  contador = 0
  i = 0
  while i < links_pagina.length
    element = links_pagina[i]
    if element.origin == 'http://prueba'
      contador = contador + 1
    i++
  console.log 'numeros de enlaces que enlazan a  http://prueba:', contador
  parrafos = document.getElementsByTagName('p')
  console.log 'numero de enlaces del tercer parrafo:', parrafos[parrafos.length - 1].childElementCount
  return