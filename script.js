const signInBtnLink = document.querySelector('.signin-btn-link');

const signUpBtnLink = document.querySelector('.signup-btn-link');

const wrapper = document.querySelector('.container');

signUpBtnLink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});