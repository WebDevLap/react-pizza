import { NavLink } from "react-router-dom";
import React, { useCallback } from "react";
import { useSelector, useDispatch} from 'react-redux'
import debounce from 'lodash.debounce';
import { setHeaderSearchInput, setHeaderSearchInputCopy } from "../redux/slices/headerSlice";

function Header(){
    const headerSearchInput = useSelector(state => state.header.headerSearchInput)
    const headerSearchInputCopy = useSelector(state => state.header.headerSearchInputCopy)

    const pizzasInCart = useSelector(state => state.cart.pizzasInCart)
    const totalPrice = useSelector(state => state.cart.totalPrice)

    const headerSearchDebounce = useCallback(
        debounce( (e) => dispatch(setHeaderSearchInput(e.target.value)), 400)
        , []
    )

    function onSearchInputChange(e){
        dispatch(setHeaderSearchInputCopy(e.target.value))
        headerSearchDebounce(e)
        
    }

    const searchInputRef = React.useRef()
    const modalWindow = useSelector((state) => state.header.modalWindow)
    const dispatch = useDispatch()

    return (
            <div className="header">
                <div className="header__container">
                    <NavLink to='/' onClick={() => window.scrollTo(0, 0)}>
                        <div className="header__logo">
                            <img src="https://react-pizza-v2.vercel.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg" alt="" className="header-logo__img" />
                            <div className="header-logo__description">
                                <div className="header-logo__title">react pizza v2</div>
                                <div className="header-logo__subtitle">самая вкусная пицца во вселенной</div>
                            </div>
                        </div>
                    </NavLink>
                    <div className="header__search">
                        <input ref={searchInputRef} value={headerSearchInputCopy} onChange={(e) => onSearchInputChange(e)} type="text" className="header-search__input" placeholder="Поиск пиццы..."/>
                        <span onClick={() => {dispatch(setHeaderSearchInputCopy('')); dispatch(setHeaderSearchInput('')); searchInputRef.current.focus()}}></span>
                    </div>
                    <button>
                        <NavLink className="btn" data-after-items={pizzasInCart.reduce((sum, item) => sum + item.count, 0)} data-before-price={totalPrice} to='/carts'>Корзина</NavLink>
                    </button>
                </div>
            </div>
    )
}

export default Header;