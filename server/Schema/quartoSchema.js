import mongoose from "mongoose";

const QuartoSchema = new mongoose.Schema({
    idAlojamento: { type: String, required: true}
    },
    { timestamps: true }
);

const QuartoModel = mongoose.models.quarto || mongoose.model('quarto', QuartoSchema);

export default QuartoModel; 