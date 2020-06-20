const input=document.querySelector('#validation-input');
input.addEventListener('blur', isInputValid);
function isInputValid(event){

    if (this.getAttribute('data-length') > this.value.length) { 
        this.classList.remove('valid');
        this.classList.add('invalid');
      } else {
        this.classList.remove('invalid');
        this.classList.add('valid');
      }
};


