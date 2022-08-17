// console.log('connedted');

document.getElementById("withdraw").addEventListener('click', () => {
    const withdrawAmount = parseFloat(getInput_value('withdrawInput'))
    const currentWithdraw = parseFloat(getText_value('currentWithdraw'))
    const currentBalance = parseFloat(getText_value('currentBalance'))


    console.log(currentBalance);
    console.log(currentWithdraw);
  
    
    document.getElementById('withdrawInput').value = ""
    
    if (currentBalance <= withdrawAmount) {
        document.getElementById("alart").classList.remove('d-none')
   
        setTimeout(() =>{
            document.getElementById("alart").classList.add('d-none')
        },3000)

        return  
    }

    let withdrawBalance = currentWithdraw + withdrawAmount

        let mainBalance = currentBalance - withdrawAmount
    
        // console.log(mainBalance);
    
        document.getElementById('currentWithdraw').innerHTML = withdrawBalance;
    
        document.getElementById('currentBalance').innerText = mainBalance;


})  