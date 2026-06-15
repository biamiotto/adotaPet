function Testimonials({ depoimentos = [] }) {
    return (
        <section className="depoimentos">
            <h2>❤️ Histórias Felizes</h2>

            <div className="grid">
                {depoimentos.map((dep) => (
                    <div className="depoimento" key={dep.id}>
                        <h3>{dep.nome}</h3>

                        <p>⭐⭐⭐⭐⭐</p>

                        <p>"{dep.comentario}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
