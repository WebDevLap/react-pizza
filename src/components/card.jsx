import React from 'react';
import { useDispatch } from 'react-redux';
import { addPizzasInCart} from '../redux/slices/cartSlice';


function Card({id, imageUrl, title, types, sizes, price}){
    const typesName = ["тонкое", 'традиционное'];
    const dispatch = useDispatch()

    const [typeCount, setTypeCount] = React.useState(0);
    const [sizeCount, setSizeCount] = React.useState(0);
    const [btnCount, setBtnCount] = React.useState(0);


    function onPizzaBtnClick(){
        setBtnCount(btnCount + 1);
        dispatch(addPizzasInCart({id, 
            imageUrl, 
            title, 
            type: typesName[types[typeCount]],
            size: sizes[sizeCount], 
            price,
        }))
    }

    return (
        <div className="card">
            <img src={imageUrl} alt="" className="card__img" />
            <div className="card__title">{title}</div>
            <div className="card__properties">
                <div className="card-types">
                    {
                        types.map((type, index) => {
                            return <div key={index} onClick={() => setTypeCount(index)} className={typeCount === index ? "card__type active" : "card__type"}>{typesName[type]}</div>
                        })
                    }
                </div>
                <div className="card__sizes">
                    {
                        sizes.map((size, index) => {
                            return <div key={index} onClick={() => setSizeCount(index)} className={sizeCount === index ? "card__size active" : "card__size"}>{size} см.</div>
                        })
                    }
                </div>
            </div>
            <div className="card__others">
                <div className="card__price">{"от " + price + " Р"}</div>
                <button className="btn" onClick={onPizzaBtnClick}>Добавить  <span>{btnCount}</span></button>
            </div>
        </div>
    )
}

export default Card;