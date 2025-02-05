//prwta 8a kanw validate
function validationForm(){
    const username = document.getElementById('username'.value);
    const errorMessage = document.getElementById('error message');
}
//meta tha tsekarw an einai gia paradeigma 6 xarakthres
if(username.length < 6 ){
    errorMessage.textContent = 'required 6 characters at least'
    return false;
}