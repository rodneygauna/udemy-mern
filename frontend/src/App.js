import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import NoMatch from "./nomatch/pages/NoMatch";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
