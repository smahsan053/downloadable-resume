# Downloadable Resume

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Overview

A web app that lets users create and customize their resumes with real-time editing. Users can dynamically add skills, hobbies, and competencies and directly edit the resume content by double-clicking.

This project is ideal for individuals looking to quickly generate a resume with minimal effort, while still ensuring that the end product is polished and professional.

## Features

- **User-friendly Interface**: Easy-to-use form fields for adding personal and professional details.
- **Dynamic Input Fields**: Ability to dynamically add multiple skills, hobbies, and competencies.
- **Real-time Preview**: View the generated resume immediately after filling out the form.
- **Editable Sections**: Double-click on any section of the generated resume to edit it directly on the page.
- **Responsive Design**: The application is fully responsive, ensuring a seamless experience across devices.
- **Print Resume**: Option to download the resume as a PDF by using the print dialog.
- **Theming**: Customize the look and feel of the resume with different themes and styles.
- **Unique URL Generation**: Generates a unique URL for each resume based on the user’s username.
- **Shareable Link**: Allows users to share their resume via a unique link.
- **Downloadable Resume**: Users can download their resume as a PDF.

## Technologies Used

- **HTML**: The structure of the application.
- **CSS**: Custom styling to enhance the visual appeal.
- **TypeScript**: Type-safe scripting language used for DOM manipulation and logic.
- **JavaScript**: Browser-compatible code generated from TypeScript.

## Live Demo

The resume is deployed and can be viewed live at: [Interactive Resume on Vercel](https://downloadable-resume.vercel.app/)

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/smahsan053/downloadable-resume.git
   cd downloadable-resume
   ```

2. **Install Dependencies:**
   Since the project is based on vanilla HTML, CSS, and TypeScript, there are no dependencies to install. However, if you plan on modifying the TypeScript code, ensure you have Node.js installed and then install TypeScript:

   ```bash
   npm install -g typescript
   ```

3. **Compile TypeScript:**
   If you have made changes to the `.ts` files, compile them to JavaScript:
   ```bash
   tsc
   ```

## Usage

To use the Dynamic Resume:

1. Open the `index.html` file in your browser.
2. Fill out the form with your personal and professional information.
3. Use the "Add Skill," "Add Hobby," and "Add Competency" buttons to dynamically add multiple inputs.
4. Click the "Generate Resume" button to preview your resume.
5. The resume will be displayed on the same page in a formatted style.
6. Double-click on any section of the generated resume to make it editable directly on the page.
7. Unique URL Generation: When creating a resume, a unique URL is generated based on the user's username, e.g., username.vercel.app/resume.
8. Shareable Link: Share your resume via the generated unique link.
9. Use the "Download Resume" button to save the resume as a PDF.

## Folder Structure

├── public
│ ├── index.html
│ ├── styles.css
│ ├── dist
│ │ └── main.js
└── src
├── main.ts

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Inspired by modern web design trends and best practices.
- Built during a hackathon event focused on creating interactive resumes.

---

**Note:** This project is a part of a hackathon and was developed under specific constraints and guidelines. Feel free to explore and expand upon it as needed!

# downloadable-resume
