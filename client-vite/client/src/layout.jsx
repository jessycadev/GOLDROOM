import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div className="h-screen flex flex-col">
            {/* HEADER */}
            <Navbar />
            <div className="flex flex-1">
                {/* SIDEBAR */}
                <Sidebar />
                {/* CONTEÚDO PRINCIPAL */}
                <main className="flex-1 bg-gray-100 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout