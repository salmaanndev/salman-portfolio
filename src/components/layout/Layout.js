import React from 'react'
import './Layout.css'

const Layout = ({ children, id  }) => {


    return (
        <div className='layoutBody'>
            <div className='layout'>
                <div className='layoutLeft'>
                    <h1>Hi, I'm Salman <span>Ahmad</span></h1>
                    <p>
                        I'm a Full Stack Developer Based in Lahore, Pakistan
                    </p>
                    <button className='cvDownload'>Get in Touch</button>
                </div>
                <div className='layoutRight'>
                    {/*<img src="https://salmanahmad.online/wp-content/uploads/2023/11/admin-ajax.png" alt="Salman Ahmad" />*/}
                </div>
            </div>

            <div className='layoutItems'>
                <div id={id} className='services'>
                    <h1>My Services</h1>
                    <p className='craft'>Crafting Stories through design and innovation</p>
                    <div className='servicesBody'>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Layout
