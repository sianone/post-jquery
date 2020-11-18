
import $ from 'jquery';

let form = document.getElementById('user-form');

form.addEventListener('submit', event =>{

    let nome = form.elements['nome'];
    let email = form.elements['email'];
    let nomeErro = document.getElementById('nome-erro');
    let emailErro = document.getElementById('email-erro');

    (function esvaziarErros(){

        nomeErro.textContent = '';
        emailErro.textContent= '';
    })();

    if (validacaoNome() || validacaoEmail()){
        console.log('Dado inválido');
    }else{
        let user = {
            nome: nome.value,
            email: email.value
        };
        postCadastro(user);
    }

    
    function validacaoNome(){

        let temErros = false; 
       
        if((nome.value.length< 4) || (/[^a-zA-Z]/.test(nome.value))){
            nomeErro.textContent='Por favor, colocar nome completo e/ou nome válido';
            nomeErro.style.color='red';
            nome.focus();
            temErros = true;
            event.preventDefault();
        }

        return temErros;
    };

    function validacaoEmail(){

        let temErros = false; 

        if((email.value.length<8) || 
        !(email.value.includes('@')) ||
        !((email.value.endsWith('.com'))||(email.value.endsWith('.com.br')))      
        )
        
        {
            emailErro.textContent='Por favor, colocar email válido';
            emailErro.style.color='red';
            email.focus();
            temErros = true;
            event.preventDefault();            
        }

        return temErros;
           
    }
 
   function postCadastro(user){
       
        let promise = $.post("https://5fb4e7e2e473ab0016a17206.mockapi.io/user/plswork/user", user);

        promise.then(
            dados => console.log('sucesso: ', dados),
            erro => console.log('erro: ', erro)
        );
        
        alert('Cadastro realizado');
        event.preventDefault();
    }

});




