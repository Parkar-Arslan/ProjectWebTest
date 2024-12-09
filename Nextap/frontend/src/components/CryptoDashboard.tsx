import React, { useEffect, useState } from "react";
import { Grid, Typography, Card, CardContent, CircularProgress } from "@mui/material";
import "../styles/CryptoDashboard.css";

interface Crypto {
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

const CryptoDashboard: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cryptocurrency data.");
        }

        const data = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "An error occurred.");
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) {
    return (
      <div className="crypto-dashboard-container">
        <CircularProgress />
        <Typography variant="h5">Loading Cryptocurrency Data...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="crypto-dashboard-container">
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </div>
    );
  }

  return (
    <div className="crypto-dashboard-container">
      <Typography variant="h4" className="dashboard-header">
        Cryptocurrency Dashboard
      </Typography>
      <Grid container spacing={3} className="crypto-cards">
        {cryptoData.map((crypto) => (
          <Grid item xs={12} sm={6} md={4} key={crypto.symbol}>
            <Card className="crypto-card">
              <CardContent>
                <Typography variant="h5">{crypto.name}</Typography>
                <Typography variant="body1">Symbol: {crypto.symbol.toUpperCase()}</Typography>
                <Typography variant="body2">
                  Price: ${crypto.current_price.toLocaleString()}
                </Typography>
                <Typography variant="body2">
                  Market Cap: ${crypto.market_cap.toLocaleString()}
                </Typography>
                <Typography
                  variant="body2"
                  color={crypto.price_change_percentage_24h > 0 ? "success.main" : "error.main"}
                >
                  24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CryptoDashboard;