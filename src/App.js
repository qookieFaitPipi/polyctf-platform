import React from "react";

// react-router-dom
import { Routes, Route, Navigate } from 'react-router-dom';

// pages
import Landing from "./Pages/Landing/Landing";
import Categories from "./Pages/Сategories/Categories";
import Rating from "./Pages/Rating/Rating";
import Profile from "./Pages/Profile/Profile";
import TaskBoard from "./Pages/TaskBoard/TaskBoard";

import Liveboard from "./Pages/Liveboard/Liveboard";

// components
import MHeader from "./Components/MHeader/MHeader";
import RHeader from "./Components/RHeader/RHeader";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Landing/>}/>
      
      <Route path="/categories" element={<>
        <MHeader />
        <div style={{height: '106px'}}></div>
        <Categories/>
      </>}/>
      <Route path="/categories/:name" element={<>
        <MHeader />
        <div style={{height: '106px'}}></div>
        <TaskBoard/>
      </>}/>
      <Route path="/rating" element={<>
        <MHeader />
        <div style={{height: '106px'}}></div>
        <Rating/>
      </>}/>
      <Route path="/profile/:username" element={<>
        <MHeader />
        <div style={{height: '106px'}}></div>
        <Profile/>
      </>}/>

      <Route path="/liveboard" element={<>
        <RHeader />
        <div style={{height: '106px'}}></div>
        <Liveboard/>
      </>}/>
      {/* redirect */}
      <Route path="/profile" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default React.memo(App);
