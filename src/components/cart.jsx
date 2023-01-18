import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  removePizzasCount,
  addPizzasInCart,
  onCountChange,
  removePizzasInCart,
} from '../redux/slices/cartSlice';

export default function Cart({ id, imageUrl, title, type, size, price, count }) {
  const dispatch = useDispatch();

  const mouseEnterTextRef = React.useRef();
  const [counterMouseEnterPos, setCounterMouseEnterPos] = React.useState([0, 0]); // [posX, posY] for change modal div
  const [inputTextIsActive, setInputTextIsActive] = React.useState(0);

  // function onCountInputChange(e){
  //   dispatch(onCountChange({id, type, size, value: e.target.value}))
  // }
  function onInputMouseMove(e) {
    const posY =
      e.pageY - parseInt(window.getComputedStyle(mouseEnterTextRef.current).height) - 15 + 'px';
    const posX =
      e.pageX - parseInt(window.getComputedStyle(mouseEnterTextRef.current).width) / 2 + 'px';

    setCounterMouseEnterPos([posX, posY]);
  }

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__img">
          <img src={imageUrl} alt="error" />
        </div>
        <div className="cart__content">
          <div className="cart__title">{title}</div>
          <div className="cart__subtitle">
            {type} тесто🍕 {size}см.
          </div>
        </div>
        <div className="cart__counters">
          <div
            style={{ top: counterMouseEnterPos[1], left: counterMouseEnterPos[0] }}
            className={
              inputTextIsActive === 1 ? 'cart__mouse-enter-text active' : 'cart__mouse-enter-text'
            }
            ref={mouseEnterTextRef}>
            Можно изменять с помощью ввода
          </div>
          <span
            className={count < 1 ? 'cart__counter disabled' : 'cart__counter'}
            onClick={() => {
              dispatch(removePizzasCount({ id, type, size }));
            }}></span>
          <input
            type="text"
            value={count}
            onMouseLeave={() => setInputTextIsActive(0)}
            onMouseMove={(e) => onInputMouseMove(e)}
            onMouseEnter={() => setInputTextIsActive(1)}
            onChange={(e) => dispatch(onCountChange({ id, type, size, value: e.target.value }))}
          />
          <span
            className={count > 98 ? 'cart__counter disabled' : 'cart__counter'}
            onClick={() => dispatch(addPizzasInCart({ id, type, size }))}></span>
        </div>
        <div className="cart__price">{price} Р</div>
        <div
          className="cart__remove-btn"
          onClick={() => dispatch(removePizzasInCart({ id, type, size }))}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
