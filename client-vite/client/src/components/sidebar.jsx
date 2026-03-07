import { useContext } from 'react';
import { AppContent } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const sidebar = () => {

    const { userData } = useContext(AppContent)
    const navigate = useNavigate();

    return (
        <aside className='fixed static top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300'>
            {/* Logo */}
            <h1 className="text-xl font-bold p-5">
                Meu Sistema
            </h1>
            {/* Menu */}
            <nav className="flex flex-col p-5">
                <Link to="/alojamento" className="hover:bg-gray-700 p-2 rounded">
                    Alojamento
                </Link>
                <Link to="/quarto" className="hover:bg-gray-700 p-2 rounded">
                    Quarto
                </Link>
            </nav>
            {/* Rodapé */}
            <div className="p-4 border-t border-slate-700 p5">
                <Link to="/config" className="hover:bg-gray-700 p-2 rounded">
                    Sair
                </Link>
            </div>
        </aside>
    );

    function MenuItem({ icon, label, navegacao }) {
        return (
            <button
                onClick={() => navigate(navegacao)}
                className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-left hover:bg-slate-800 transition">
                {icon}
                <span className="text-sm font-medium">{label}</span>
            </button>
        );
    }

}

export default sidebar

