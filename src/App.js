import React from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import Landing from "./Pages/Landing/Landing";
import Categories from "./Pages/Сategories/Categories";
import Rating from "./Pages/Rating/Rating";
import Profile from "./Pages/Profile/Profile";
import TaskBoard from "./Pages/TaskBoard/TaskBoard";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Landing/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/categories/:name" element={<TaskBoard/>}/>
      <Route path="/rating" element={<Rating/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}

export default React.memo(App);
