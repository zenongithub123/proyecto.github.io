const inicio = document.getElementById('inicio');
const final = document.getElementById('final');
const texto = document.getElementById('texto');


let recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = false;


recognition.onresult = (event) =>{
	const results = event.results;
	const frase = results[results.length -1][0].transcript;
	texto.value += frase;
	console.log(results);
}

inicio.addEventListener("click",() =>{
	
	recognition.start();
});


final.addEventListener('click',() => {
	recognition.abort();
	console.log('se detuvo la ejecucion');
})