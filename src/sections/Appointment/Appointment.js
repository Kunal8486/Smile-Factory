import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810807265!2d-0.24168024584704212!3d51.52877184047419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1666254073802!5m2!1sen!2sbd'

    return (
    <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="google-map">
                        <iframe title='map' src={mapLink}></iframe>
                        <div className="location-name">
                            <AiFillHome />
                            <p>GT Road, Fatehbad, Haryana</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="appointment-form-area">
                        <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Mehta Dental Hospital is pleasure"
                            description="Experience personalized dental care with advanced treatments in a comfortable and friendly environment. Schedule your visit with our expert team today."
                        />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Appointment;