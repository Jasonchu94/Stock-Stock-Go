class StockApp{

    constructor(){
        this.ctx = document.getElementById("myChart").getContext('2d');
        // debugger
        this.ctx.font = '50px Arial'
        this.ctx.fillText("Select a start date and end date",100,300)
        this.ctx.fillText("Enter a 4 letter ticker symbol to generate a graph!", 100, 400)
        this.input = document.getElementById('ticker-search-bar');
        this.input.addEventListener('input', this.addStock.bind(this));

        this.addStock = this.addStock.bind(this);
        this.noStockFound = this.noStockFound.bind(this);
        this.graphStock= this.graphStock.bind(this);
       
    }

    addStock(e) {
        e.preventDefault();
        // debugger
        let input = e.currentTarget.value.toUpperCase();
        if (input.length === 4) {
            e.currentTarget.value = ""
            this.startYear = document.getElementById('start-year').value
            this.endYear = document.getElementById('end-year').value
            this.canvas = document.getElementById('myChart')
            this.ctx = document.getElementById("myChart").getContext('2d');

            fetch(`https://cloud.iexapis.com/stable/stock/${input}/quote?token=pk_b07152883e9d4a61a719dc430195a97b`)
                .then(response => response.json())
                .then(data => this.data = data)
                // .then(this.graphStock(this.data))    
                .catch(this.noStockFound())
               
        }
        // console.log(this.data)
    }
    graphStock(data){
        debugger
        if(data === undefined) return null
        console.log(data)
        console.log('graph it up')
    }
    noStockFound(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.font = '50px Arial'
        this.ctx.fillText("No ticker found for your entry", 400, 300)
    }

}

export default StockApp;

