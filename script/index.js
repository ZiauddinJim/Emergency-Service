// Heart icon click
let counter = 0;
const heartButtons = document.getElementsByClassName('heart-btn')
for(let button of heartButtons){
    button.addEventListener('click',()=>{
        counter = counter + 1;
        document.getElementById('heart-count').textContent =counter;
    });
}
// Function to get id
const getId= (id)=>{
    const getId = document.getElementById(id).textContent;
    return getId.trim();
}

// Call Feature
// Coin id ="coin-count"
// call id="call-btn"
// id="service-name"
// id="service-number"
document.getElementById('call-btn').addEventListener('click', ()=>{
    const coin =parseInt(getId('coin-count'));
    const serviceName =getId("service-name");
    const serviceNumber =getId("service-number");
    const digit = 20;
    const coinElement =document.getElementById('coin-count');
    if(coin >= digit){
        alert(`Calling ${serviceName} ${serviceNumber}...`);
        const min = coin - digit;
        coinElement.textContent= min;
    }else{
        alert(`You don't have enough coins, you need at least 20 coins to make a call.`);
    }
    
})