// console.log('connedted');

document.getElementById("deposit").addEventListener('click', () => {
    const depositAmount = parseFloat(getInput_value('depositInput'))
    const currentDeposit = parseFloat(getText_value('currentDeposit'))
    const currentBalance = parseFloat(getText_value('currentBalance'))

    document.getElementById('depositInput').value = ""


    let depositBalance = currentDeposit + depositAmount

    let mainBalance = currentBalance + depositAmount

    document.getElementById('currentDeposit').innerText = depositBalance;

    document.getElementById('currentBalance').innerText = mainBalance;

})  