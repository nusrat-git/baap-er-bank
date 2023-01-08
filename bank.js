document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');

    const depositAmount = depositField.value;

    const depositPrevious = document.getElementById('deposit-previous')
    ;
    const depositPreviousAmount = depositPrevious.innerText;

    const balanceField = document.getElementById('balance-field')
    ;

    const balancePreviousAmount = balanceField.innerText;

    depositPrevious.innerText = parseFloat(depositAmount)+parseFloat(depositPreviousAmount);

    balanceField.innerText = parseFloat(depositAmount)+parseFloat(balancePreviousAmount);

    depositField.value = '';

})

document.getElementById('btn-widraw').addEventListener('click', function () {
    const depositField = document.getElementById('widraw-field');

    const widrawAmount = depositField.value;

    const widrawPrevious = document.getElementById('widraw-previous')
    ;
    const widrawPreviousAmount = widrawPrevious.innerText;

    const balanceField = document.getElementById('balance-field')
    ;

    const balancePreviousAmount = balanceField.innerText;

    widrawPrevious.innerText = parseFloat(widrawAmount)+parseFloat(widrawPreviousAmount);

    balanceField.innerText = parseFloat(balancePreviousAmount)-parseFloat(widrawAmount);

    widrawField.value = '';

})