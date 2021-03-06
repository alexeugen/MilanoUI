import Vue from 'vue'
import Posts from './Posts'
import NewPost from './NewPost'

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        Posts,
        NewPost,
    }
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onload = function() {
    let btnSubscribe =  document.getElementById("flashy-subscribe");
    let settedinterval = setInterval(function(){ 
        btnSubscribe.classList.toggle("flashy-subscribe-animation");
    }, 3000);

    let app = document.getElementById("app");
    app.addEventListener("click", function(){
        let q = localStorage.getItem("subscribed")

        if(!q) {
            let p = document.createElement("P");
            p.innerText = "SUBSCRIBE";
            let x = event.clientX;
            let y = event.clientY + document.documentElement.scrollTop;
    
            p.style.position = "absolute";
            p.style.left = x + "px";
            p.style.top = y + "px";
    
            p.style.color = getRandomColor();
    
            app.appendChild(p);
            setTimeout(() => {
                app.removeChild(p);
            }, 3000);
        }
    });

    let content = document.getElementById("content");
    content.onclick = function(event) {
        event.stopPropagation();
    }

    document.body.onkeydown = function(event) {
        if(event.keyCode == 27)
            clearInterval(settedinterval);
    };

    btnSubscribe.onclick = moveDown;

    let buyCoffee = document.getElementById("buy-coffee");
    buyCoffee.onclick = plimba;
}

function moveDown() {
    var elem = document.getElementById("flashy-subscribe"); 
    var pos = 40;
    var id = setInterval(move, 10);
    function move() {
      if (pos == -150) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + 'px'; 
      }
    }

    localStorage.setItem("subscribed", true);
  }

  function plimba() {
    var elem = document.getElementById("buy-coffee"); 
    var pos = 0;
    var id = setInterval(move, 10);
    function move() {
      if (pos == 150) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.marginTop = pos + 'px'; 
      }
    }
  }
