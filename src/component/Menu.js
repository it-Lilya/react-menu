import React from "react";
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
          <NavLink className='menu__item' to="/">Главная</NavLink>
          <NavLink className='menu__item' to="/driftpage">Дрифт-такси</NavLink>
          <NavLink className='menu__item' to="/timeattackpage">Time attack</NavLink>
          <NavLink className='menu__item' to="/forzapage">Forza karting</NavLink>
        </div> 
      )
}

export default Menu;