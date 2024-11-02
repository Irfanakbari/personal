const COMMANDS = [
    {
        command: "about",
        description: "About Me",
    },
    {
        command: "education",
        description: "My Education",
    },
    {
        command: "skills",
        description: "My Tech Skills",
    },
    // {
    //     command: "projects",
    //     description: "My Tech Projects",
    // },
    {
        command: "resume",
        description: "My Resume",
    },
    {
        command: "contact",
        description: "Contact Me",
    },
    {
        command: "linkedin",
        description: "Visit my linkeding",
    },
    {
        command:
        // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
            "clear",
        description: "Clear terminal",
    },
];

const getProjects = async () => {
    const projects = await (await fetch("/api/projects")).json();
    return `<h3>My Projects (You can scroll)</h3>` +
        projects
            .map(
                (project: any) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
                    project.name
                }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
            )
            .join("");
};

const getContacts = async () => {
    // const contactMediums = await (await fetch("/api/contacts")).json();
    return  `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">Email : irfan.akbarihabibi@gmail.com</p>
      <p style="font-size: 15px">Github : irfanakbari18</p>
    </div>`
};

export const CONTENTS = {
    help: () =>
        COMMANDS.map(
            (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
        ).join("") +
        `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
    about: () => `My name is Irfan. I am ${getAge(
        "October 18, 2002"
    )} and I\'m a fullstack developer, prefered in backend development
    <br/><br/>
    I love coding in Javascript, Typescript and Python, and have worked with frameworks like ReactJS, Express, and Flask. I currently use NextJS, NestJS, and Flutter in a lot of my projects.
    <br /><br />
    I am a System Developer of <a href="https://vuteq.co.id" target="_blank">Vuteq Group</a> ('24-now). I am a freshman at <a href="https://usu.ac.id" target="_blank">University of North Sumatera</a>.
    <br />
    I am also the Freelance at the <a href="https://glints.com" target="_blank">Glints</a>, <a href="https://upwork.com" target="_blank">Upwork</a>. I am a cloud computing mentor of <a href="https://bangkit.academy" target="_new">Bangkit Academy</a>
  `,
    education:
        () => `I am a freshman at <a href="https://usu.ac.id" target="_blank">University of North Sumatera, Indonesia, specially in Computer Science</a>.`,
    skills: () => `
  I am experienced with Javascript, Typescript and Python, backend technologies, and web technologies dominating at the time:<br />
  <div class="skill"><b>core</b>: HTML, CSS, Node.js and Typescript<br /></div>
  <div class="skill"><b>frameworks</b>: React, NextJS, Express and Flask<br /></div>
  <div class="skill"><b>database</b>: MongoDB, MySQL, and SQLite<br /></div>
  I also have knowledge of basic shell scripting, networking, security, and cloud computing.
<br /><br />
  I also have experience with Mobile Development with Flutter.
  `,
    projects: getProjects,
    contact: getContacts,
    resume: () => {
        window.open("https://kavin.me/resume.pdf", "_blank");
        return "";
    },
    error: (input: any) =>
        `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
    linkedin: () => {
        window.open("https://linkedin.com/in/irfanakbarihabibi", "_blank");
        return "";
    },
};

function getAge(dateString: any) {
    const today = new Date();
    const birthDate = new Date(dateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

    return age;
}