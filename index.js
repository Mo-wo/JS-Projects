window.addEventListener ("load", (event) => {
    let btn = document.getElementsByTagName("button")[0];
    let body = document.getElementsByTagName("body")[0];
    
    function getRandom() {
        return "#"+ Math.random().toString(16).slice(2,8);      
    };
    btn.addEventListener('click', (event) => {
        function changeColor(){
            let newColor = getRandom();
            body.style.backgroundColor = newColor;
            
            let text = document.getElementsByTagName("h1")[0];
            text.textContent = `This color is: ${newColor}`
        }
        changeColor();
    });
});