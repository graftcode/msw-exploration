import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="App">
      <div className="container">
        <h1>Movies Library</h1>
        {children}
      </div>
    </main>
  );
};

export default Layout;
