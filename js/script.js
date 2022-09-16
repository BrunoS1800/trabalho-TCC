var btn = document.querySelector('#clinico');
var divclinico = document.querySelector('.divclinico');

btn.addEventListener('click', function(){
    if(divclinico.style.display === 'none'){
        divclinico.style.display = 'block';
    }else{
        divclinico.style.display = 'none';
    }
});
var btn = document.querySelector('#dentista');
var divdentista = document.querySelector('.divdentista');

btn.addEventListener('click', function(){
    if(divdentista.style.display === 'none'){
        divdentista.style.display = 'block ';
    }else{
        divdentista.style.display = 'none';
    }
});
var btn = document.querySelector('#vacinacao');
var divvacinacao = document.querySelector('.divvacinacao');

btn.addEventListener('click', function(){
    if(divvacinacao.style.display === 'none'){
        divvacinacao.style.display = 'block';
    }else{
        divvacinacao.style.display = 'none';
    }
});