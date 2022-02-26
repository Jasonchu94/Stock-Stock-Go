const tesla = require('../stockdata/TSLA.json');
const apple = require('../stockdata/AAPL.json');
const amazon = require('../stockdata/AMZN.json');
const facebook = require('../stockdata/FB.json');
const netflix = require('../stockdata/NFLX.json')
const google = require('../stockdata/GOOGL.json')

// costco vaccines ford
class StockApp{

    constructor(){
        this.ctx = document.getElementById("myChart").getContext('2d');
        this.ctx.font = '50px Arial'
        this.ctx.fillText("Select a start date and end date",100,300)
        this.ctx.fillText("Enter a 4 letter ticker symbol to generate a graph!", 100, 400)
        this.input = document.getElementById('ticker-search-bar');
        this.input.addEventListener('input', this.addStock.bind(this));
        this.tesla = tesla.TSLA.chart;
        this.apple = apple.AAPL.chart;
        this.amazon = amazon.AMZN.chart;
        this.facebook = facebook.FB.chart;
        this.netflix = netflix.NFLX.chart;
        this.google = google.GOOGL.chart;
        // debugger
        this.addStock = this.addStock.bind(this);
       
    }

    addStock(e) {
        e.preventDefault();
        // debugger
        let input = e.currentTarget.value.toUpperCase();
        if (input.length === 4) {
            e.currentTarget.value = ""
            console.log(new Date())
            this.canvas = document.getElementById('myChart')
            this.ctx = document.getElementById("myChart").getContext('2d');

            fetch(`https://cloud.iexapis.com/stable/stock/${input}/quote?token=pk_b07152883e9d4a61a719dc430195a97b`)
                .then(response => response.json())
                .then(
                    function(value){
                        debugger
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

