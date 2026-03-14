import quartoSchema from "../Schema/quartoSchema.js";

export const incluir = async (req, res) => {
    
    const {nome, numero, leito, local, descricao} = req.body;
    
    try {
        const quarto = new quartoSchema({nome, numero, leito, local, descricao})
        await quarto.save();
        return res.json({ success: true, quarto });
    } catch (error) {
        res.json({ success: false, message: 'Erro Funcao cadastroQuarto : ' + error.message })
    }
};
