import Cart from "../components/cart"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearItems } from "../redux/slices/cartSlice"
import { CartEmpty } from "../components/cartEmpty"

export default function Carts(){
  const pizzasInCart = useSelector(state => state.cart.pizzasInCart)
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
        </>
        : <CartEmpty/>
      }
    </div>
  )
}