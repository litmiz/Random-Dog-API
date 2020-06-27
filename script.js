document.getElementById('findBtn').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => 
    response.json().then(data => {
        const dogImg = document.getElementById("dogImg");
        dogImg.setAttribute('src', data.message);
    }));
});