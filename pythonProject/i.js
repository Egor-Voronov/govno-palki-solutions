const skeletonImages = document.querySelectorAll('img');
const skeletonDivs = document.querySelectorAll('.skeleton-div');
let skeletonInterval;

skeletonInterval = setInterval(() => {
    for (let i = 0; i <= skeletonImages.length; i++) {
         if (skeletonImages[i].complete) {
            skeletonDivs.forEach(div => {
                div.classList.remove('skeleton-div')
            })
             clearInterval(skeletonInterval)
        }
    }
}, 1000)
