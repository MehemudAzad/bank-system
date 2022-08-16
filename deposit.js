//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',()=>{
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    //s-3 get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
   

    const currentDepositTotal = +previousDepositTotal + +newDepositAmount;
    //step-7: clear the deposit field
    depositTotalElement.innerText = currentDepositTotal;

    const balanceAmount = document.getElementById('balance-total');
    const balanceAmountTotal = balanceAmount.innerText;
    console.log(balanceAmountTotal)
    const balanceTotal = +balanceAmountTotal + +newDepositAmount;
    console.log(balanceTotal)
    balanceAmount.innerText = balanceTotal;
});

    //s-8: withdraw section
    document.getElementById('btn-withdraw').addEventListener('click', ()=>{
        const withdrawField = document.getElementById('withdraw-field');
        const withdrawAmount = withdrawField.value;

        const balanceAmount = document.getElementById('balance-total');
        const balanceAmountTotal = balanceAmount.innerText;

        if(+withdrawAmount > +balanceAmountTotal){
            alert("You don't have enough balance");
        }else{
            const withdrawTotalAmount = document.getElementById('withdraw-total');
            const withdraw = withdrawTotalAmount.innerText;
            const newWithdrawAmount = +withdraw + +withdrawAmount
            withdrawTotalAmount.innerText = newWithdrawAmount;
                  
            const balanceTotal = +balanceAmountTotal - +newWithdrawAmount;
            balanceAmount.innerText = balanceTotal;
        }    

    })
   
