import React from 'react'
import cartImg from '../assets/img/vector.jpg'
import { NavLink } from 'react-router-dom'

export const CartEmpty = () => {
  return (
    <div className='cart-empty'>
      <div className="cart-empty__title">Корзина пустая😕</div>
      <div className="cart-empty__subtitle">
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
        </div>
      <div className="cart-empty__img">
        <img src={cartImg} alt="cart empty jpg" />
      </div>
      <NavLink to='/' className="cart-empty__btn">Вернуться назад</NavLink>
    </div>
  )
}
