// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

console.log(links);

function ativarLink(link) {
	const url = location.href;

	if (url.includes(link.href)) {
		link.classList.add("ativo");
	}
}

links.forEach(ativarLink);

// ativar items do orcamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(paramentro) {
	const elemento = document.getElementById(paramentro);

	if (elemento) {
		elemento.checked = true;
	}
}

parametros.forEach(ativarProduto);

//perguntas frequentes
const pergutnas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
	const pergunta = event.currentTarget;
	const controls = pergunta.getAttribute("aria-controls");
	const respota = document.getElementById(controls);

	respota.classList.toggle("ativo");

	const ativo = respota.classList.contains("ativo");

	pergunta.setAttribute("aria-expanded", ativo);
}

function eventosPerguntas(pergunta) {
	pergunta.addEventListener("click", ativarPergunta);
}

pergutnas.forEach(eventosPerguntas);

// galeria
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
	const img = event.currentTarget;
	if (matchMedia("(min-width: 1000px").matches) {
		galeriaContainer.prepend(img);
	}
}

function eventosGaleria(img) {
	img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// animacao
if (window.SimpleAnime) {
	new SimpleAnime();
}
