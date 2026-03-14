import mongoose from "mongoose";

const QuartoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: false,
            min: 2,
            max: 100,
        },
        numero: {
            type: Number,
            required: false,
            max: 50,
            unique: false,
        },
        leito: {
            type: Number,
            required: false,
            max: 50,
            unique: false,
        },
        local: {
            type: String,
            required: false,
            max: 50,
            unique: false,
        },
        descricao: {
            type: String,
            required: false,
            max: 50,
            unique: false,
        },
    },
    { timestamps: true }
);

const Quarto = mongoose.model("Quarto", QuartoSchema);
export default Quarto;
