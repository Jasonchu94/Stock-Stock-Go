# Stock Stock Go

<a href="https://jasonchu94.github.io/Stock-Stock-Go/" target="_blank" rel="noopener noreferrer">Stock Stock Go</a> is a data visiualization tool for real time stock closing prices. The app by no means is financial advise, but an easy accessible tool for users who are interested in taking their first step into the stock world. The app will use Chart.js, Node.JS, IEX cloud API, and SASS.

# Instructions

Select a time range with the drop down. Once selected, click any stock icon or enter a Ticker and press the button to graph closing prices for the stock of choice. 
Scroll down to the table and takeaways to read summarized information about your stock.

In Stock Stock Go users will be able to:

1. Choose preselected stock data to graph and gain insight on.
2. Enter their own ticker symbol for live data.
3. Receive dynamic insight on the stock information of choice.
4. Utilize IEX cloud API for up to date stock information.

The fetch request below allows users to search for any Ticker symbol they search and utilizes the graphStock function which draws the graph, table, and insights below. 
```
fetch(`https://cloud.iexapis.com/v1/stock/market/batch?types=chart&symbols=${input}&range=1y&token=pk_b07152883e9d4a61a719dc430195a97b`)
                .then(response => response.json())
                .then(
                    function(value){
                        // debugger
                        this.graphStock(input, 1, value[input])

                    }.bind(this),
                    function(error){
                        // debugger
                        document.getElementById('take-aways').style.display = 'none'
                        document.getElementById('table-header').innerHTML = `Stock information for ${input} not found`
                        document.getElementById('inferences').style.display='none'
                        document.getElementById('inferences1').style.display = 'none'
                        document.getElementById('inferences2').style.display = 'none'
                        let canvas = document.getElementById("myChart")
                        let ctx = canvas.getContext('2d')
                        ctx.clearRect(0, 0, canvas.width, canvas.height)
                        ctx.font = 'bold 50px Arial'
                        ctx.fillText("No ticker found for your entry", 450, 300)
                    }
                )
```

![Stock Insights]![StockStockGo](https://user-images.githubusercontent.com/88340645/157318879-35301242-755c-4337-8297-c64c36ef216b.png)


Future improvments: 
Add more accessible data rather than just closing prices. Allow for more extensive searches with a higher tier of API call account. 
