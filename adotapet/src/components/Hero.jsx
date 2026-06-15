import { Link } from 'react-router-dom';

function Hero() {
    return (
        <header className="hero">
            <h1>🐾 AdotaPet</h1>

            <p className="hero-text">
                Dê uma segunda chance para um pet e encontre um amigo para toda a vida. 🐾❤️
            </p>

            <Link to="/pets">
                <button>Conhecer Pets</button>
            </Link>
        </header>
    );
}

export default Hero;
