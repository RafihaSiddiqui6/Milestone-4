document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const resumeForm = document.getElementById('resumeForm');
    const resumeOutput = document.getElementById('resumeOutput');
    const formElements = resumeForm.elements;
    const outputSections = {
        name: document.createElement('p'),
        email: document.createElement('p'),
        phone: document.createElement('p'),
        qualification: document.createElement('p'),
        experience: document.createElement('p'),
        skills: document.createElement('p')
    };

    function updateResumeOutput() {
        outputSections.name.innerHTML = `<strong>Name:</strong> ${formElements.name.value}`;
        outputSections.email.innerHTML = `<strong>Email:</strong> ${formElements.email.value}`;
        outputSections.phone.innerHTML = `<strong>Phone:</strong> ${formElements.phone.value}`;
        outputSections.qualification.innerHTML = `<strong>Qualification:</strong> ${formElements.qualification.value}`;
        outputSections.experience.innerHTML = `<strong>Experience:</strong> ${formElements.experience.value}`;
        outputSections.skills.innerHTML = `<strong>Skills:</strong> ${formElements.skills.value}`;

        resumeOutput.innerHTML = '';
        for (let key in outputSections) {
            resumeOutput.appendChild(outputSections[key]);
        }
    }

    toggleButton.addEventListener('click', () => {
        if (resumeOutput.style.display === 'none' || resumeOutput.style.display === '') {
            resumeForm.style.display = 'none';
            resumeOutput.style.display = 'block';
            toggleButton.textContent = 'Edit';
            updateResumeOutput();
        } else {
            resumeForm.style.display = 'block';
            resumeOutput.style.display = 'none';
            toggleButton.textContent = 'View';
        }
    });

    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        resumeOutput.style.display = 'block';
        resumeForm.style.display = 'none';
        toggleButton.textContent = 'Edit';
        updateResumeOutput();
    });
});
