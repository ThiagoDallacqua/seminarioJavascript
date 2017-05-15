var pacientePeso = document.querySelector('#pesoPaulo');
var pacienteAltura = document.querySelector('#alturaPaulo');
var pacienteImc = document.querySelector('#imcPaulo');

pacienteImc.textContent = parseInt(pacientePeso.textContent) / (parseInt(pacienteAltura.textContent) * parseInt(pacienteAltura.textContent));
