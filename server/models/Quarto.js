import mongoose from "mongoose";

const QuartoSchema = new mongoose.Schema(
    {
        idAlojamento: String,
    },
    { timestamps: true }
);

const Quarto = mongoose.model("Quarto", QuartoSchema);
export default Quarto;