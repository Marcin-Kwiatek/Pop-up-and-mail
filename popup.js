let agreement = 'notaccept'

let notAccepted = document.getElementById("notAccepted")
let accepted = document.getElementById("accepted")
let submitButton = document.getElementById("submitButton")
notAccepted.addEventListener("click", function() { acceptedClick() })
accepted.addEventListener("click", function() { notAcceptedClick() })
submitButton.addEventListener("click", function() { submitClick() })



function acceptedClick() {
    accepted.style.display = 'inline'
    notAccepted.style.display = 'none'
    agreement = 'accept'
}

function notAcceptedClick() {
    notAccepted.style.display = 'inline'
    accepted.style.display = 'none'
    agreement = 'notaccept'
}

function submitClick() {
    let emailInput = document.getElementById("emailInput")
    let nameInput = document.getElementById("nameInput")
    if (emailInput.value === '') { alert('POLE EMAIL NIE MOŻE BYĆ PUSTE') } else if (nameInput.value === '') { alert('POLE IMIĘ NIE MOŻE BYĆ PUSTE') } else if (emailInput.value !== '' && nameInput.value !== '' && agreement === 'accept') {
        let element = document.getElementById('nameInput').value
        window.location.href = 'thankYouPage.html?name=' + element
    } else if (agreement = 'notaccept') { alert('ZAAKCEPTOWANIE ZGODY JEST WYMAGANE') }

}