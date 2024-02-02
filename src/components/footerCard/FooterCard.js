import React from 'react'


const FooterCard = ({heading, Icon, desc}) => {
    return (
        <div className='footerCard'>
            {Icon && <Icon />}
            <div className='footerCardText'>
                <h2>{heading}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default FooterCard
