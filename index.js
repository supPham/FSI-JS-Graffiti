const header = document.querySelector('#page-header');
header.style.textAlign = "left"

const dogImages =document.querySelectorAll('.dog-iamge');
for(let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px';
}
console.log(dogImages);
