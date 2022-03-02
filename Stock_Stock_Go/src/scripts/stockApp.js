class StockApp{

    constructor(){
        this.ctx = document.getElementById("myChart").getContext('2d');
        this.ctx.font = '75px Arial'
        this.ctx.fillText("Click a stock icon and choose a time period!",100,300)
        // this.input = document.getElementById('ticker-search-bar');
        // this.input.addEventListener('input', this.addStock.bind(this));
        
    
        this.appleButton = document.getElementById(`apple-button`);
        this.amazonButton = document.getElementById(`amazon-button`);
        this.costcoButton = document.getElementById(`costco-button`);
        this.disneyButton = document.getElementById(`disney-button`);
        this.fordButton = document.getElementById(`ford-button`);
        this.facebookButton = document.getElementById(`facebook-button`);
        this.googleButton = document.getElementById(`google-button`);
        this.netflixButton = document.getElementById(`netflix-button`);
        this.pfizerButton = document.getElementById(`pfizer-button`);
        this.teslaButton = document.getElementById(`tesla-button`);

        
        this.appleButton.onclick= function(){this.graphStock(this.appleButton.value)}.bind(this)
        this.amazonButton.onclick = function () { this.graphStock(this.amazonButton.value) }.bind(this)
        this.costcoButton.onclick = function () { this.graphStock(this.costcoButton.value) }.bind(this)
        this.disneyButton.onclick = function () { this.graphStock(this.disneyButton.value) }.bind(this)
        this.fordButton.onclick = function () { this.graphStock(this.fordButton.value) }.bind(this)
        this.facebookButton.onclick = function () { this.graphStock(this.facebookButton.value) }.bind(this)
        this.googleButton.onclick = function () { this.graphStock(this.googleButton.value) }.bind(this)
        this.netflixButton.onclick = function () { this.graphStock(this.netflixButton.value) }.bind(this)
        this.pfizerButton.onclick = function () { this.graphStock(this.pfizerButton.value) }.bind(this)
        this.teslaButton.onclick = function () { this.graphStock(this.teslaButton.value) }.bind(this)
      
        this.graphStock = this.graphStock.bind(this);

    }

    graphStock(ticker, days){
        // debugger
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
       
        new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `Stock Close Prices for ${ticker} from the last ${days} days`,
                    data: data,
                    backgroundColor: [
                        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, .2)`
                     
                    ],
                    borderColor: [
                        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
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

    // addStock(e) {
    //     e.preventDefault();
    //     // debugger
    //     let input = e.currentTarget.value.toUpperCase();
    //     if (input.length === 4) {
    //         e.currentTarget.value = ""
    //         // console.log(new Date())
    //         this.canvas = document.getElementById('myChart')
    //         this.ctx = document.getElementById("myChart").getContext('2d');

    //         fetch(`https://cloud.iexapis.com/v1/stock/market/batch?types=chart&symbols=${input}&range=1y&token=pk_b07152883e9d4a61a719dc430195a97b`)
    //             .then(response => response.json())
    //             .then(
    //                 function(value){
    //                     // debugger
    //                     let canvas = document.getElementById("myChart")
    //                     let ctx = canvas.getContext('2d')
    //                     let startYear = document.getElementById('start-year').value
    //                     let endYear = document.getElementById('end-year').value
    //                     const myChart = new Chart(ctx, {
    //                         type: 'line',
    //                         data: {
    //                             labels: [value.latestTime],
    //                             datasets: [{
    //                                 label: `Stock Prices from ${startYear} to ${endYear}`,
    //                                 data: [value.close],
    //                                 backgroundColor: [
    //                                     'rgba(255, 99, 132, 0.2)',
    //                                     'rgba(54, 162, 235, 0.2)',
    //                                     'rgba(255, 206, 86, 0.2)',
    //                                     'rgba(75, 192, 192, 0.2)',
    //                                     'rgba(153, 102, 255, 0.2)',
    //                                     'rgba(255, 159, 64, 0.2)'
    //                                 ],
    //                                 borderColor: [
    //                                     'rgba(255, 99, 132, 1)',
    //                                     'rgba(54, 162, 235, 1)',
    //                                     'rgba(255, 206, 86, 1)',
    //                                     'rgba(75, 192, 192, 1)',
    //                                     'rgba(153, 102, 255, 1)',
    //                                     'rgba(255, 159, 64, 1)'
    //                                 ],
    //                                 borderWidth: 1
    //                             }]
    //                         },
    //                         options: {
    //                             scales: {
    //                                 y: {
    //                                     beginAtZero: true
    //                                 },

    //                             }
    //                         }
    //                     });

                    
    //                 },
    //                 function(error){
    //                     // debugger
    //                     let canvas = document.getElementById("myChart")
    //                     let ctx = canvas.getContext('2d')
    //                     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //                     ctx.font = '50px Arial'
    //                     ctx.fillText("No ticker found for your entry", 400, 300)
    //                 }
    //             )
               
    //     }
        
    // }

}

export default StockApp;

