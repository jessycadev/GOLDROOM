import React, { useContext, useState } from 'react'
import { AppContent } from '../context/appContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Alojamento = () => {

    const { backendUrl, getUserData } = useContext(AppContent)

    const [nome, setNome] = useState('')
    const [leito, setLeito] = useState('')
    const [local, setLocal] = useState('')
    const [descricao, setDescricao] = useState('')
    const [numero, setNumero] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            axios.defaults.withCredentials = true
            const { data } = await axios.post(backendUrl + 'api/quarto/incluir', { nome, leito, local, descricao })
            if (data.success) {
                getUserData()
                toast.success('Quarto Cadastrado com Sucesso')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="">
            <form onSubmit={onSubmitHandler}>
                <div className='flex items-center gap-3 w-full px-5 py-2.5'>
                    <label htmlFor="country" className="">
                        Nome
                    </label>
                    <input
                        onChange={e => setNome(e.target.value)} value={nome}
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
                            focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"/>
                </div>
                <div className='flex items-center gap-3 w-full px-5 py-2.5'>
                    <label htmlFor="country" className="">
                        Numero
                    </label>
                    <input
                        onChange={e => setNumero(e.target.value)} value={numero}
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
                            focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"/>
                </div>
                <div className='flex items-center gap-3 w-full px-5 py-2.5'>
                    <label htmlFor="country" className="">
                        Quantidade Quartos
                    </label>
                    <input
                        onChange={e => setLeito(e.target.value)} value={leito}
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
                            focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"/>
                </div>
                <div className='flex items-center gap-3 w-full px-5 py-2.5'>
                    <label htmlFor="country" className="">
                        Local
                    </label>
                    <input
                        onChange={e => setLocal(e.target.value)} value={local}
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
                            focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"/>
                </div>
                <div className='flex items-center gap-3 w-full px-5 py-2.5'>
                    <label htmlFor="country" className="">
                        Descrições adicionais
                    </label>
                    <input
                        onChange={e => setDescricao(e.target.value)} value={descricao}
                        type="text"
                        placeholder=""
                        className="w-full h-50 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
                            focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"/>
                </div>
                <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 
                    to-indigo-900 text-white font-medium'>
                    CADASTRAR
                </button>
            </form>
        </div>
    )
}
export default Alojamento