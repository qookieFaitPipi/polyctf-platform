import React from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import Landing from "./Pages/Landing/Landing";
import Categories from "./Pages/Сategories/Categories";
import Rating from "./Pages/Rating/Rating";
import Profile from "./Pages/Profile/Profile";
import TaskBoard from "./Pages/TaskBoard/TaskBoard";

// components
import MHeader from "./Components/MHeader/MHeader";
import Invisible from "./Components/Invisible/Invisible";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Landing/>}/>
      <Route path="/categories" element={<>
        <MHeader />
        <Invisible />
        <Categories/>
      </>}/>
      <Route path="/categories/:name" element={<>
        <MHeader />
        <Invisible />
        <TaskBoard/>
      </>}/>
      <Route path="/rating" element={<>
        <MHeader />
        <Invisible />
        <Rating/>
      </>}/>
      <Route path="/profile" element={<>
        <MHeader />
        <Invisible />
        <Profile/>
      </>}/>
    </Routes>
  );
}

export default React.memo(App);
