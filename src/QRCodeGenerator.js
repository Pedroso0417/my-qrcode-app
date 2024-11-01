import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRCodeGenerator() {
  const [input, setInput] = useState({facebook: "facebook.com"}); // Default value for testing

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"
    }}>
      <h2 style={{ color: "blue"}}>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ color: "black", fontFamily: "sanSerif"}}
      />
      <QRCodeCanvas value={`https://${input}`} size={200} />
    </div>
  );
}

export default QRCodeGenerator;
