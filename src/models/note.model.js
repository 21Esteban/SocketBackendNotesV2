import mongoose from "mongoose";
const { Schema, model } = mongoose;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El campo title es requerido"],
    },
    description: {
      type: String,
      required: [true, "El campo description es requerido"],
    },
    category: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  { versionKey: false, timestamps: true }
);

export const noteModel = model("note", noteSchema);
