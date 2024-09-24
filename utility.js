function getInputValueById(id){
    return document.getElementById(id).value;
}

function getInnerTextById(id){
    return document.getElementById(id).innerText;
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

function setInnerTextById(id, value){
    document.getElementById(id).innerText = value;
}

function donationValue(donateValueId,balanceId,netDonateId,historyId,placeId){

    const inputValue = getInputValueById(donateValueId);
    const donateValue = parseFloat(inputValue);
    const balance = parseFloat(getInnerTextById(balanceId));
    const netDonate = parseFloat(getInnerTextById(netDonateId));
    const placeName = getInnerTextById(placeId);

    if(isNaN(donateValue)){
        alert('Invalid  Amount')
        return;
    }
    if(donateValue < 0){
        alert('Unable to Donate')
        return;
    }
    if(donateValue < balance){
        const newBalance = balance - donateValue;
        const netDoneteBalance = netDonate + donateValue;

        const date = new Date();
        setInnerTextById(balanceId, newBalance);
        setInnerTextById(netDonateId, netDoneteBalance);

        const p = document.createElement('p');
        p.classList.add( "ml-5" ,"pt-5","pl-5" ,"pb-8","border-base-300", "border" ,"rounded-md" ,"space-y-2");
        p.innerHTML = `
        <h1>${donateValue} Taka ${placeName}</h1>
        <p>Date:${date}</p>
        `
        alert('Donation successfull');
        document.getElementById(historyId).appendChild(p);

        function showModalById(showId,hiddenId){
            document.getElementById(showId).classList.remove('hidden');
            document.getElementById(hiddenId).addEventListener('click',function(){
            document.getElementById(showId).classList.add('hidden');
           
            })
        }
        showModalById('donate-success','donate-done');
    }
    else{
        alert('Your account balance is low!')
    }
    
}

