function Verify()
{
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    if (!nome || !email || !password || !password2){
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    }
    else{ 
        window.location.href = "index.php"
        alert("Cadastro Concluído");
    }
}