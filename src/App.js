import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import ComingSoon19 from "./pages/comingSoon19";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ComingSoon19 />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;