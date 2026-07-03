import React, { useEffect, useRef } from "react";

export default function MarketTicker() {
  const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "TVC:GOLD", title: "Gold" },
        { proName: "TVC:SILVER", title: "Silver" },
        { proName: "TVC:USOIL", title: "US Oil" },
        { proName: "TVC:UKOIL", title: "Brent" },
        { proName: "TVC:VIX", title: "VIX" },
        { proName: "TVC:DXY", title: "DXY" },
        { proName: "TVC:DJI", title: "US30" },
        { proName: "TVC:NDX", title: "NQ" },
        { proName: "TVC:SPX", title: "S&P 500" },
        { proName: "BITSTAMP:BTCUSD", title: "BTC/USD" },
        { proName: "FX:EURUSD", title: "EUR/USD" },
        { proName: "FX:USDJPY", title: "USD/JPY" }
      ],
      showSymbolLogo: false,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });
    const el = container.current;
    if (el) el.appendChild(script);
    return () => {
      if (el) el.innerHTML = "";
    };
  }, []);

  return (
    <div data-testid="market-ticker" className="section-invert border-y border-[#f7f3e8]/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
}
