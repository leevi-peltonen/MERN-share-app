import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import UserPlaces from './places/pages/UserPlaces';
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/:userId/places" exact element={<UserPlaces />}/>
          <Route path="/places/new" exact element={<NewPlace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
