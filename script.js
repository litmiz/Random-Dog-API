document.getElementById('findBtn').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => 
    response.json().then(data => {
        const dogImgArea = document.getElementById("dogImgArea");
        const dogImg = document.createElement("img");
        dogImg.setAttribute('src', data.message);
        dogImgArea.appendChild(dogImg);
    }));
});