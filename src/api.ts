const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = () => {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
};

export const fetchCoinInfo = (coinId: string) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
};

export const fetchCoinTickers = (coinId: string) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
};

export const fetchCoinHistory = (coinId: string) => {
  const endData = Math.floor(Date.now() / 1000);
  const startData = endData - 7 * 24 * 60 * 60 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startData}&end=${endData}`
  ).then((res) => res.json());
};

// export const exchangeRate = async () => {
//   const res = await fetch("http://fx.kebhana.com/FER1101M.web");
//   const data = await res.json();
//   return data;
// };
