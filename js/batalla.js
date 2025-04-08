const pokimonesDsiponibles = {
    Voltrip: {Ataque: 80, velocidad: 110, imagen: "../assets/img/Voltrip.png"},
    Terracoon: {Ataque: 85, velocidad: 55, imagen: "../assets/img/Terracoon.png"},
    Spectowl: {Ataque: 70, velocidad: 90, imagen: "../assets/img/Spectowl.png"},
    Flamdrake: {Ataque: 95, velocidad: 85, imagen: "../assets/img/Flamdrake.png"},
    Aquanix: {Ataque: 75, velocidad: 60, imagen: "../assets/img/Aquanix.png"}
}

function iniciarCombate() {
    const entrenador = localStorage.getItem('entrenadorSeleccionado');
    const pokimonUsuario = localStorage.getItem('pokimonSeleccoinado');


    if (!entrenador || !pokimonUsuario) {
        alert('Selecciona un Entrenador y un Pokimon antes de Combatir')
        window.location.href = "Entrenador.html"
        return;
    }

    const nombresPokimones = Object.keys(pokimonesDsiponibles)
    const pokimonMaquina = nombresPokimones[Math.floor(Math.random() * nombresPokimones.length)]
    const statsUsuario = pokimonesDsiponibles [pokimonUsuario.toLowerCase()];
    const statsMaquia = pokimonesDsiponibles [pokimonMaquina.toLowerCase()];

    document.getElementById("entrenador-nombre").textContent = entrenador;
    document.getElementById("pokimon-usuario").textContent = pokimonUsuario;
    document.getElementById("ing-usuario").src = statsUsuario.imagen;
    document.getElementById("pokimon-maquina").textContent = pokimonMaquina;
    document.getElementById("img_maquina").src = statsMaquia.imagen;

    const poderUsuario = statsUsuario.Ataque + statsUsuario.velocidad;
    const poderMaquina = statsMaquia.Ataque + statsMaquia.velocidad;

    let resultado = "!Ha sido un Empate¡"
    if (poderUsuario > poderMaquina) {
        resultado = "!Haz Ganado¡ 🥳"
    } else if (poderUsuario < poderMaquina) {
        resultado = "!Haz Perdido¡ 😔" 
    }

    document.getElementById("resultado").textContent = resultado;
}

window.onload = iniciarCombate;