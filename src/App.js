import React, { useEffect } from "react";
import QRCodeGenerator from "./QRCodeGenerator";

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Check if React DevTools are installed, and provide a download link if they are not.
      if (window.top === window.self) {
        if (
          (navigator.userAgent.indexOf("Chrome") > -1 &&
            navigator.userAgent.indexOf("Edge") === -1) ||
          navigator.userAgent.indexOf("Firefox") > -1
        ) {
          const protocol = window.location.protocol;
          if (/^(https?|file):$/.test(protocol)) {
            console.info(
              "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
                (protocol === "file:"
                  ? "\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq"
                  : ""),
              "font-weight:bold"
            );
          }
        }
      }
    }
  }, []);

  return (
    <div>
      <QRCodeGenerator />
    </div>
  );
}

export default App;
