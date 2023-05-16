window.addEventListener('scroll', ()=>{
    // console.log('Scrolling');

    // const scrollPX = window.scrollY;
    // console.log(scrollPX)

    const premium = document.querySelector('.premium');
    const info = premium.getBoundingClientRect();

    // console.log(info);

    if(info.top < 681){
        console.log('El elemento ya esta visible')
    }else{
        console.log('Da mas scroll')
    }
});