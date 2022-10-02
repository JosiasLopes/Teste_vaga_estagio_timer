"use strict"  //habilitando strict mode para detecção de erros e exceptions


/* variaveis iniciais*/
let hora = 0
let minutos = 60
let segundos = 60
let milisegundo = 1000


/*pega os componentes <span> que serão usados e atualizados*/
var eHora = document.getElementById('hora')
var eMinutos = document.getElementById('minutos')
var eSegundos = document.getElementById('segundos')
var eMilisegundos =  document.getElementById('milisegundo')


/*pega os componentes input text que serão utilizados para 
definir a quantidade de tempo desejada para a contagem
*/
var setMinutos = document.getElementById("setMinutos")
var setSegundos = document.getElementById("setSegundos")
var setHoras = document.getElementById("setHoras")

let cron
var ligado = false

/* Inicia os dois botoes pra iniciar ou resetar a contagem*/
var iniciar = document.getElementById("iniciar")
var resetar = document.getElementById("resetar")



iniciar.onclick = ()=> start()
resetar.onclick = () => reset()

/*evento que detecta as teclas I e P para pausar ou iniciar a contagem*/
document.addEventListener("keydown",(e)=>{
	if(e.keyCode==73){
		console.log("apertou I")
		if(ligado==false){
			start()
			ligado = true
		}
	}else if(e.keyCode==80){
		console.log("apertou P")
		if(ligado==true){
			pause()
			ligado = false
		}
	}
})

/* Aqui definimos que toda vez que o campo segundos mudar o valor sera colocado
no mostrador da contagem, e isso só ocorre se o cronometro estiver desligado
*/

setSegundos.onchange = ()=>{	
	if(ligado==false){
		segundos = setSegundos.value
		eSegundos.innerText = segundos
	}
}


setMinutos.onchange = ()=>{	
	if(ligado==false){
		minutos = setMinutos.value
		eMinutos.innerText = minutos
	}
}


setHoras.onchange = ()=>{	
	if(ligado==false){
		hora = setHoras.value
		eHora.innerText = hora
	}
}


/* essa função inicia a contagem regressiva definida
onde a cada 10 milisegundos a função timer é executada, e só é executada 
caso a variavel que inicia contagem seja falsa, essa mesma funcção chama a função de pausa no cronometro
caso a contagem seja iniciada*/
function start() {
	if(ligado==false){
		cron = setInterval(() => { timer()}, 10)
		ligado = true
	}else if(ligado==true){
	  pause()
		ligado = false
	}

  
}

/*Função que pausa o cronometro*/
function pause() {
  clearInterval(cron);
}

function reset() {
  hora = 0
  minutos = 60
  segundos = 60
  milisegundo = 1000
  eHora.innerText = '00';
  eMinutos.innerText = '00';
  eSegundos.innerText = '00';
  eMilisegundos.innerText = '000';
}


/*função que faz o gerenciamento da contagem onde:
 a cada vez que os segundos chhegam a 0 se decrementa em 1 o minuto e os segundos voltam a 60,
 o mesmo ocorre com os minutos em relação as horas
 */
function timer() {
	
	/*como o timer se repete a cada 10 milisegundos, 
	a variavel vai ser decrementada de 10 em 10 e isso 
	reduzirá os segundos em 1 cade vez que a função executar*/
  if ((milisegundo -= 10) == 0) {
    milisegundo = 1000
    segundos--
  }
  if (segundos == 0) {
    segundos = 60
    minutos--
  }
  if (minutos == 0) {
    minutos = 60
    hora--
  }
  if(hora<=0){
	  hora = 0
  }
  
  //Aqui os campos <span> são atualizados com os valores das variaveis calculadas
  eHora.innerText = hora
  eMinutos.innerText = minutos
  eSegundos.innerText = segundos
   eMilisegundos.innerText = milisegundo

}

//essa função recebe um input como paramtro e coloca porem acabou não sendo utilizada
function processaEntradas(input) {
  return input = `${input}`
}

