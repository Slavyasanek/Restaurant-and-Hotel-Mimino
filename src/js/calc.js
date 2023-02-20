const calcMoney = () => {
    const moneySelect = document.querySelectorAll('.my-select');
    const outputMoney = document.querySelector('#money');
    moneySelect[0].addEventListener("change", () => {
        const selectedOptionValue = moneySelect[0].selectedIndex;
        const selectedOptionText = moneySelect[0].options[selectedOptionValue].text;
        outputMoney.value = selectedOptionText * 1000;
    });
}

calcMoney();
