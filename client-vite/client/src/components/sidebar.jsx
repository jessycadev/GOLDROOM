import { useContext } from 'react';
import { AppContent } from '../context/appContext'
import { FileSpreadsheet, GitBranch, LogOut, BookDashed } from "lucide-react";
import { useNavigate } from 'react-router-dom'

const sidebar = () => {

    const { userData } = useContext(AppContent)
    const navigate = useNavigate();

    return (
        <aside className='fixed static top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300'>
            {/* Logo */}
            <div className="p-6 text-xl font-bold border-b border-slate-700">
                Meu App
            </div>
            {/* Menu */}
            <nav className="flex-1 p-5 space-y-2">
                <MenuItem icon={<GitBranch size={18} />} label="Início" navegacao="/cadastro" />
                <MenuItem icon={<FileSpreadsheet size={18} />} label="Quartos" navegacao="/gerenciamento" />
                <MenuItem icon={<BookDashed size={18} />} label="Alojamento" navegacao="/dashboard" />
                <MenuItem icon={<BookDashed size={18} />} label="Usuarios" navegacao="/dashboard" />
                <MenuItem icon={<BookDashed size={18} />} label="Dashboard" navegacao="/dashboard" />
                <MenuItem icon={<BookDashed size={18} />} label="about" navegacao="/dashboard" />
                <MenuItem icon={<BookDashed size={18} />} label="dados" navegacao="/dashboard" />
                <MenuItem icon={<BookDashed size={18} />} label="grid" navegacao="/dashboard" />
            </nav>
            {/* Rodapé */}
            <div className="p-4 border-t border-slate-700">
                <MenuItem icon={<LogOut size={18} />} label="Sair" />
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

