import StockApp from "./scripts/stockApp";
import Graph from "./scripts/graph";

document.addEventListener("DOMContentLoaded", () => {
    const stockApp = new StockApp();
    window.stockApp = stockApp;
})