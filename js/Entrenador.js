function mostrarDetalles(id) {
  const stats = document.getElementById(id);
  stats.style.display = (stats.style.display === 'none' || stats.style.display === '') ? 'block' : 'none';
}

function seleccionarEntrenador(elemento) {
  const entrenadores = document.querySelectorAll('.entrenador-opcion');
  entrenadores.forEach(e => e.classList.remove('seleccionado'));
  elemento.classList.add('seleccionado');

  const entrenador = elemento.querySelector('.descripcion').textContent;
  localStorage.setItem('entrenadorSeleccionado', entrenador);
}

function seleccionarPokemon(elemento) {
  const pokemones = document.querySelectorAll('.pokemon-card');
  pokemones.forEach(p => p.classList.remove('seleccionado'));
  elemento.classList.add('seleccionado');

  const pokemon = elemento.querySelector('.descripcion').textContent;
  localStorage.setItem('pokemonSeleccionado', pokemon);
}

function cargarSeleccion() {
  const entrenadorSeleccionado = localStorage.getItem('entrenadorSeleccionado');
  const pokemonSeleccionado = localStorage.getItem('pokemonSeleccionado');

  if (entrenadorSeleccionado) {
    const entrenadores = document.querySelectorAll('.entrenador-opcion');
    entrenadores.forEach(e => {
      if (e.querySelector('.descripcion').textContent === entrenadorSeleccionado) {
        e.classList.add('seleccionado');
      }
    });
  }

  if (pokemonSeleccionado) {
    const pokemones = document.querySelectorAll('.pokemon-card');
    pokemones.forEach(p => {
      if (p.querySelector('.descripcion').textContent === pokemonSeleccionado) {
        p.classList.add('seleccionado');
      }
    });
  }
}

function iniciarCombate() {
  const entrenador = localStorage.getItem('entrenadorSeleccionado');
  const pokemon = localStorage.getItem('pokemonSeleccionado')

  if(entrenador && pokemon) {
    window.location.href = 'batalla.html';
  } else {
    alert("Debes de seleccionar un Entrenador y un Pokimon antes de combatir.");
  }
}

window.onload = cargarSeleccion;