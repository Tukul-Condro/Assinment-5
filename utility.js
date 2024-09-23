function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getInnerTextById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function showSectionById(id){
    document.getElementById('donate-data').classList.add('hidden');
    document.getElementById('show-transaction').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}