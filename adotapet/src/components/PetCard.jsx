function PetCard({ pet }) {
    return (
        <div className="card">
            <img src={pet.foto} alt={pet.nome} />

            <h3>{pet.nome}</h3>

            <p>🐾 {pet.tipo}</p>

            <p>🎂 {pet.idade}</p>

            <p>📍 {pet.cidade}</p>

            <p>{pet.descricao}</p>

            <button>Quero Adotar ❤️</button>
        </div>
    );
}

export default PetCard;
