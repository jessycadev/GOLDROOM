import React, { useContext, useState } from 'react'
import { AppContent } from '../context/appContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Quarto = () => {
    const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent)
    const [idAlojamento, setAlojamento] = useState('')
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            axios.defaults.withCredentials = true
            const { data } = await axios.post(backendUrl + 'api/quarto/cadastro', { idAlojamento })
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
        <div className="border">
            <form onSubmit={onSubmitHandler}>
                <div className="flex items-center gap-3 w-full px-5 py-2.5">
                    <label htmlFor="country" className="">
                        Alojamentos
                    </label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
                            focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                    >
                        <option>Bill</option>
                        <option>Tecnicos</option>
                        <option>Supervior</option>
                    </select>
                </div>
                <div className='flex items-center gap-3 w-full px-5 py-2.5'>
                    <label htmlFor="country" className="">
                        Número Quarto Físico
                    </label>
                    <input
                        onChange={e => setAlojamento(e.target.value)} value={idAlojamento}
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
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
export default Quarto