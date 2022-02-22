window.addEventListener('load', (e) => {
    let counter = Number(document.getElementsByTagName('h1')[1].textContent);
    let count = document.getElementById('count');
    console.log(count);
    let counterDisplay = document.getElementsByTagName('h1')[1];
    let control = document.getElementById('control');
    let decrement = document.getElementsByTagName('button')[0];
    let reset = document.getElementsByTagName('button')[1];
    let increment = document.getElementsByTagName('button')[2];
    let autoCount = document.getElementsByTagName('button')[3];
    let countdown = document.getElementsByTagName('button')[4];

    let stopCount = document.createElement('button');
    let decreaseCount = document.createElement('button');
    let autoCountControl = document.createElement('div');

    stopCount.textContent = 'Stop Auto Count'
    decreaseCount.textContent = 'Decrease Auto Count'

    autoCountControl.appendChild(stopCount);
    autoCountControl.appendChild(decreaseCount);
    let clicked = false;
    
    
    decrement.addEventListener('click', (e) => {
       counter--
       let decrease = counter.toString();
       counterDisplay.textContent = decrease; 
        if (counter < 0){
            counterDisplay.style.color = 'red';
        }else if (counter == 0){
            counterDisplay.style.color = 'green';
        };
    });

    reset.addEventListener('click', (e) => {
        clicked = true;
        counter = 0;
        counterDisplay.textContent = counter; 
        counterDisplay.style.color = 'green';
    });

    increment.addEventListener('click', (e) => {
        counter++
        let increase = counter.toString();
        counterDisplay.textContent = increase; 
        if (counter <= -1){
            counterDisplay.style.color = 'red';
        }else if (counter > 0) {
            counterDisplay.style.color = 'blue';
        }else{
            counterDisplay.style.color = 'green';
        };
     });
    
     
    function counting(){
       let autoCountUp = counter++;  
       counterDisplay.textContent = autoCountUp; 
    }
    let countUp;

    autoCount.addEventListener('click', (e) => {
        control.appendChild(autoCountControl);
        clearInterval(countDown)
        clearInterval(countUp);
        countUp = setInterval(counting, 1000);
        counterDisplay.style.color = 'blue';
    });

    stopCount.addEventListener('click', (e) => {
        clearInterval(countUp);
        clearInterval(countDown);
        counter = 0;
        counterDisplay.textContent = counter;
    });

    function down(){
        clearInterval(countUp)
        let autoCountDown = counter--;  
        counterDisplay.textContent = autoCountDown; 
        if (counter <= -1){
            counterDisplay.style.color = 'red'
        }else {
            counterDisplay.style.color = 'blue'
        }
    };
    let countDown;

    decreaseCount.addEventListener('click', (e) => {
        clearInterval(countDown);
        countDown = setInterval(down, 1000);
        
    })
});