import mongoose from "mongoose";

const QuartoSchema = new mongoose.Schema({
    nome: { type: String },
    numero: { type: Number},
    leitos: { type: Number },
    local: { type: String },
    descricao: { type: String},
},
    { timestamps: true }
);

const QuartoModel = mongoose.models.quarto || mongoose.model('quarto', QuartoSchema);

export default QuartoModel;



