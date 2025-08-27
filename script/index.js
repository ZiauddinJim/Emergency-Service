// Heart icon click
let counter = 0;
const heartButtons = document.getElementsByClassName('heart-btn')
for(let button of heartButtons){
    button.addEventListener('click',()=>{
        counter = counter + 1;
        document.getElementById('heart-count').textContent =counter;
    });
}
