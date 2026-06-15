import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
    const [depoimentos, setDepoimentos] = useState([]);

    useEffect(() => {
        async function carregarDepoimentos() {
            const { data, error } = await supabase.from('depoimentos').select('*');

            if (error) {
                console.error(error);
                return;
            }

            setDepoimentos(data || []);
        }

        carregarDepoimentos();
    }, []);

    return (
        <>
            <Navbar />

            <Hero />

            <HowItWorks />

            <Benefits />

            <Testimonials depoimentos={depoimentos} />

            <Footer />
        </>
    );
}

export default Home;
