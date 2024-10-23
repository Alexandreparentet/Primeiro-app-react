import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Produtos from '../Pages/Produtos';
import NotFound from '../Pages/NotFound';
import Contato from "../Pages/Contato";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
