import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

import Navbar from '../components/Navbar';
import PetsSection from '../components/PetsSection';
import Footer from '../components/Footer';

function Pets() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function carregarPets() {
            const { data, error } = await supabase.from('pets').select('*');

            if (error) {
                console.error(error);
                return;
            }

            setPets(data || []);
        }

        carregarPets();
    }, []);

    return (
        <>
            <Navbar />

            <section className="pets-banner">
                <h1>🐾 Encontre seu novo melhor amigo</h1>

                <p>Conheça os pets disponíveis para adoção e transforme uma vida com amor. ❤️</p>
            </section>

            <PetsSection pets={pets} />

            <Footer />
        </>
    );
}

export default Pets;
