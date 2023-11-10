import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{ background: "hotpink" }}>This is a pink footer</footer>
      </body>
    </html>
  );
}

export default RootLayout;
