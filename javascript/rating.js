const allStars = document.querySelectorAll('.star');
const currentRating = document.querySelector('.current-rating');

allStars.forEach((star,index)=>{
    star.onclick = () => {
        let current_star_index = index +1;
        currentRating.innerText = `${current_star_index} Out Of 5`

        allStars.forEach((star,i)=>{
            if(current_star_index >= i+1){
                star.innerHTML = `&#9733`;
            }else{
                star.innerHTML = `&#9734`;
            }
        })
    }
})
