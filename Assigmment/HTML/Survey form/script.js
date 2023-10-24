// Form submission
const surveyForm = document.getElementById('surveyForm');
surveyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const popup = document.getElementById('popup');
    const popupResults = document.getElementById('popupResults');

    // Collect form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Populate popup with form data
    popupResults.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    // Show the popup
    popup.style.display = 'block';
});

// Popup close button
const closePopup = document.getElementById('closePopup');
closePopup.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    // Reset the form
    surveyForm.reset();
});

// Reset button
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
});
