const url = 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd'

async function getData(){
    const response =  await fetch(url);
    const data = await response.json();
    let priceOfSol = data.solana.usd;
    document.getElementById('solPrice').innerHTML= priceOfSol;
    
}

getData();
async function submit(){
    const response =  await fetch(url);
    const data = await response.json();
    let priceOfSol = data.solana.usd;
    let userInput = document.getElementById('valueInput').value;
    var howMuchMoney = userInput * Number(priceOfSol);
    
    document.getElementById('howMuch').innerHTML = howMuchMoney;
}

setInterval(getData,10000);