

// costco vaccines ford
const stocks = ['AAPL', 'AMZN', 'COST', 'DIS', "F", "FB", "GOOGL", 'PFE', "TSLA"]
class StockApp{

    constructor(){
        this.ctx = document.getElementById("myChart").getContext('2d');
        this.ctx.font = '50px Arial'
        this.ctx.fillText("Select a start date and end date",100,300)
        this.ctx.fillText("Enter a 4 letter ticker symbol to generate a graph!", 100, 400)
        this.input = document.getElementById('ticker-search-bar');
        this.input.addEventListener('input', this.addStock.bind(this));
        
        // this.stockChoice = document.getElementById('preselected-stocks');
        // debugger
        // this.stockChoice.addEventListener('change', this.graphStock(this.stockChoice.value));
        // debugger
        // this.daysInput = document.getElementById('days');
        // debugger
        // this.daysInput.addEventListener('input', this.graphStock(this.stockChoice.value, this.daysInput.value));
        // this.graphStock("AAPL")
        this.stockButton = document.getElementById(`stock-button`);
        this.selectedYears = document.getElementById('preselected-year').value
        // debugger
        
        this.stockButton.onclick= function(){this.graphStock(this.stockButton.value)}.bind(this)
        // debugger
        this.addStock = this.addStock.bind(this);
        this.graphStock = this.graphStock.bind(this);

    }

    graphStock(ticker, days){
        if(ticker === '') return null
        days = document.getElementById('preselected-year').value
        //253 market days in a year
        let labels = [];
        let data = [];
        let i = 0;
        let stock = require(`../stockdata/${ticker}.json`)[ticker].chart
        if (days) {stock = stock.slice(253-days)} 
        stock.forEach(day => {
            labels.push(day.label)
            data.push(day.close)
        })
       
        const myChart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `Stock Close Prices for ${ticker} from the last ${days} days`,
                    data: data,
                    backgroundColor: [
                        'rgba(100, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(100, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    },

                }
            }
        });
    }

    addStock(e) {
        e.preventDefault();
        // debugger
        let input = e.currentTarget.value.toUpperCase();
        if (input.length === 4) {
            e.currentTarget.value = ""
            // console.log(new Date())
            this.canvas = document.getElementById('myChart')
            this.ctx = document.getElementById("myChart").getContext('2d');

            fetch(`https://cloud.iexapis.com/stable/stock/${input}/quote?token=pk_b07152883e9d4a61a719dc430195a97b`)
                .then(response => response.json())
                .then(
                    function(value){
                        // debugger
                        let canvas = document.getElementById("myChart")
                        let ctx = canvas.getContext('2d')
                        let startYear = document.getElementById('start-year').value
                        let endYear = document.getElementById('end-year').value
                        const myChart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: [value.latestTime],
                                datasets: [{
                                    label: `Stock Prices from ${startYear} to ${endYear}`,
                                    data: [value.close],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                        beginAtZero: true
                                    },

                                }
                            }
                        });

                    
                    },
                    function(error){
                        // debugger
                        let canvas = document.getElementById("myChart")
                        let ctx = canvas.getContext('2d')
                        ctx.clearRect(0, 0, canvas.width, canvas.height)
                        ctx.font = '50px Arial'
                        ctx.fillText("No ticker found for your entry", 400, 300)
                    }
                )
               
        }
        
    }

}

export default StockApp;

