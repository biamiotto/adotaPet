function PetsSection({ pets }) {
    return (
        <section className="pets">
            <h2>🐾 Pets Disponíveis</h2>

            <div className="grid">
                {pets.map((pet) => (
                    <div className="card" key={pet.id}>
                        <img src={pet.foto} alt={pet.nome} />

                        <h3>{pet.nome}</h3>

                        <p>{pet.tipo}</p>

                        <p>{pet.idade}</p>

                        <p>{pet.descricao}</p>

                        <button>Quero Adotar ❤️</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PetsSection;
