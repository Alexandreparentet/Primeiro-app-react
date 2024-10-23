import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Sobre'>Sobre</Link></li>
                <li><Link to='/Produtos'>Produtos</Link></li>
                <li><Link to='/NotFound'>NotFound</Link></li>
            </ul>
        </nav>
    );
}
