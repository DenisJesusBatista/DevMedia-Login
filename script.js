document.getElementById('btn-acessar').addEventListener("click", function (e) {
    var login = document.getElementById("txt-login").value;
    var senha = document.getElementById("txt-senha").value;

    if (login == "") {
        alert("Preencha o login");
        e.preventDefault();
        return;
    }

    if (senha == "") {
        alert("Preencha o senha");
        e.preventDefault();
        return;
    }
});