document.getElementById('donate-for-noakhali').addEventListener('click',function(event){
    event.preventDefault();
    const donateValue = getInputValueById('donate-noakhali');
    const balance = getInnerTextById('balance')
    if(isNaN(donateValue)){
        alert('Inable to donate')
        return;
    }
    if(donateValue < balance){
        const newBalance = balance - donateValue;
    const noakhali = getInnerTextById('balance-noakhali')
    const netBalance = noakhali + donateValue;
    const date = new Date();
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('balance-noakhali').innerText = netBalance;
    // document.getElementById('date').innerHTML = date ;
    
    const p = document.createElement('p');
    p.classList.add( "ml-5" ,"pt-5","pl-5" ,"pb-8","border-base-300", "border" ,"rounded-md" ,"space-y-2");
    p.innerHTML = `
    <h1>${donateValue} Taka is donated fot Donate for Flood at Noakhali, Bangladesh</h1>
     <p>Date:${date}</p>
    `
    document.getElementById('transaction').appendChild(p);
        
    
    alert('Donation successfull');
    document.getElementById('donate-success').classList.remove('hidden');
    document.getElementById('donate-done').addEventListener('click',function(){
        document.getElementById('donate-success').classList.add('hidden');
    })
    }
    else{
        alert('unable to donate');
    }
    
    
})

document.getElementById('donation-btn').addEventListener('click',function(){
    showSectionById('donate-data');
})
document.getElementById('history-btn').addEventListener('click',function(){
    showSectionById('show-transaction');
})
document.getElementById('donation-btn').addEventListener('click',function(){
    addAndRemoveBgById('donation-btn','history-btn')
})
document.getElementById('history-btn').addEventListener('click',function(){
    addAndRemoveBgById('history-btn','donation-btn')
})