import React from 'react';

// Компоненты
import Header from './components/header';
import Home from './pages/home';
import Error from './pages/error';
import Carts from './pages/carts';

// функции изменения состояния из redux
import { setIsSortPopupOpen, setSortItemsCount } from './redux/slices/sortSlice';
import { setPizzasIsLoading, setPizzas } from './redux/slices/AppSlice';
import { setCategoryCount } from './redux/slices/categorySlice';
import { setHeaderSearchInput, setHeaderSearchInputCopy } from './redux/slices/headerSlice';

// библиотеки или их модули
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs'
import { useNavigate } from 'react-router-dom';

function App() {
  // Состояния из redux
  const pizzasIsLoading = useSelector((state) => state.app.pizzasIsLoading);
  const headerSearchInput = useSelector((state) => state.header.headerSearchInput);
  const categoryCount = useSelector((state) => state.category.categoryCount);

  const isSortPopupOpen = useSelector((state) => state.sort.isSortPopupOpen);
  const sortItems = useSelector((state) => state.sort.sortItems);
  const sortItemsCount = useSelector((state) => state.sort.sortItemsCount);

  // ф-ции из библиотек
  const dispatch = useDispatch();
  const navigate = useNavigate()

  //
  const isMounted = React.useRef(false)

  // Изменение состояний из адресной строки (URL) при первом рендере
  React.useEffect(() => {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1))
      if(params.sortItemsCount){
        dispatch(setSortItemsCount(params.sortItemsCount))
      }
      if(params.categoryCount){
        dispatch(setCategoryCount(params.categoryCount))
      }
      if(params.headerSearchInput){
        dispatch(setHeaderSearchInput(params.headerSearchInput))
        dispatch(setHeaderSearchInputCopy(params.headerSearchInput))
      }
    }
  }, []) 
  // Получение пицц из БД и их сортировка и фильтрация
  React.useEffect(() => {
    dispatch(setPizzasIsLoading(false));

    axios
      .get(
        `https://63ac248e34c46cd7ae78a91a.mockapi.io/pizzas?&sortBy=${sortItems[sortItemsCount].sortBy.replace('-', '')}&order=${sortItems[sortItemsCount].sortBy.indexOf('-') === -1 ? 'desc' : 'ask'}&category=${categoryCount === 0 ? '' : `${categoryCount}`}`
      )
      .then(res => {
        dispatch(setPizzas(res.data));
      })
      .then(() => dispatch(setPizzasIsLoading(false)))
  }, [sortItemsCount, categoryCount, headerSearchInput]);

  // Изменение адресной строки (URL) при изменении фильтрации, сортировки и поиска
  React.useEffect(() => {
    if(!isMounted.current){
      isMounted.current = true;
      return
    }
    const queryString = qs.stringify({
      sortItemsCount,
      categoryCount,
      headerSearchInput,
    })

    navigate(`?${queryString}`)
  }, [sortItemsCount, categoryCount, headerSearchInput])
  return (
    <div className="wrapper" onClick={() => dispatch(setIsSortPopupOpen(false))}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </div>
  );
}

export default App;
