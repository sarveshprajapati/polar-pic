const getPicBtn = document.querySelector('.get-pic');
const featuredImg = document.querySelector('.featured-img');
const preloader = document.querySelector('.preloader');
preloader.style.display = 'none';
const getThePic = async () => {
    preloader.style.display = 'inline-block';
    featuredImg.style.display = 'none';
    getPicBtn.style.display = 'none';
    try {
        const responce = await fetch('https://yesno.wtf/api/');
        if (!responce.ok) {
            throw Error(responce.statusText);
        }
        const json = await responce.json();
        console.log(json);
        featuredImg.src = json.image;
    } catch (error) {
        console.log(error);
    } finally {
        preloader.style.display = 'none';
        getPicBtn.style.display = 'inline-block';
        featuredImg.style.display = 'inline-block';
    }
}
getPicBtn.addEventListener('click', getThePic);
window.addEventListener('load', getThePic);