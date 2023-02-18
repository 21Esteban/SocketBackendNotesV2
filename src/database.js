import mongoose from "mongoose";


// ----------------------
mongoose.set('strictQuery', false);
// ----------------------

//para conectar la base de datos a la nube
const uri = "mongodb+srv://prueba:prueba@cluster0.ptdypkd.mongodb.net/BackendNotesV2";

export const connectDb= async ()=>{
    try {
        const db = await mongoose.connect(uri);
        console.log(`Conectado a la base de datos: ${db.connection.name}`);
    } catch (error) {
        console.log(`Error al conectarse a la base de Datos: ${error.message}`);
    }
}