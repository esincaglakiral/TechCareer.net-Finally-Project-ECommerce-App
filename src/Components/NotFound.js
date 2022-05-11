import React from "react";

const NotFound = () => {
  return (
    <main className="notFound">
    
      <div className="error">
        <h1>
          404 ERROR
        </h1>
        <h3 >
          Page not found.
        </h3>
        <p className="notFind">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
    </main>
  );
};

export default NotFound;