const salvar = document.getElementById("salvar");

salvar.addEventListener("click", (e) => {
    
    const inputNome = document.getElementById("nome");
    const inputEndereco = document.getElementById("endereco");
    const inputCidade = document.getElementById("cidade");
    const selectEstado = document.getElementById("estado");
    const radioCargo = document.querySelector('[name="cargo"]cheked');
    const checkboxInteresse = document.querySelectorAll('[name="interesse"]cheked');

    const textareaCurriculo = document.getElementById("curriculo");

    console.log(inputNome.value,
        inputEndereco.value,
        inputCidade.value,
        selectEstado.value,
        radioCargo.value,
        checkboxInteresse,
        textareaCurriculo.value
       
    );

    const interessesNodeList = document.querySelectorAll(
        '[name="interesses]: cheked'
    );

    if (interessesNodeList.length <= 0){
        alert("Você precisa selecionar ao menos um interesse");
    } else {
        console.log(interessesNodeList);
    }

});