function traffic() {
    let red = document.querySelector('.red');
    let yellow = document.querySelector('.yellow');
    let green = document.querySelector('.green');

    function Red() {
        red.style.backgroundColor = 'red';
        yellow.style.backgroundColor = 'rgb(131, 131, 2)';
        green.style.backgroundColor = 'green';
        setTimeout(Yellow, 5000);
    }

    function Yellow() {
        red.style.backgroundColor = 'rgb(118, 3, 3)';
        yellow.style.backgroundColor = 'yellow';
        green.style.backgroundColor = 'green';
        setTimeout(Green, 2000);
    }

    function Green() {
        red.style.backgroundColor = 'rgb(118, 3, 3)';
        yellow.style.backgroundColor = 'rgb(131, 131, 2)';
        green.style.backgroundColor = 'greenYellow';
        setTimeout(Yellow, 5000);
    }

    Red();
}

traffic();