import React, { useState, useEffect } from 'react';
import "./App.css"
function App() {
  const [etfs, setETFs] = useState([
    { symbol: 'GCJ4', name: 'Gold Futures', price: null },
    { symbol: 'HGK4', name: 'Silver Futures', price: null },
    { symbol: 'QQQ', name: 'Copper Futures', price: null },
    { symbol: 'PLJ4', name: 'Platinum Futures', price: null },
    { symbol: 'LCOK4', name: 'Brent Oil Futures ', price: null },
    { symbol: 'CLJ4', name: 'Crude Oil WTI Futures', price: null },
    { symbol: 'KCK4', name: 'US Coffee C Futures ', price: null },
    { symbol: 'ZCK4', name: 'US Corn Futures', price: null },
    { symbol: 'LSUc1', name: 'London Sugar Futures', price: null },
    { symbol: 'CTK4', name: 'US Cotton #2 Futures ', price: null },
    
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
<h1>Commodities  Prices</h1>
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
