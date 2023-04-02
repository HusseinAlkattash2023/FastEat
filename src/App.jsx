import "./App.scss";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home, MealDetails, Error, Category } from "./pages";

// components
import Header from "./components/Header/Header";
import Sibebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Sibebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meal/:id" element={<MealDetails/>}/>
        <Route path="/meal/category/:name" element={<Category/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
