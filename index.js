let usersFirstName = document.getElementById("firstName")
let usersEmailAddress = document.getElementById("emailAddress")
let mainContent = document.getElementById("Main-Content")

let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    let userFirstName = usersFirstName.value
    let userEmailAddress = usersEmailAddress.value
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
    mainContent.innerHTML = updatedHtmlContent
})