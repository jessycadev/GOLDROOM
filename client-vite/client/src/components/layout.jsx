import React, { useContext } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Cadastro from '../pages/cadastro'

const Layout = () => {

    return (
        // CONTROLE DE LAYOUT DE PAGINA
        < div className = "min-h-screen bg-gray-100" >
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <main className="flex-1 p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Conteúdo Principal
                        </h2>
                        <div className="bg-white p-6 rounded shadow">
                            <Cadastro />
                        </div>
                    </main>
                </div>
            </div >
    )
}

export default Layout