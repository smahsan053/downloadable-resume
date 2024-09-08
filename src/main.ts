// Function to add a new skill input field
function addSkill(): void {
  const skillsContainer = document.getElementById('skills-container') as HTMLDivElement | null;
  if (skillsContainer) {
    const newSkillInput = document.createElement('input') as HTMLInputElement;
    newSkillInput.type = 'text';
    newSkillInput.className = 'skill-input';
    newSkillInput.placeholder = 'e.g., HTML'; // Placeholder for skill input
    skillsContainer.appendChild(newSkillInput);
  } else {
    console.error('Skills container not found');
  }
}

// Function to add a new hobby input field
function addHobby(): void {
  const hobbiesContainer = document.getElementById('hobbies-container') as HTMLDivElement | null;
  if (hobbiesContainer) {
    const newHobbyInput = document.createElement('input') as HTMLInputElement;
    newHobbyInput.type = 'text';
    newHobbyInput.className = 'hobby-input';
    newHobbyInput.placeholder = 'e.g., Badminton'; // Placeholder for hobby input
    hobbiesContainer.appendChild(newHobbyInput);
  } else {
    console.error('Hobbies container not found');
  }
}

// Function to add a new competency input field
function addCompetency(): void {
  const competenciesContainer = document.getElementById('competencies-container') as HTMLDivElement | null;
  if (competenciesContainer) {
    const newCompetencyInput = document.createElement('input') as HTMLInputElement;
    newCompetencyInput.type = 'text';
    newCompetencyInput.className = 'competency-input';
    newCompetencyInput.placeholder = 'e.g., Ability to work in a fast-paced environment to meet deadlines.';
    competenciesContainer.appendChild(newCompetencyInput);
  } else {
    console.error('Competencies container not found');
  }
}

// Function to handle double-click to toggle content editable
function addEditableListeners(): void {
  const editables = document.querySelectorAll('.editable');

  editables.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
      const target = event.target as HTMLElement;
      if (target.getAttribute('contenteditable') === 'true') {
        target.setAttribute('contenteditable', 'false');
        target.classList.remove('editable');
        target.classList.add('non-editable');
      } else {
        target.setAttribute('contenteditable', 'true');
        target.classList.remove('non-editable');
        target.classList.add('editable');
      }
    });

    element.addEventListener('blur', (event) => {
      const target = event.target as HTMLElement;
      target.setAttribute('contenteditable', 'false');
      target.classList.remove('editable');
      target.classList.add('non-editable');
    });
  });
}
// Function to generate a unique URL (simulated)
function generateUniqueURL(username: string): string {
  return `https://${username}.vercel.app/resume`;
}

// Function to handle resume download as PDF
function downloadResumeAsPDF(): void {
  const resumeOutput = document.getElementById('resume-output') as HTMLDivElement | null;
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
    pdfWindow?.document.write(`
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
    pdfWindow?.document.close();
    pdfWindow?.focus();
    pdfWindow?.print();  // Trigger the print dialog to save as PDF
  } else {
    console.error('Resume output container not found');
  }
}


// Function to handle resume generation, unique URL, and additional functionalities
function generateResume(): void {
  const form = document.getElementById('resume-form') as HTMLFormElement | null;
  const resumeOutput = document.getElementById('resume-output') as HTMLDivElement | null;

  if (form && resumeOutput) {
    const formData = new FormData(form);

    // Extracting form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const profilePic = formData.get('profile-pic') as string;
    const degree = formData.get('degree') as string;
    const duration = formData.get('duration') as string;
    const institution = formData.get('institution') as string;
    const jobTitle = formData.get('job-title') as string;
    const jobDuration = formData.get('job-duration') as string;
    const company = formData.get('company') as string;
    const jobDescription = formData.get('job-description') as string;
    const projectName = formData.get('project-name') as string;
    const projectDescription = formData.get('project-description') as string;
    const references = formData.get('references') as string;
    const username = formData.get('username') as string; // Added for URL generation

    // Extracting dynamic fields
    const skills = Array.from(document.querySelectorAll('.skill-input'))
      .map(input => (input as HTMLInputElement).value)
      .filter(value => value.trim() !== '');

    const hobbies = Array.from(document.querySelectorAll('.hobby-input'))
      .map(input => (input as HTMLInputElement).value)
      .filter(value => value.trim() !== '');

    const competencies = Array.from(document.querySelectorAll('.competency-input'))
      .map(input => (input as HTMLInputElement).value)
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


    // Generate unique URL and display it
    const uniqueURL = generateUniqueURL(username);

    const urlElement = document.getElementById('unique-url') as HTMLParagraphElement | null;
    if (urlElement) {
      urlElement.textContent = `Your resume can be viewed at: ${uniqueURL}`;
    }

    // Add event listeners for making fields editable on double-click
    addEditableListeners();
  } else {
    console.error('Form or resume output container not found');
  }
}

// Add event listeners for new buttons
document.getElementById('share-button')?.addEventListener('click', () => {
  const urlElement = document.getElementById('unique-url') as HTMLParagraphElement | null;
  
  if (urlElement) {
    navigator.clipboard.writeText(urlElement.textContent || '')
      .then(() => alert('Resume URL copied to clipboard'))
      .catch(err => console.error('Failed to copy URL: ', err));
  }
});

document.getElementById('download-resume')?.addEventListener('click', () => {
  downloadResumeAsPDF();
});

// Add event listener to handle form submission
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  generateResume();
});

// global exposure to functions
(window as any).addSkill = addSkill;
(window as any).addHobby = addHobby;
(window as any).addCompetency = addCompetency;
