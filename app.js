let player = 5;
let dragon = 10;

//let attack = Number(prompt("please enter a number no more than 5: "));

while(player > 0 || dragon > 0)
{
    let attack = Number(prompt("please enter a number no more than 5: "));

    if (attack > "5")
    {
        dragon = dragon - 1;
        player = player - Math.floor(Math.random() * 3);
    }

    if (attack < "5")
    {
        dragon = dragon - Math.floor(Math.random() * 6);
        player = player - Math.floor(Math.random() * 3);
    }
}

document.body.innerHTML = "dragons health : " + dragon + " " + "players health : " + player;
