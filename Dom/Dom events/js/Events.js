  
        function makeRed(){
             document.body.style.backgroundColor='red'; 

         } 
         //handle blue button
         //annonymus button handle
         greenButton.onclick=function makeGreen(){
            document.body.style.backgroundColor='green-button'

        }
        //handle event listener
        const goldenButton=document.getElementById('make-golden-button');
        goldenButton.addEventListener('click',makeGoldenRod);
        function makeGoldenRod(){
            document.body.style.backgroundColor='goldenRod'
        }
        //another way
        const hotPinkButton=document.getElementById('make-hot-pink');
        hotPinkButton.addEventListener('click',function makePink(){
            document.body.style.backgroundColor='hotpink';

        })