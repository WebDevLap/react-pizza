import Cart from "../components/cart"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearItems } from "../redux/slices/cartSlice"
import { CartEmpty } from "../components/cartEmpty"
import { NavLink } from "react-router-dom"

export default function Carts(){
  const {pizzasInCart, totalPrice} = useSelector(state => state.cart)

  const dispatch = useDispatch()

  function onClearClick(){
    if(window.confirm('Ты действительно хочешь удалить все товары с корзины?')){
      dispatch(clearItems())
    }
  }

  return (
    <div className="carts">
      { pizzasInCart.length > 0 ?
        <>
          <span onClick={onClearClick} className={pizzasInCart.length > 0 ? 'carts__clear active' : 'carts__clear' }>Очистить корзину</span>
          {
            pizzasInCart.map((item, index) => <Cart key={index} {...pizzasInCart[index]}/> )
          }
          <div className="cart__info">
            <div className="cart-info__content">
              <div className="cart-info__text">Всего пицц: <span>{pizzasInCart.length} шт.</span></div>
              <div className="cart-info__text">Сумма заказа: <span className="orange">{totalPrice} ₽</span></div>
            </div>
            <div className="cart-info__buttons">
              <NavLink className='cart-info__back' to='/' onClick={() => window.scrollTo(0, 0)}>Вернуться назад</NavLink>
              <button className='cart-info__buy'>Оплатить сейчас</button>
            </div>
          </div>
        </>
        : <CartEmpty/>
      }
    </div>
  )
}