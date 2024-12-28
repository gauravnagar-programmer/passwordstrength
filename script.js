let inputs=document.getElementById('inputs');
let mess=document.getElementById('mess');
let faEye=document.querySelector('.fa-eye');
let faCopy=document.querySelector('.fa-copy');
let strength=document.getElementById('strength');

inputs.addEventListener('input',()=>{
   if(inputs.value.length>0){
    mess.style.display='block'
    strength.innerText='Weak'
    strength.style.color='red'
    inputs.style.border='3px solid red'
}
   else{
    mess.style.display='none'
   }
  
    if(inputs.value.length<4){
        strength.innerHTML="Weak"
    }
    else if(inputs.value.length>4 && inputs.value.length<8){
        strength.innerHTML="Medium"
        strength.style.color='yellow'
    inputs.style.border='3px solid yellow'
    }
    if(inputs.value.length>=8){
        strength.innerHTML="Strong"
        strength.style.color='green'
    inputs.style.border='3px solid green'
    }
});
faEye.addEventListener('click',()=>{
    if(inputs.type==='password'){
    inputs.type='text';}
    else if(inputs.type==='text'){
        inputs.type='password'
    }
})
copyButton.addEventListener('click', () => {
    if (inputs.value.trim() !== '') {
        // Select and copy the input value
        inputs.select();
        inputs.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(inputs.value)
    }

})