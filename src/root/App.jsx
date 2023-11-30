import './App.scss'
import { Menu } from '../moduls/menu/Menu'
import { RideList } from '../moduls/rideList/RideList';
import { useEffect, useState } from 'react';
import { Burger } from '../ui/burger/Burger';
import { Auth_page } from '../pages/auth_page/Auth_page';

import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom';

import { RideList_page } from '../pages/RideList_page/RideList_page';
import { Analytics_page } from '../pages/analytics_page/Analytics_page';
import { store } from '../store';
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from '../responses/RoutesResponses';

function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const token = useSelector(state => state.user.token)

  // token && getRoutes(token)

  const routes = useSelector(state => state.route.routes)

  console.log(isAuth)
  console.log(token)

  const [adaptive, setAdaptive] = useState(false)

  const app = document.querySelector(".App")

  const unadaptiveToggle = (adaptive) => {
    if(adaptive === false){
      app && (app.style.height = 'auto');
      app && (app.style.overflow = 'auto');
      console.log(adaptive, "from if")
    }
  }

  const adaptiveToggle = (adaptive) => {
    if(adaptive === true){
      app && (app.style.height = '100vh');
      app && (app.style.overflow = 'hidden');
      
    }
  }
  

  useEffect(() => {
    console.log(adaptive)
    adaptiveToggle(adaptive)
    unadaptiveToggle(adaptive)
  }, [adaptive])
  

  return (
    <div className="App">
      <HashRouter basename='/'>
        {!isAuth ?
          <Routes>
            <Route path="/" element={<Auth_page/>} />
          </Routes>

          :

          <Routes>
            <Route exact path='/' element={<RideList_page className="App__list" adaptive={adaptive} setAdaptive={setAdaptive}/>}></Route>
            <Route path='/analytics' element={<Analytics_page adaptive={adaptive} setAdaptive={setAdaptive}/>}></Route>
          </Routes>
        }
      </HashRouter>
      
    </div>
  );
}

export default App;
