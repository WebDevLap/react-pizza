import React from "react";
import Sort from './sort';
import { setCategoryCount } from '../redux/slices/categorySlice' 
import { useSelector, useDispatch } from "react-redux";
// categoryCount

function Categories(){
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const categoryCount = useSelector(state => state.category.categoryCount);
    const dispatch = useDispatch()

    return(
        <div className="categories">
            <div className="categories__container">
                <ul className="categories__list">
                    {categories.map((category, index) => {
                        return <div key={index} onClick={() => dispatch(setCategoryCount(index))} className={categoryCount === index ? "categories__item active" : "categories__item"}>{category}</div>
                    })}
                </ul>
                <Sort/>
            </div>
            <div className="categories__type">{categories[categoryCount]} пиццы</div>
        </div>
    )
}

export default Categories;