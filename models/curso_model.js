const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumnoSchema = new mongoose.Schema({
    nombre:String,
    email: String
})
const cursoSchema = new mongoose.Schema({
    titulo: {
        type:String,
        required: true
    },
    alumnos: [alumnoSchema],        
    autor:{
        type: Schema.Types.ObjectId, ref: 'Usuario'
    },   
    descripcion: {
        type:String,
        required:false
    },    
    estado: {
        type: Boolean,
        default: true
    },
    imagen: {
        type: String,
        required: false        
    },
    califica: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Curso', cursoSchema);