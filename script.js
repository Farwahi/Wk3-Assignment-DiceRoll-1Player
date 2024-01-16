
//player Name
let player1 = "Player1";
       
    function editNames() {
     player1 = prompt("Change Player1 Name")
        if (player1.length < 1 ) 
        {
        alert('please enter valid name');
        return;
        }
    document.querySelector("p.Player1")
        .innerHTML = player1;
        }

    function rollTheDice() {
        let diceNum1 = document.querySelector(".img1");
        diceNum1.setAttribute("src", "diceroll.gif")
        let result = document.querySelector('h1')
        result.innerHTML = ""
        setTimeout(() => {
             let randomNumber1 = Math.floor(Math.random() * 6) + 1;
                diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
             }, 2500);
}
