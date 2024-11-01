import QrReader from "react-qr-reader";

function QRCodeScanner() {
  const handleScan = (data) => {
    if (data) {
      console.log("Scanned QR Code:", data);
    }
  };

  const handleError = (err) => {
    console.error("Error scanning QR Code:", err);
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "200%", webkitBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
mozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"}}
      />
    </div>
  );
}

export default QRCodeScanner;
