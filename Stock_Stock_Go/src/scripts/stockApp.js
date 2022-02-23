import Graph from './graph'
// require('dotenv').config();
class StockApp{

    constructor(){
        this.ctx = document.getElementById("myChart").getContext('2d');
        this.allYears = [];


        this.input = document.getElementById('ticker-search-bar');
        this.input.addEventListener('input', this.addStock);

        this.startYear=document.getElementById('year-range')
        this.startYear.addEventListener('input', this.setYearRange)

        
        // this.getStock();
        this.addStock = this.addStock.bind(this);
        this.setYearRange = this.setYearRange.bind(this);
        // debugger
        this.drawGraph();
    }

    setYearRange(e){
        e.preventDefault();
        this.yearRange = e.currentTarget.value.split(' ')
        if (Number(this.yearRange[0]) > Number(this.yearRange[1])){
            console.log("error")
        }
        else{         
            for(let i = Number(this.yearRange[0]); i<=Number(this.yearRange[1]); i++){
                this.allYears.push(i)
            }
        }

    }
    addStock(e){
        e.preventDefault();
        // debugger
        let input = e.currentTarget.value
        if (input.length === 4){
            e.currentTarget.value = ""
            console.log(input.toUpperCase())
        }
    }


    getStock(ticker){
        // debugger
        let search = document.getElementById("ticker-search-bar")
        let button = document.getElementById('ticker-search-button')
        console.log('hello')
    }

    drawGraph(){
        // debugger
        const myChart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: this.allYears,
                datasets: [{
                    label: 'Stock Prices over',
                    data: [1,2,3,4,5,5],
                    // backgroundColor: [
                    //     'rgba(255, 99, 132, 0.2)',
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)',
                    //     'rgba(255, 159, 64, 0.2)'
                    // ],
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
    }
}

export default StockApp;