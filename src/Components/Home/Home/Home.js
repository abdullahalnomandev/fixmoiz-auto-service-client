import React from 'react';
import Contract from '../Contract/Contract';
import Footer from '../../Shared/Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import ServicesCard from '../ServicesCard/ServicesCard';
import Testimonials from '../Testimonials/Testimonials';
import Warranties from '../Warranties/Warranties';

const Home = () => {
    return (
        <div>
            <Header />
            <ServicesCard />
            <Warranties />
            <Gallery />
            <Testimonials />
            <Contract />
            <Footer />
        </div>
    );
};

export default Home;