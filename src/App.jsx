import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "layout";
import { Home, Destination, Crew, Technology } from "pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
