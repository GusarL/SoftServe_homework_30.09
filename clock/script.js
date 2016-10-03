'use strict';
document.addEventListener("DOMContentLoaded", start, false);

function start () {
    var timeButton;

    timeButton = document.getElementById('timeButton');
    timeButton.addEventListener('click', getTime, false);

    function getTime () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:3000/getTime', true);
        
        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState != 4) return;

            if (xhr.status == 200) {
                timeButton.innerHTML = xhr.responseText;
            } else {
                console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);    
            }

        }, false);
          
        xhr.send(null);
    }   
 
};

