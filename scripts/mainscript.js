document.addEventListener('DOMContentLoaded', () =>{
    const block = document.querySelector('.red');
    const block2 = document.querySelector('.green');
    const block3 = document.querySelector('.blue');
    const btn = document.querySelector('.btn');
    btn.click();
    console.log(btn);
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        if (scrollTop <= block.offsetHeight){
            block.style.transform = `translateY(${scrollTop * 0.3}px)`;
        }
       
        if (scrollTop - 5 - block.offsetHeight < block2.offsetHeight  && scrollTop > block.offsetHeight){
            console.log('hi');
            block2.style.transform = `translateY(${(scrollTop - block.offsetHeight ) * 0.3}px)`
        }
        
    });
});