window.onload = function () {

    
    let boton = document.getElementById('boton');
    boton.addEventListener('click', function(){
        ChangeCard();
    });

    ChangeCard = () =>{  
    let number = document.getElementsByClassName('number')[0];
    let num = Math.floor(Math.random() * 13);
    let varpinta = Math.floor(Math.random() * 4)+1 ;
    let pinta = "";
    switch (varpinta) {
        case 1:
            pinta = "heart";
            break;
        case 2:
            pinta = "spade";
            break;
        case 3:
            pinta = "club";
            break;
        case 4:
            pinta = "diamond";
            break;
    }
    switch (num) {
        case 0:
            num = "A";
            break;
        case 10:
            num = "J"
            break;
        case 11:
            num = "Q";
            break;
        case 12:
            num = "K";
            break;
    }
    number.innerHTML = num;

    let card = document.getElementsByClassName('card')[0];
   
    card.classList = `card ${pinta}`;

}
ChangeCard();
window.setInterval(function(){
    ChangeCard();
}, 10000)
};





