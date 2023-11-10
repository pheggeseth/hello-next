import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        This is a change
      </body>
    </html>
  );
}

export default RootLayout;
