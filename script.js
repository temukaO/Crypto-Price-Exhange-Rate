const url = 'https://api.coingecko.com/api/v3/simple/price?ids=solana%2Cethereum%2Cbitcoin&vs_currencies=usd%2Cmnt'

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

function dropDown(){
    
}
setInterval(getData,10000);