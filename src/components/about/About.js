import React from 'react'
import './About.css'
const About = ({id}) => {
    return (
        <div id={id}className='about'>
            <div className='aboutSection1'>
                <h3>About Me</h3>
                <h1>Transforming visions<br /> into Portfolio</h1>
                <div className='about1Inner'>
                    <hr />
                    <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
                </div>
            </div>
            <div className='aboutSection2'>
                <div className='imgBackground'>
                    <img src="https://salmanahmad.online/wp-content/uploads/2023/11/admin-ajax.png" alt="Salman Ahmad" />
                </div>
            </div>
        </div>
    )
}

export default About
