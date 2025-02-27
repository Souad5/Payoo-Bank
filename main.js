document.getElementById("add-money").style.display = "none"
document.getElementById("cash-out").style.display = "none"

document.getElementById("add-money1").addEventListener("click", function(event){
    event.preventDefault()
    document.getElementById("add-money").style.display = "block"
    document.getElementById("welcome-payoo").style.display = "none"
    document.getElementById("cash-out").style.display = "none"
})

document.getElementById("logout").addEventListener("click", function(event){
    event.preventDefault()
    window.location.href = "./index.html"
})
document.getElementById("cash1").addEventListener("click", function(event){
    event.preventDefault()
    document.getElementById("cash-out").style.display = "block"
    document.getElementById("welcome-payoo").style.display = "none"
    document.getElementById("add-money").style.display = "none"
})
