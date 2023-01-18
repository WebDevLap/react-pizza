import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setIsSortPopupOpen, setSortItemsCount } from '../redux/slices/sortSlice'

function Sort(){
    const sortItemsCount = useSelector(state => state.sort.sortItemsCount)
    const isSortPopupOpen = useSelector(state => state.sort.isSortPopupOpen)
    const sortItems = useSelector(state => state.sort.sortItems)

    const dispatch = useDispatch()
    

    return(
        <div className="sort">
            <div className="sort__container">
                <div className={isSortPopupOpen === true ? "sort__label active" : 'sort__label'}>Cортировка по: <span className={isSortPopupOpen === true ? 'active' : ''} onClick={(e) => {dispatch(setIsSortPopupOpen(!isSortPopupOpen)); e.stopPropagation()}} >{sortItems[sortItemsCount].name}</span></div>
                <div className={isSortPopupOpen === true ? "sort__popup" : "sort__popup hidden"}>
                    <ul className="sort-popup__list">
                        {
                            sortItems.map((item, index) => {
                                return <div 
                                    key={index} 
                                    onClick={() => dispatch(setSortItemsCount(index))} 
                                    className={sortItemsCount === index ? "sort-popup__item active" : "sort-popup__item"}
                                    >{item.name}
                                </div>
                            })
                        }
                    </ul>
                </div>                    
            </div>
        </div>
    )
}

export default Sort;