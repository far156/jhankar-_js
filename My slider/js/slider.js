const images=[
    'img/pic-1',
    'img/pic-2',
    'img/pic-3',
    'img/pic-4',
    'img/pic-5',
    'img/pic-6',
    'img/pic-7',
    'img/pic-8',
    'img/pic-9',
    'img/pic-10',

];
let imgIndex=0;
const imgElement=document.getElementById('slider-img');




setInterval(()=>{
    if(imgIndex>images.length){
        imgIndex=0;
    }

    const imgUrl=images[imgIndex];
    imgElement.setAttribute('src',imgUrl);
    console.log(imgUrl);

    imgIndex++;

},1000)