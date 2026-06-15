import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h2>🐾 AdotaPet</h2>

            <div>
                <Link to="/">Início</Link>

                <Link to="/pets">Pets</Link>
            </div>
        </nav>
    );
}

export default Navbar;
