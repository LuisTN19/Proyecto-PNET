document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    let errores = false;

    // Nombre--------------------------------------------------------------
    let nombre = document.getElementById("nombre");
    let errorNombre = document.getElementById("error-nombre");
    let expresionNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre && (nombre.value.trim() === "" || !expresionNombre.test(nombre.value))) {
        errorNombre.textContent = "El nombre solo debe contener letras y espacios.";
        nombre.classList.add("error-input");
        errores = true;
    } else if (nombre) {
        errorNombre.textContent = "";
        nombre.classList.remove("error-input");
    }

    // Teléfono--------------------------------------------------------------
    let telefono = document.getElementById("telefono");
    let errorTelefono = document.getElementById("error-telefono");
    let expresionTelefono = /^\+?[0-9\s-]+$/; // Permite números, espacios, guiones y opcionalmente el +

    if (telefono && telefono.value.trim() !== "" && !expresionTelefono.test(telefono.value)) {
        errorTelefono.textContent = "Ingrese un teléfono válido (solo números y opcionalmente +).";
        telefono.classList.add("error-input");
        errores = true;
    } else if (telefono) {
        errorTelefono.textContent = "";
        telefono.classList.remove("error-input");
    }

    // Correo electrónico-----------------------------------------------------
    let email = document.getElementById("email");
    let errorEmail = document.getElementById("error-email");

    if (email && email.value.trim() === "") {
        errorEmail.textContent = "El correo electrónico es obligatorio.";
        email.classList.add("error-input");
        errores = true;
    } else if (email) {
        errorEmail.textContent = "";
        email.classList.remove("error-input");
    }

    // Política de Privacidad-------------------------------------------
    let politica = document.getElementById("politica");
    let errorPolitica = document.getElementById("error-politica");

    if (politica && !politica.checked) {
        errorPolitica.textContent = "Debe aceptar la política de privacidad.";
        errores = true;
    } else if (politica) {
        errorPolitica.textContent = "";
    }

    

    // Sala -----------------------------------------------------------------
    let tipoSala = document.getElementById("tipo-sala");
    let errorTipoSala = document.getElementById("error-tipo-sala");

    if (tipoSala && tipoSala.value === "") {
        errorTipoSala.textContent = "Debe seleccionar un tipo de sala.";
        tipoSala.classList.add("error-input");
        errores = true;
    } else if (tipoSala) {
        errorTipoSala.textContent = "";
        tipoSala.classList.remove("error-input");
    }

    //  Número de Personas --------------------------------------------------------------
    let personas = document.getElementById("personas");
    let errorPersonas = document.getElementById("error-personas");
    const capacidades = {
        futbol: 50,
        piscina: 200,
        "futbol-sala": 10,
        baloncesto: 20,
        cardio: 30,
        tenis: 4,
        boxeo: 15,
        atletismo: 30,
        musculacion: 50,
        funcional: 20,
        crossfit: 20,
        "tenis-mesa": 4,
    };

    if (personas && personas.value.trim() === "" || isNaN(personas.value) || personas.value <= 0) {
        errorPersonas.textContent = "Ingrese un número válido de personas.";
        personas.classList.add("error-input");
        errores = true;
    } else if (personas && tipoSala.value && personas.value > capacidades[tipoSala.value]) {
        errorPersonas.textContent = `La capacidad máxima para esta sala es de ${capacidades[tipoSala.value]} personas.`;
        personas.classList.add("error-input");
        errores = true;
    } else if (personas) {
        errorPersonas.textContent = "";
        personas.classList.remove("error-input");
    }

    // Fecha-------------------------------------------------------------------------------
    let fecha = document.getElementById("fecha");
    let errorFecha = document.getElementById("error-fecha");
    let fechaActual = new Date().toISOString().split("T")[0]; // Fecha actual en formato YYYY-MM-DD

    if (fecha && fecha.value.trim() === "") {
        errorFecha.textContent = "La fecha es obligatoria.";
        fecha.classList.add("error-input");
        errores = true;
    } else if (fecha && fecha.value < fechaActual) {
        errorFecha.textContent = "La fecha debe ser posterior a la fecha actual.";
        fecha.classList.add("error-input");
        errores = true;
    } else if (fecha) {
        errorFecha.textContent = "";
        fecha.classList.remove("error-input");
    }

    // Horas----------------------------------------------------------------------------------
    let horaInicio = document.getElementById("hora-inicio");
    let horaFin = document.getElementById("hora-fin");
    let errorHoras = document.getElementById("error-horas");

    if (horaInicio && horaFin && horaInicio.value.trim() === "" || horaFin.value.trim() === "") {
        errorHoras.textContent = "Debe seleccionar un rango de horas válido.";
        horaInicio.classList.add("error-input");
        horaFin.classList.add("error-input");
        errores = true;
    } else if (horaInicio && horaFin && horaInicio.value >= horaFin.value) {
        errorHoras.textContent = "La hora de inicio debe ser anterior a la hora de fin.";
        horaInicio.classList.add("error-input");
        horaFin.classList.add("error-input");
        errores = true;
    } else if (horaInicio && horaFin) {
        errorHoras.textContent = "";
        horaInicio.classList.remove("error-input");
        horaFin.classList.remove("error-input");
    }





    //-------------------------------------------------------------------------------------------
    if (!errores) {
        alert("Formulario completado con éxito.");
        this.submit(); // Enviar el formulario
    }
});



