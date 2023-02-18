import {disconnect} from "mongoose"
import {Server} from "socket.io"
import { noteModel } from "../models/note.model.js"

export const socket=(server)=>{
    const io = new Server(server)

    io.on("connection",(socket)=>{
        console.log("User conectado",socket.id)


        const getNotes = async ()=>{
            const notes = await noteModel.find()
            io.emit("server:getNotes",notes)
        }

        getNotes();


        socket.on("client:addNote",async(note)=>{
            await noteModel.create(note)
            getNotes()
        })

        socket.on("client:updateNote",async(note)=>{
            await noteModel.findByIdAndUpdate({_id:note._id},note)
            getNotes()
        })

        socket.on("client:deleteNote",async(id)=>{
            await noteModel.findByIdAndDelete(id) //utilizar _id en lugar de id
            getNotes()
        })

        socket.on(disconnect,()=>{
            console.log("usuario desconectado", socket.id)
        })

        

    })
}
