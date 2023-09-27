document.addEventListener('DOMContentLoaded', () => {
    const observar = new IntersectionObserver( entries => {
        

        if(entries[0].isIntersecting){
            console.log('ya se ve');
        }else{
            console.log('ya no se ve');
        }
    }); 

    observar.observe(document.querySelector('.premium'))
})