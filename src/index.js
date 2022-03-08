import StockApp from "./scripts/stockApp";

document.addEventListener("DOMContentLoaded", () => {
    const stockApp = new StockApp();
    window.stockApp = stockApp;
})