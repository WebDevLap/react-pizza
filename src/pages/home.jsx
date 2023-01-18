import React from "react";
import Categories from '../components/categories';
import Card from "../components/card";
import Skeleton from "../components/skeleton";
import { useSelector } from "react-redux";
import { setMarkText } from "../redux/slices/cartSlice";

function Home() {
    const pizzas = useSelector(state => state.app.pizzas)
    const pizzasIsLoading = useSelector(state => state.app.pizzasIsLoading)
    const headerSearchInput = useSelector(state => state.header.headerSearchInput)

    if(pizzas){
        var pizzasSorted = pizzas.filter(pizza => {
            if(pizza.title.toLowerCase().indexOf(headerSearchInput.toLowerCase()) === -1) return
            return true
        })
    }
    return (
        <div className="wrapper" >
            <Categories />
            <div className="cards">
                {pizzasIsLoading ? 
                        [...new Array(8)].map((item, index) => <Skeleton key={index}/>)
                        : pizzasSorted.map((pizza, index) => < Card key={index} {...pizzasSorted[index]}/>)
                }
            </div>
        </div>
    );
}
export default Home;        