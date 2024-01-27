function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
  }

  document.addEventListener("DOMContentLoaded", function () {
    const min = document.getElementById("min");
    const max = document.getElementById("max");
    const val = document.getElementById("txtNumber");
    const btn = document.getElementById("btnGhiceste");
    const msg = document.getElementById("mesaj");

    let gameOver = false;
    let incercari = 3;
    let minValue, maxValue, valoareGenerata;
    minValue = 1;
    maxValue = 20;
    valoareGenerata = genereazaNumar(minValue, maxValue);

    min.textContent = minValue;
    max.textContent = maxValue;

    btn.addEventListener('click', () => {
        if (gameOver) {
            resetGame();
            return;
        }
        if (val.value === '' || isNaN(val.value)) {
            alert('Introdu un numar');
            return;
        }
        let userVal = parseInt(val.value);
        if (userVal !== valoareGenerata) {
            incercari--;
            if (incercari === 0) {
                onGameOver();
                msg.textContent = 'Game Over!';
            } else {
                msg.textContent = 'Mai incearca';
            }
        } else {
            msg.textContent = 'Felicitari, ai ghicit';
        }
    });

    function onGameOver() {
        gameOver = true;
        val.disabled = true;
        btn.textContent = "Mai joaca odata";
    }

    function resetGame() {
        gameOver = false;
        incercari = 3;
        msg.textContent = '';
        btn.textContent = 'Ghiceste';
        val.disabled = false;
        val.value = '';
        valoareGenerata = genereazaNumar(minValue, maxValue);
    }

    function genereazaNumar(minValue, maxValue) {
        return Math.ceil(minValue + Math.random() * (maxValue - minValue));
    }

    console.log(genereazaNumar(1, 10));
});
