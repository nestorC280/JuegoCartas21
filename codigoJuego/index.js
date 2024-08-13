//import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'
import _ from 'underscore'
//import {crearDeck} from './funcionesEspeciales/crear-baraja'
//import crearDeck from './funcionesEspeciales/crear-baraja';

//import {pedirCarta} from './funcionesEspeciales/pedir-carta';
//import { valorCarta } from './funcionesEspeciales/valor-carta';

import { crearDeck, pedirCarta, valorCarta } from './funcionesEspeciales';


  //Variables globales
  let deck =[];
  const letras = ['A','J','K','Q'];
  let puntosJugador = 0;
  let puntosComputadora = 0;
  let $puntosJugador = document.querySelector('#pt-jugador');
  let $puntosComputadora = document.querySelector('#pt-computadora');
  
  let $titulo = document.querySelector('h1');
  
  
  const $botones = document.querySelectorAll('.boton');
  const $idjugadorcarta = document.querySelector('#jugador-carta');
  const $icomputadoracarta = document.querySelector('#computadora-carta');
  
  
  
  
  
  crearDeck(deck,letras);
  //console.log(deck);
  //Pedir un carta
  
//   let pedirCarta = ()=>{
//       let carta = deck.pop();
//       return carta;
//   }
  
  
  
  
  // Le damos valor numérico a las cartas
  
//   const valorCarta = (carta)=>{
//       //console.log(carta);
//       return (!(isNaN(carta.substring(0, carta.length - 1))))?carta.substring(0, carta.length - 1)*1:
//               (carta.substring(0, carta.length - 1) === 'A')? 11: 10 ;
  
//   }
  
  const juegoComputadora =(puntos)=>{
      while((puntos >= puntosComputadora) && (puntos <= 21) ){
          
      let carta = pedirCarta(deck);
      //console.log(carta);
      puntosComputadora = puntosComputadora + valorCarta(carta);
      //console.log(puntosComputadora);
      $puntosComputadora.innerText = `${puntosComputadora}`;
      let $imagenCarta = document.createElement('img');
      $icomputadoracarta.append($imagenCarta);
      $imagenCarta.src = `cartas/${carta}.png`;
      $imagenCarta.classList.add('carta');
     
      }
     
      setTimeout(() => {
          if(puntosComputadora > 21){
              $titulo.innerText = 'Ganaste la partida, la computadora se paso de 21';
          }
          if((puntosComputadora > puntos) && (puntosComputadora <= 21)){
              $titulo.innerText = 'Perdiste, la computadora tiene puntaje más alto';
          }
          if((puntosComputadora === 21) && (puntosJugador === 21)){
              $titulo.innerText = 'Empate, ambos tiene 21 puntos';
          }
      }, 100);
  
  }
  
  
  //console.log(valorCarta(pedirCarta()));
  
  // Pedir carta y sumar puntos
  
  $botones[1].addEventListener('click', ()=>{
      let carta = pedirCarta(deck);
      //console.log(carta);
      puntosJugador = puntosJugador + valorCarta(carta);
      //console.log(puntosJugador);
      $puntosJugador.innerText = `${puntosJugador}`;
  
      //Mostramos la imagen de la carta 
      //Creamos el elemento imagen
      let $imagenCarta = document.createElement('img');
      //se lo vamos agregando al id jugador-carta del html
      $idjugadorcarta.append($imagenCarta);
      $imagenCarta.src = `cartas/${carta}.png`;
      $imagenCarta.classList.add('carta');
  
      if(puntosJugador > 21){
          $botones[1].disabled = true;
          $botones[1].classList.add('botonApagado');
          $botones[2].disabled = true;
          $botones[2].classList.add('botonApagado');
         $titulo.innerText = 'PERDISTE: te pasate de 21 puntos';
         
      }else if(puntosJugador===21){
          $botones[1].disabled = true;
      }
  })
  
  $botones[2].addEventListener('click',()=>{
      
      juegoComputadora(puntosJugador);
      $botones[1].disabled = true;
      $botones[1].classList.add('botonApagado');
      $botones[2].disabled = true;
      $botones[2].classList.add('botonApagado');
      
  
  })
  
  $botones[0].addEventListener('click',()=>{
      //location.reload();
      console.clear();
      puntosComputadora = 0;
      $puntosComputadora.innerText = `${puntosComputadora}`;
      puntosJugador = 0;
      $puntosJugador.innerText = `${puntosJugador}`;
      deck = [];
      deck = crearDeck(deck,letras);
      $botones[1].disabled = false;
      $botones[1].className= 'boton';
      $botones[2].disabled = false;
      $botones[2].className = 'boton';
      $idjugadorcarta.innerHTML = '';
      $icomputadoracarta.innerHTML = '';
  
      $titulo.innerText = 'Blackjack';
      //console.log(deck);
  
  })

  //npm run dev
  
   
  
  
  
  
  
  
  
  
  
  
  