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
function addAndRemoveBgById(id1,id2){
    document.getElementById(id1).classList.add('bg-green-400');
    document.getElementById(id2).classList.remove('bg-green-400','hover:bg-green-400');
   
}