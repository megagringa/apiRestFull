//Relaciones por referencia (normalización) -> Consistencia
let usuario = {
    id: 'U0001',
    nombre: 'Grover',
    email: 'mail.grover@email.com'
}

let curso = {
    id: 'C0001',
    id_alumnos:['U0001','U0002','U0003'],
    titulo:'JavaScript Moderno',
    descripcion: 'xxxx'
}

//Relaciones por documentos emebebidos (Desnormalización) -> Performance
let curso = {
    id: 'C0001',
    autor: {
        nombre:'Carlos Perez',
        email:'carlos@email.com'
    },
    id_alumnos:
        [
            {id: 'A0001', nombre:'Grover', email:'grover@email.com'},
            {id: 'A0002', nombre:'Ana', email:'ana@email.com'}
        ],
    titulo:'JavaScript Moderno',
    descripcion: 'xxxx'
}

// let curso_alumno = {
//     id:'0001',
//     id_curso:'C0001',
//     id_alumno:'A0001'
// }