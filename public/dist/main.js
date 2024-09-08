"use strict";
var _a, _b, _c;
function addSkill() {
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        const newSkillInput = document.createElement('input');
        newSkillInput.type = 'text';
        newSkillInput.className = 'skill-input';
        newSkillInput.placeholder = 'e.g., HTML';
        skillsContainer.appendChild(newSkillInput);
    }
    else {
        console.error('Skills container not found');
    }
}
function addHobby() {
    const hobbiesContainer = document.getElementById('hobbies-container');
    if (hobbiesContainer) {
        const newHobbyInput = document.createElement('input');
        newHobbyInput.type = 'text';
        newHobbyInput.className = 'hobby-input';
        newHobbyInput.placeholder = 'e.g., Badminton';
        hobbiesContainer.appendChild(newHobbyInput);
    }
    else {
        console.error('Hobbies container not found');
    }
}
function addCompetency() {
    const competenciesContainer = document.getElementById('competencies-container');
    if (competenciesContainer) {
        const newCompetencyInput = document.createElement('input');
        newCompetencyInput.type = 'text';
        newCompetencyInput.className = 'competency-input';
        newCompetencyInput.placeholder = 'e.g., Ability to work in a fast-paced environment to meet deadlines.';
        competenciesContainer.appendChild(newCompetencyInput);
    }
    else {
        console.error('Competencies container not found');
    }
}
function addEditableListeners() {
    const editables = document.querySelectorAll('.editable');
    editables.forEach((element) => {
        element.addEventListener('dblclick', (event) => {
            const target = event.target;
            if (target.getAttribute('contenteditable') === 'true') {
                target.setAttribute('contenteditable', 'false');
                target.classList.remove('editable');
                target.classList.add('non-editable');
            }
            else {
                target.setAttribute('contenteditable', 'true');
                target.classList.remove('non-editable');
                target.classList.add('editable');
            }
        });
        element.addEventListener('blur', (event) => {
            const target = event.target;
            target.setAttribute('contenteditable', 'false');
            target.classList.remove('editable');
            target.classList.add('non-editable');
        });
    });
}
function generateUniqueURL(username) {
    return `https://${username}.vercel.app/resume`;
}
function downloadResumeAsPDF() {
    const resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        const htmlContent = resumeOutput.innerHTML;
        const styles = `
      .resume {
        font-family: Arial, sans-serif;
        margin: 20mm;
      }
      .resume-title {
        font-size: 24px;
        text-align: center;
      }
      .section {
        margin-bottom: 20px;
      }
      .editable {
        border: 1px dashed #000;
        padding: 2px;
      }
      .profile-pic {
        max-width: 100px;
        height: auto;
        display: block;
        margin: 0 auto;
      }
      .list {
        list-style-type: disc;
        margin-left: 20px;
      }
      @media print {
        body {
          margin: 0;
          padding: 0;
        }
        .resume {
          margin: 0;
        }
        .profile-pic {
          max-width: 80px;
        }
        .list {
          margin-left: 10px;
        }
      }
    `;
        const pdfWindow = window.open('', '_blank');
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.write(`
      <html>
        <head>
          <title>Resume</title>
          <style>
            ${styles}
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `);
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.close();
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.focus();
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.print();
    }
    else {
        console.error('Resume output container not found');
    }
}
function generateResume() {
    const form = document.getElementById('resume-form');
    const resumeOutput = document.getElementById('resume-output');
    if (form && resumeOutput) {
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const profilePic = formData.get('profile-pic');
        const degree = formData.get('degree');
        const duration = formData.get('duration');
        const institution = formData.get('institution');
        const jobTitle = formData.get('job-title');
        const jobDuration = formData.get('job-duration');
        const company = formData.get('company');
        const jobDescription = formData.get('job-description');
        const projectName = formData.get('project-name');
        const projectDescription = formData.get('project-description');
        const references = formData.get('references');
        const username = formData.get('username');
        const skills = Array.from(document.querySelectorAll('.skill-input'))
            .map(input => input.value)
            .filter(value => value.trim() !== '');
        const hobbies = Array.from(document.querySelectorAll('.hobby-input'))
            .map(input => input.value)
            .filter(value => value.trim() !== '');
        const competencies = Array.from(document.querySelectorAll('.competency-input'))
            .map(input => input.value)
            .filter(value => value.trim() !== '');
        resumeOutput.innerHTML = `
      <div class="resume">
        <h2 class="resume-title">Resume</h2>
        <p class="instruction">Double-click any section to edit.</p> <!-- Instructional Text -->

        <div class="section">
          <h3>Personal Information</h3>
          <p><img src="${profilePic}" alt="Profile Picture" class="profile-pic" /></p>
          <p><strong>Name:</strong> <span class="editable">${name}</span></p>
          <p><strong>Email:</strong> <span class="editable">${email}</span></p>
          <p><strong>Phone:</strong> <span class="editable">${phone}</span></p>
        </div>

        <div class="section">
          <h3>Education</h3>
          <p><strong>Degree:</strong> <span class="editable">${degree}</span></p>
          <p><strong>Duration:</strong> <span class="editable">${duration}</span></p>
          <p><strong>Institution:</strong> <span class="editable">${institution}</span></p>
        </div>

        <div class="section">
          <h3>Work Experience</h3>
          <p><strong>Job Title:</strong> <span class="editable">${jobTitle}</span></p>
          <p><strong>Duration:</strong> <span class="editable">${jobDuration}</span></p>
          <p><strong>Company:</strong> <span class="editable">${company}</span></p>
          <p><strong>Description:</strong> <span class="editable">${jobDescription}</span></p>
        </div>

        <div class="section">
          <h3>Skills</h3>
          <ul class="list">
            ${skills.map(skill => `<li class="editable">${skill}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h3>Projects</h3>
          <p><strong>Project Name:</strong> <span class="editable">${projectName}</span></p>
          <p><strong>Project Description:</strong> <span class="editable">${projectDescription}</span></p>
        </div>

        <div class="section">
          <h3>Hobbies</h3>
          <ul class="list">
            ${hobbies.map(hobby => `<li class="editable">${hobby}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h3>Personal Competencies</h3>
          <ul class="list">
            ${competencies.map(competency => `<li class="editable">${competency}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h3>References</h3>
          <p class="editable">${references}</p>
        </div>
      </div>
    `;
        const shareButton = document.getElementById('share-button');
        const downloadResume = document.getElementById('download-resume');
        if (shareButton) {
            shareButton.style.display = 'block';
        }
        if (downloadResume) {
            downloadResume.style.display = 'block';
        }
        const uniqueURL = generateUniqueURL(username);
        console.log(uniqueURL);
        const urlElement = document.getElementById('unique-url');
        console.log(urlElement);
        if (urlElement) {
            urlElement.textContent = `Your resume can be viewed at: ${uniqueURL}`;
            console.log(urlElement);
        }
        addEditableListeners();
    }
    else {
        console.error('Form or resume output container not found');
    }
}
(_a = document.getElementById('share-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const urlElement = document.getElementById('unique-url');
    if (urlElement) {
        navigator.clipboard.writeText(urlElement.textContent || '')
            .then(() => alert('Resume URL copied to clipboard'))
            .catch(err => console.error('Failed to copy URL: ', err));
    }
});
(_b = document.getElementById('download-resume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    downloadResumeAsPDF();
});
(_c = document.getElementById('resume-form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', (event) => {
    event.preventDefault();
    generateResume();
});
window.addSkill = addSkill;
window.addHobby = addHobby;
window.addCompetency = addCompetency;
