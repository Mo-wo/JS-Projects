// how to change background color of body using javascript for loop such that once the button was clicked, a different background color would appear
window.addEventListener('load', (event) => {
   let colors = ["Cyan", "Blue", "Orange", "Indigo", "White", "Pink", "Yellow"];
   let body = document.getElementsByTagName("body")[0];
   let btn = document.getElementsByTagName("button")[0];

    //Solution Using function
    function changeBg(){
      const colorIndex = parseInt(Math.random()*colors.length);
         body.style.backgroundColor = colors[colorIndex];
      };
      btn.addEventListener('click', changeBg);

   // Solution Using forEach Method
   // btn.addEventListener('click', function(e){
   //    colors.forEach(function(color){
   //       const colorIndex = parseInt(Math.random()*colors.length);
   //       body.style.backgroundColor = colors[colorIndex];
   //    });
   // });
  
   // //Solution Using for loop
   // function changeBg(){
   //    for (let i=0; i<colors.length; i++){
   //       console.log(i)
   //       body.style.backgroundColor = colors[i];
   //    };
   // };
   // btn.addEventListener('click', changeBg);
});
