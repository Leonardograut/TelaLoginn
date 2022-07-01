function logar (){
    let login = document.getElementById ('login').value;
    let senha = document.getElementById ('senha').value;
    
    if (login == 'admin' && senha =='admin'){
        alert ('Sucesso');
        window.location.href = "https://github.com/braziljs/eloquente-javascript";

    } else 
    alert ('Usuario e senha Incorretos !')
}