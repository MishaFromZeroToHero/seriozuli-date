const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');
const thxGif = document.querySelector('.alert-gif');

const getRandomPosition = function(a, b){
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b-a)) + a;
}
console.log(getRandomPosition(10, 20));

noBtn.addEventListener('click', function (){
    noBtn.style.position = 'absolute';
    noBtn.style.transform = `translate(${getRandomPosition(-109, 109)}px, ${getRandomPosition(-160, 300)}px)`;
});
yesBtn.addEventListener('click', function(){
thxGif.style.display = 'block';
});