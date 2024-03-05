import React, { useState, useEffect } from 'react';
import "./App.css"
function App() {
  const [etfs, setETFs] = useState([
    { symbol: 'SQQQ', name: 'ProShares UltraPro Short QQQ', price: null },
    { symbol: 'SPY', name: 'SPDR S&P 500', price: null },
    { symbol: 'QQQ', name: 'Invesco QQQ Trust', price: null },
    { symbol: 'UVXY', name: 'ProShares Ultra VIX Short-Term Futures', price: null },
    { symbol: 'XLF', name: 'Financial Select Sector SPDR', price: null },
    { symbol: 'IWM', name: 'iShares Russell 2000', price: null },
    { symbol: 'FXI', name: 'iShares China Large-Cap', price: null },
    { symbol: 'EEM', name: 'iShares MSCI Emerging Markets', price: null },
    { symbol: 'EWZ', name: 'iShares MSCI Brazil Capped', price: null },
  ]);

  const API_KEY = 'X8LYCMTCQZSIWCRS.';

  const fetchETFPrices = async () => {
    try {
      const requests = etfs.map(async (etf) => {
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${etf.symbol}&apikey=${API_KEY}`);
        const data = await response.json();
        // Check if the response contains an error message
      if (data['Error Message']) {
        throw new Error(data['Error Message']);
      }

        const latestPrice = data['Global Quote']['05. price'];
        return { ...etf, price: latestPrice };
      });
      const updatedETFs = await Promise.all(requests);
      setETFs(updatedETFs);
    } catch (error) {
      console.error('Error fetching ETF prices:', error);
    }
  };

  useEffect(() => {
    fetchETFPrices();
  }, []);

  return (
    <div className="App">
<h1>ETF Prices</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {etfs.map((etf) => (
            <tr key={etf.symbol}>
              <td>{etf.symbol}</td>
              <td>{etf.name}</td>
              <td>{etf.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
