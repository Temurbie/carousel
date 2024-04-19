document.addEventListener("DOMContentLoaded", function(){
    let carusel = document.querySelector(".carousel")
    let items = document.querySelectorAll(".car-item")
    let dotsContanier = document.querySelector(".dots")


    items.forEach((_, index) =>{
        let dot =document.createElement("span")
        dot.classList.add("dot")

        if(index === 0 ) dot.classList.add("active")
        dot.dataset.index = index;
        dotsContanier.appendChild(dot);

        })

        let dots = document.querySelectorAll(".dot")
        function showItem(index){
            items.forEach((item, idx) =>{
                item.classList.remove("active");
                dots[idx].classList.remove("active");
                if(idx == index){
                    item.classList.add("active");
                    dots[idx].classList.add("active");

                }
            });
        }
        function moveToNextSlide() {
            let index = [...items].findIndex(e1 => e1.classList.contains("active"));
            showItem((index + 1) % items.length);
        }
    
        let interval = setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
    
        // Stop auto-animation on mouse enter
        carusel.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
    
        // Resume auto-animation on mouse leave
        carusel.addEventListener('mouseleave', () => {
            interval = setInterval(moveToNextSlide, 3000);
        });

        document.querySelector(".prew").addEventListener("click", () =>{
            let index = [...items].findIndex(e1 => e1.classList.contains("active"));

            showItem((index - 1 + items.length)%items.length)

        })

        document.querySelector(".next").addEventListener("click", () =>{
            let index = [...items].findIndex(e1 => e1.classList.contains("active"));

            showItem((index + 1)%items.length)

        })

        dots.forEach((dot) =>{
            dot.addEventListener("click", () => {
                let index = parseInt(dot.dataset.index);
                showItem(index);
            })
        })
    
})