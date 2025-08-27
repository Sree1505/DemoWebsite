let initialForm = document.getElementById('initialForm');
let initialFormContainer = document.getElementById('initialFormContainer');

// Adding cookies function
function saveFormData(firstName, email, password) {
    // Combine all fields into a single string with a delimiter
    let dataString = `${firstName}|${email}|${password}`;
    setCookie('formData', dataString);
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        let cookieValue = parts.pop().split(';').shift();
        // Split the string back into an array of values
        return cookieValue.split('|');
    }
}

function setCookie(name, value, days = 30) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

initialForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;

    let newFormContainer = document.createElement('div');
    newFormContainer.className = 'new-form-container';

    //new form
    newFormContainer.innerHTML = `
    <h2>Welcome, ${firstName}!</h2>
    <p>Please update your details to complete the form</p>
        
    <form id="secondaryForm">

    <label for ="email">Email</label><br/>
    <input type="email" id ="email" required><br/>

    <label for ="password">Password</label><br/>
    <input type="password" id ="password" required><br/>

    <button type="submit">Complete Sign Up Form</button>

</form>
`;
    document.body.prepend(newFormContainer);

    initialFormContainer.style.display = 'none';


    //adding to newly created form
    let secondaryForm = document.getElementById('secondaryForm');
    secondaryForm.addEventListener('submit', function (e) {

        e.preventDefault();

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        alert('Congralutions! Your account is created');
    });
});

let toggleButton = document.getElementById('toggleDarkMode');

if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('darkmode');

        if (document.body.classList.contains('darkmode')) {
            toggleButton.textContent = 'Switch to light Mode';
        } else {
            toggleButton.textContent = 'Switch to Dark Mode';
        }

    });
}
