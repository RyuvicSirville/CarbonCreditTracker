import React, { useEffect } from 'react';

const CarbonPricesWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://carboncredits.com/live-carbon-prices/index.js.php";
    script.async = true;
    document.getElementById('carbon-prices').appendChild(script);
  }, []);

  return (
    <div id="carbon-prices">
      {/* CarbonPrices Widget will be inserted here */}
    </div>
  );
};

export default CarbonPricesWidget;
