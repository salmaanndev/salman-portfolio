import React from 'react'


const NavbarButtons = ({ name, OnClick }) => {

    return (
            <button className="btnStyle1" onClick={OnClick} style={{fontSize: "30px", padding: "23px 20px", cursor: "pointer"}}>{name}</button>

    )
}

export default NavbarButtons
