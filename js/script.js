const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = '<p>Carregando...</p>'

    content.innerHTML = carregando

    let pronto = '<p>Cadastro concluído! <br>Bem vindo(a) ao CatWorld!!!</p>'

    setTimeout(()=>{
        content.innerHTML = pronto
    }, 1000)
})