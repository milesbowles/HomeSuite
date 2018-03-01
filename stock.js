var stock = new XMLHttpRequest();
stock.open("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=full&apikey=MSUXAHOVQ4STPHQB/", false);
stock.send();

console.log(stock.status);
console.log(stock.statusText);