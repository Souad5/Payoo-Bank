document.getElementById("btn-login").addEventListener("click",function(event){
    event.preventDefault();
    const account = document.getElementById("mobile-nmbr").value ;
    const accountNumber = parseInt(account);
    const pin = document.getElementById("pin-num").value ;
    const convertedPin = parseInt(pin);

    if(account.length === 11 ){
        if(convertedPin === 1234){
            window.location.href = "./secondpage.html"
            document.getElementById("add-money").style.display = "none"
        }else{
            alert("Pin nai")
        }
    }else{
        alert('Retry')
    }
})
