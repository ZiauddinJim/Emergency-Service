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

//call history create
let callHistoryData =[];
// card-box season
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
    const data= {
    name: `${serviceName}`,
    Number: `${serviceNumber}`,
    date: new Date().toLocaleTimeString()
}
    callHistoryData.push(data);  
    // history submit
    updateCallHistory();
})

// function update call history data
const updateCallHistory = ()=>{
const callHistory = document.getElementById('call-history');
    callHistory.innerText = '';
    for(const data of callHistoryData){
        const div =document.createElement('div');
        div.innerHTML =
        `
        <div class="p-4 bg-[#fafafa] flex justify-between rounded-lg mb-2">
                            <div>
                                <p class="text-lg font-semibold">${data.name}</p>
                                <p class="text-gray-500">${data.Number}</p>
                            </div>
                            <p>${data.date}</p>
                        </div>
        `;
        callHistory.appendChild(div);
    }
}
