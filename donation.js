document.getElementById('noakhali').addEventListener('click',function(event){
    event.preventDefault();

    donationValue('inpute-noakhali','balance','donate-noakhali','transaction','place-noakhali');
  
})
document.getElementById('feni').addEventListener('click',function(event){
    event.preventDefault();

    donationValue('input-feni','balance','donate-feni','transaction','place-feni');
       
})
document.getElementById('quota').addEventListener('click',function(event){
    event.preventDefault();

    donationValue('input-quota','balance','donate-quota','transaction','quoata-aid');
       
})
document.getElementById('comilla').addEventListener('click',function(event){
    event.preventDefault();

    donationValue('input-comilla','balance','donate-comilla','transaction','place-comilla');
       
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