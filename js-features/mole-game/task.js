const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let index = 1; ; index++) {
    getHole(index).onclick = () => {
        
        if (getHole( index ).className === 'hole hole_has-mole') {
            dead.textContent++;
            
            if (dead.textContent == 10) {
                dead.textContent = 0;
                lost.textContent = 0;
                alert("Вы победили!")
                stop();
            }
        } else {
            lost.textContent++;

            if (lost.textContent == 5) {
                dead.textContent = 0;
                lost.textContent = 0;
                alert("Вы проиграли!")
                stop();
            }
        }
    }
}

