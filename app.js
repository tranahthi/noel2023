var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')

boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    // boxContent.classList.add('active')
}
content.onclick = function(){
    boxContent.classList.add('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}


ddocument.addEventListener('DOMContentLoaded', function () {
    function typeWriter(textElement, speed) {
        const text = textElement.textContent;
        textElement.innerHTML = ''; // Clear original text
        let i = 0;

        function type() {
            if (i < text.length) {
                const span = document.createElement('span');
                span.textContent = text[i];
                textElement.appendChild(span);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Set the speed (adjust as needed)
    const speed = 100;

    // Target elements by their IDs and apply the typewriter effect
    typeWriter(document.getElementById('text1'), speed);
    typeWriter(document.getElementById('text2'), speed);
    typeWriter(document.getElementById('text3'), speed);
});




