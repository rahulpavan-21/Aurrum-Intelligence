import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const FALLBACK = [
  { symbol: "SPX", price: 5834.12, change: 0.42 },
  { symbol: "NDX", price: 20421.55, change: 0.71 },
  { symbol: "DJI", price: 43112.9, change: 0.18 },
  { symbol: "BTC", price: 96420.0, change: 1.84 },
  { symbol: "ETH", price: 3421.12, change: 2.11 },
  { symbol: "XAU", price: 2678.4, change: -0.32 },
  { symbol: "WTI", price: 71.28, change: -0.55 },
  { symbol: "DXY", price: 106.14, change: 0.09 },
  { symbol: "US10Y", price: 4.412, change: -0.03 },
  { symbol: "VIX", price: 14.72, change: -1.21 },
];

export default function MarketTicker() {
  const [items, setItems] = useState(FALLBACK);

  useEffect(() => {
    let alive = true;
    axios
      .get(`${API}/market-snapshot`)
      .then((r) => { if (alive && r.data?.tickers?.length) setItems(r.data.tickers); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  return (
    <div data-testid="market-ticker" className="section-invert border-y border-[#f7f3e8]/20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-4 flex items-center gap-6">
        <div className="font-mono-ui text-[10px] uppercase tracking-[0.32em] flex items-center gap-2 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f7f3e8] blink" />
          Tape · Live
        </div>
        <div className="flex-1 overflow-hidden">
          <Marquee gradient={false} speed={45} pauseOnHover className="marquee-track">
            {items.concat(items).map((t, i) => (
              <span
                key={i}
                className="tape mx-8 text-[13px] sm:text-sm tracking-[0.15em] uppercase"
                data-testid={`ticker-${t.symbol}-${i}`}
              >
                <span className="opacity-70 mr-3">{t.symbol}</span>
                <span className="mr-3">{Number(t.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</span>
                <span style={{ color: t.change >= 0 ? "#7ce0a2" : "#ff9c9c" }}>
                  {t.change >= 0 ? "▲" : "▼"} {Math.abs(t.change).toFixed(2)}%
                </span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
