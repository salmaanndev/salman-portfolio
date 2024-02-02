import React, { useState } from 'react'
import './Contact.css'
import Stats from '../stats/Stats'

const Contact = (id) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', data);
    };
    return (
        <div id={id} className='contact'>
            <div className='contactLeft'>
                <span><p>Design </p>  and <br />Innovation </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione voluptatem sequi nesciuNeque porro quisquam est, oursqui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam</p>
                <div className='stats'>
                    <Stats rating="100+" title="Complete Projects" />
                    <Stats rating="800+" title="Client Reviews" />
                </div>

            </div>
            <div className='contactRight'>

                <h1>GET IN TOUCH?</h1>
                <p>For your car we will do everything advice design in us repairs and maintenance We are the some preferred.</p>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' value={data.name} onChange={handleChange} placeholder='Your Name' />
                    <input type='email' name='email' value={data.email} onChange={handleChange} placeholder='Your Email' />
                    <input type='phone' name='phone' value={data.phone} onChange={handleChange} placeholder='Your Phone' />
                    <input type='text' name='message' value={data.message} onChange={handleChange} placeholder='Your Message' />
                    <button type='submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
