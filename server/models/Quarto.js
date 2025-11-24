import mongoose from "mongoose";

const QuartoSchema = new mongoose.Schema(
    {
        idQuarto: Number,
        status: String,
        alojamento: String,
        idUsuario: String,
        usuario: String,
    },
    { timestamps: true }
);

const Quarto = mongoose.model("Quarto", QuartoSchema);
export default Quarto;