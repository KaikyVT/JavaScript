function convinput()
{
    var tempinput = document.getElementsByName('temperatura')[0].value;
    farenheit = (tempinput*1.8 + 32)    

    var h2 = document.createElement("h2")
    h2.innerHTML = "A temperatura em farenheit é: " + farenheit;
    document.getElementsByTagName("body")[0].appendChild(h2);
}


function converter()
        {
            var temp = prompt("Coloca a temperatura ae: ");
            var farenh = temp * 1.8 + 32;
            if (isNaN(temp))
            {
                alert("Você não digitou um número >:(");
            }
            else if (temp == 666)
            {
                alert("Deus me defenderai...");
                alert("Sua temperatura em farenheit é: "+ farenh);
            }
            else
            {
                alert("Sua temperatura em farenheit é: "+ farenh);
            }
        }