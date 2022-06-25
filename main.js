let totop = document.querySelector('.totop');
window.onscroll =() =>{
    if(window.pageYOffset > 900 ){
        totop.style.display='block';
    }else{
        totop.style.display  ='none';
    }
};
totop.addEventListener('click',()=>{
    window.scrollTo(0,0);
});