import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Home/Header'
import WhyChoose from '../components/Home/WhyChoose'
import DentalCareSection from '../components/Home/DentalCareSection'
import ServicesSection from '../components/Home/ServicesSection'
import FAQSection from '../components/Home/FAQSection'
import ClinicFacilitySection from '../components/Home/ClinicFacilitySection'

const Homepgae = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <WhyChoose />
            <ServicesSection />
            <DentalCareSection />
            <ClinicFacilitySection />
            <FAQSection />









        </div>
    )
}

export default Homepgae