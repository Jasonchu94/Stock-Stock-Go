class StockApp{

    constructor(){
        this.ctx = document.getElementById("myChart").getContext('2d');
        this.ctx.font = '75px Arial'
        this.ctx.fillStyle = "blueviolet"
        this.ctx.fillText("Click a stock icon and choose a time period!",100,300)
     
        this.addStock = this.addStock.bind(this);
        
    
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
        this.teslaButton.onclick = function () { this.graphStock(this.teslaButton.value) }.bind(this)
      
        this.graphStock = this.graphStock.bind(this);
        this.drawtable=this.drawtable.bind(this);

        this.searchStock = document.getElementById('ticker-search-button')
        this.searchStock.onclick = function(){this.addStock()}.bind(this)
        
        setTimeout(function(){document.getElementById('fadeaway').style.display='none'},2000)

    }

    graphStock(ticker, days, searchedStock){
        // debugger
        if(ticker === '') return null
        days = document.getElementById('preselected-year').value
        //253 market days in a year
        let labels = [];
        let data = [];
        let high = 0;
        let low = Infinity;
        let volume = 0;
        let currentDay;
        let volumeCount=0;
        let stock;
        debugger
        if (searchedStock) {stock = searchedStock.chart}
        else{
            stock = require(`../stockdata/${ticker}.json`)[ticker].chart

        }
        // debugger
        
        stock = stock.slice(253-days) 
        stock.forEach(day => {
            labels.push(day.label)
            data.push(day.close)
            if(day.high > high){high=day.high}
            if(day.low < low ){low=day.low}
            currentDay = day.close;
            volume += day.volume
            volumeCount+=1

        })
        // debugger
        this.drawtable(ticker,stock, days, high, low, (volume/volumeCount), currentDay);
       
        new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `Stock Close Prices for ${ticker} from the last ${days} days`,
                    data: data,
                    backgroundColor: 
                        `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},  ${Math.floor(Math.random() * 255)}, .2)`
                     
                    ,
                    borderColor: [
                        `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, .2)`,
                    ],
                    borderWidth: 1
                }]
            },
            options: {

                scales: {
                    y: {
                        beginAtZero: true
                    },

                },
                
            }
            
        }
        );
        
    }

    drawtable(ticker,stock, days, high, low, volume, currentDay){
        // debugger
        document.getElementById("table-container").style.display= 'grid'
        // debugger
        // document.getElementById('table1').children[0].style.display= 'grid'
        document.getElementById('table-header').innerHTML = `Stock information for ${ticker}`;
        document.getElementById('table1').rows[0].cells[0].innerHTML = `${days}-Day-High`
        document.getElementById('table1').rows[0].cells[1].innerHTML = `${days}-Day-Low`
        document.getElementById('table1').rows[0].cells[2].innerHTML = `Current Day Price`
        document.getElementById('table1').rows[0].cells[3].innerHTML = `Average Daily Volume`
        // debugger
        document.getElementById('table1').rows[1].cells[0].innerHTML = `$${high}`
        document.getElementById('table1').rows[1].cells[1].innerHTML = `$${low}`
        document.getElementById('table1').rows[1].cells[2].innerHTML = `$${currentDay}`
        document.getElementById('table1').rows[1].cells[3].innerHTML = `${volume.toLocaleString()}`
    }

    addStock() {
        debugger
        let input = document.getElementById('ticker-search-bar').value.toUpperCase();
        fetch(`https://cloud.iexapis.com/v1/stock/market/batch?types=chart&symbols=${input}&range=1y&token=pk_b07152883e9d4a61a719dc430195a97b`)
                .then(response => response.json())
                .then(
                    function(value){
                        debugger
                        this.graphStock(input, 1, value[input])

                    }.bind(this),
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

export default StockApp;

