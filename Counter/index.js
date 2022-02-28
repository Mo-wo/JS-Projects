window.addEventListener('load', (event) => {
    let counter = Number(document.getElementsByTagName("h1")[1].textContent);
    let counterDisplay = document.getElementsByTagName('h1')[1]
    let counterDecrement = document.getElementsByTagName("button")[0];
    let counterReset = document.getElementsByTagName("button")[1];
    let counterIncrement = document.getElementsByTagName("button")[2];
    let autoCount = document.getElementsByTagName("button")[3];
    
    let control = document.getElementById('control')
    let countDown = document.getElementsByTagName("button")[4];


    counterDecrement.addEventListener('click', (e) => {
        counter--;
        let decrement = counter.toString();
        counterDisplay.textContent = decrement;
    });

    counterIncrement.addEventListener('click', (e) => {
        counter++;
        let decrement = counter.toString();
        counterDisplay.textContent = decrement;
    });

    counterReset.addEventListener('click', (e) => {
        counter = 0
        counterDisplay.textContent = counter;
    });

    function counterStopper(){
        let stopCount = document.createElement('button');
        stopCount.textContent = 'Stop Auto Count';
        control.appendChild(stopCount);
    }

    autoCount.addEventListener('click', (e) => {
        counterStopper();
        if (counter == 0){
            do{
                counter++
            } while (counterStopper() == true)
        }
    }); 
        // counter = 0
        // counterDisplay.textContent = counter;
    


    // counterDecrement.addEventListener('click', (e) => {
    //     counter--;
    //     let decrement = counter.toString();
    //     let counterDisplay = document.getElementsByTagName('h1')[1]
    //     counterDisplay.textContent = decrement;
    // });
});