const readline = require('readline-sync');

// Definir una lista de contactos vacía
let contactos = [];

// Función para agregar un contacto a la agenda
function agregarContacto(nombre, telefono) {
    contactos.push({ nombre, telefono });
    console.log(`Contacto ${nombre} agregado con éxito.`);
}

// Función para mostrar todos los contactos en la agenda
function mostrarContactos() {
    console.log("\nLista de Contactos:");
    contactos.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    });
    console.log();
}

// Función principal para ejecutar la agenda
function main() {
    console.log("Bienvenido a la Agenda de Contactos\n");

    while (true) {
        console.log("1. Agregar contacto");
        console.log("2. Mostrar contactos");
        console.log("3. Salir");

        const opcion = readline.question("Seleccione una opción: ");

        switch (opcion) {
            case '1':
                const nombre = readline.question("Ingrese el nombre del contacto: ");
                const telefono = readline.question("Ingrese el número de teléfono: ");
                agregarContacto(nombre, telefono);
                break;
            case '2':
                mostrarContactos();
                break;
            case '3':
                console.log("¡Hasta luego!");
                return;
            default:
                console.log("Opción no válida. Por favor, seleccione una opción válida.");
        }
    }
}

// Ejecutar la función principal
main();
