import quartoSchema from "../Schema/quartoSchema.js";

export const Quarto = async (req, res) => {
    const {idAlojamento} = req.body;
    try {
        const quarto = new quartoSchema({idAlojamento})
        await quarto.save();
        return res.json({ success: true, quarto });
    } catch (error) {
        res.json({ success: false, message: 'Erro Funcao cadastroQuarto : ' + error.message })
    }
};
