window.addEventListener('load', (e) => {
    //HTML Element Variables
    let counter = Number(document.getElementsByTagName('h1')[1].textContent);
    let count = document.getElementById('count');
    let counterDisplay = document.getElementsByTagName('h1')[1];
    let control = document.getElementById('control');
    let decrement = document.getElementsByTagName('button')[0];
    let reset = document.getElementsByTagName('button')[1];
    let increment = document.getElementsByTagName('button')[2];
    let autoCount = document.getElementsByTagName('button')[3];
    let countdown = document.getElementsByTagName('button')[4];
    let select = document.getElementsByTagName('select')[0];
    let added = document.getElementById('added');

    //Added Elements for Auto Count
    let stopCount = document.createElement('button');
    let decreaseCount = document.createElement('button');
    let autoCountControl = document.createElement('div');
    stopCount.textContent = 'Stop Auto Count'
    decreaseCount.textContent = 'Decrease Auto Count'
    autoCountControl.appendChild(stopCount);
    autoCountControl.appendChild(decreaseCount);
    
    //Added Elements for Countdown
    let numberCount = document.createElement('button');
    let timeCount = document.createElement('button');
    let countdownControl = document.createElement('div');
    numberCount.textContent = 'Countdown with Number';
    timeCount.textContent = 'Countdown with Time';

    numberCount.appendChild(select)
    countdownControl.appendChild(numberCount);
    countdownControl.appendChild(timeCount);
    
    //Counter Display Colors
    function counterColor(){
        if(counter > 0){
            counterDisplay.style.color = 'blue' 
        }else if (counter <= -1){
            counterDisplay.style.color = 'red' 
        }else{
            counterDisplay.style.color = 'green'
        }
    };
    
    //Counter Decrease Button
    decrement.addEventListener('click', (e) => {
       counter--
       let decrease = counter.toString();
       counterDisplay.textContent = decrease; 
       counterColor()
    });

    //Counter Reset Button
    function resetCount(){
        counter = 0;
        counterDisplay.textContent = counter; 
        counterDisplay.style.color = 'green';
    }

    reset.addEventListener('click', (e) => {
        stopAutoCount()
        resetCount()
    });

    //Counter Increase Button
    increment.addEventListener('click', (e) => {
        counter++
        let increase = counter.toString();
        counterDisplay.textContent = increase; 
        counterColor()
     });
    
    // Auto Count Button 
    function counting(){
       let autoCountUp = ++counter;  
       counterDisplay.textContent = autoCountUp; 
       counterColor();
    }
    let countUp;

    autoCount.addEventListener('click', (e) => {
        added.appendChild(autoCountControl);
        autoCountControl.style.display = 'block'
        clearInterval(countingDown)
        clearInterval(countUp);
        countUp = setInterval(counting, 1000);

        if (countdownControl.style.display == 'block'){
            countdownControl.style.display = 'none';
        };
    });

    //Added Auto Count Elements
    //Stop Count Button
    function stopAutoCount(){
        clearInterval(countUp);
        clearInterval(countingDown);
    };

    stopCount.addEventListener('click', (e) => {
        stopAutoCount();
        counterDisplay.textContent = counter;
    });

    //Decrease Count Button
    function down(){
        clearInterval(countUp)
        let autoCountDown = --counter;  
        counterDisplay.textContent = autoCountDown; 
        counterColor();
    };
    
    let countingDown;
    decreaseCount.addEventListener('click', (e) => {
        clearInterval(countingDown);
        countingDown = setInterval(down, 1000);
    });
    
    // Countdown Button 
    countdown.addEventListener('click', (e) => {
        stopAutoCount();
        resetCount();
        added.appendChild(countdownControl);
        countdownControl.style.display = 'block';
        
        if (autoCountControl.style.display == 'block'){
            autoCountControl.style.display = 'none';
        };
    });

    //Added Countdown Elements
    // function countValue(){
    //     let values = Array.from(select.children)
    //     console.log(values);
    //     values.forEach((value) => {
    //         console.log(value.innerHTML);
    //         value.addEventListener('click', (e) => {
    //         console.log(e.target);
    //         console.log(`working`);

    //     });        
    // }

    // function testing(){
        let values = select.children
        values.addEventListener('click', (e) => {
            console.log(e.target);
            console.log(`working`);
        });
        // });
    // };
    // testing()
    // value

    // select.addEventListener('click', (e) => {
    //     
    //     value.forEach((value) => {
    //         // let counter = values.textContent;
    //         console.log(`My value is ${counter}`);
    //     });
        
        // if (e.target == select){
        //     Array.from(values).forEach((value) => {
        //         let counter = value.textContent;
        //         console.log(counter)
        //     });         
        // } else{
        //     console.log('not select')
        // }
        // let option = document.getElementsByTagName('option');
        // Array.from(option).forEach((option) => {
        //     console.log(e.target)
        // });
        // let value =  e.target.option.value
        // console.log(value)
        // if (e.target = option){
        //     Array.from(option).forEach((option) => {
        //        counter = value;
        //        --counter;
        //        clearInterval(countingDown);
        //        countingDown = setInterval(down, 1000);
        //     });
        // }
    // });
    
});