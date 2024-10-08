let onSwitch = document.getElementById('on');
let offSwitch = document.getElementById('off');
let onLabel = document.querySelector('label[for="on"]');
let offLabel = document.querySelector('label[for="off"]');
let container = document.getElementById('container');

let onClicked = () => {
    container.style.boxShadow = "inset -0.9em 0 0.9em #494949";
    offLabel.style.color = "#8e8e8e";
    onLabel.style.color = "#98f195";
    document.body.style.backgroundColor = '#1e1e1e' //adiciona cor ao fundo
}

let offClicked = () => {
    container.style.boxShadow = "inset 0.9em 0 0.9em #171717";
    onLabel.style.color = "#8e8e8e";
    offLabel.style.color = "#f1959f";
    document.body.style.backgroundColor = '#c9c9c9'
}

window.addEventListener('load', () => {
    if(onSwitch.checked){
        onClicked();
    }else{
        offClicked();
    }
});

onSwitch.addEventListener('click', onClicked);
offSwitch.addEventListener('click', offClicked);