const owner = 'peethani93';  // Replace with your GitHub username
const repo = 'myportfolio';  
const folder = 'projects';  // The folder where your project HTML files are stored

function loadContent(page) {
    let content = '';
    document.getElementById("projects-nav").style.left = "-250px"; // Hide the side-nav
    document.getElementById('main-container').style.marginLeft = "0";

    if (page === 'home') {
        content = '<h1>Welcome to My Portfolio</h1><p>This is a brief introduction about myself and my work.</p>';
    } else if (page === 'about') {
        content = '<h1>About Me</h1><p>I am a passionate web developer with experience in creating modern, dynamic websites and web applications.</p>';
    } else if (page === 'projects') {
        content = '<h1>Projects</h1><p>Click below to see details of my work.</p>';
        document.getElementById("projects-nav").style.left = "0"; // Show the side-nav
        loadProjectTitles(); // Fetch files from GitHub and populate side-nav
        document.getElementById('main-container').style.marginLeft = "250px";
    }

    document.getElementById('content').innerHTML = content;
    history.pushState({ page: page }, page, `#${page}`);
}
async function loadProjectTitles() {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${folder}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        const htmlFiles = data.filter(file => file.name.toLowerCase().endsWith('.html'));

        const navbar = document.getElementById('projects-nav');
        navbar.innerHTML = '';

        htmlFiles.forEach((file, index) => {
            const taskNumber = index + 1;
            const listItem = document.createElement('a');
            listItem.textContent = `Task ${taskNumber}`;
            listItem.href = "#";
            listItem.classList.add("task-item"); // Add a class for styling
            listItem.dataset.taskName = file.name; // Store task name for comparison

            listItem.addEventListener('click', (event) => {
                event.preventDefault();
                loadProjectContent(file.name);
                setActiveTask(listItem);
            });

            navbar.appendChild(listItem);
        });

    } catch (error) {
        console.error('Error fetching project files:', error);
        document.getElementById('projects-nav').innerHTML = '<p>Error loading projects</p>';
    }
}

function setActiveTask(selectedTask) {
    // Remove active class from all tasks
    document.querySelectorAll(".task-item").forEach(task => {
        task.classList.remove("active");
    });

    // Add active class to the selected task
    selectedTask.classList.add("active");
}


/** async function loadProjectTitles() {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${folder}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        const htmlFiles = data.filter(file => file.name.toLowerCase().endsWith('.html'));

        const navbar = document.getElementById('projects-nav');
        navbar.innerHTML = '';

        htmlFiles.forEach((file, index) => {
            const taskNumber = index + 1;
            const listItem = document.createElement('a');
            listItem.textContent = `Task ${taskNumber}`;
            listItem.href = "#";
            listItem.addEventListener('click', (event) => {
                event.preventDefault();
                loadProjectContent(file.name);
            });

            navbar.appendChild(listItem);
        });

    } catch (error) {
        console.error('Error fetching project files:', error);
        document.getElementById('projects-nav').innerHTML = '<p>Error loading projects</p>';
    }
} **/

async function loadProjectContent(project) {
    const contentDiv = document.getElementById('content');
    contentDiv.style.opacity = '0';

    try {
        const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${folder}/${project}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load content');

        const data = await response.text();

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        contentDiv.innerHTML = tempDiv.innerHTML;

        loadAssociatedResources(project);

        setTimeout(() => {
            contentDiv.style.opacity = '1';
        }, 200);

    } catch (err) {
        contentDiv.innerHTML = "<p>Sorry, there was an error loading the project.</p>";
    }
}

async function loadAssociatedResources(projectName) {
   // await loadGlobalCSS(); // Ensure CSS loads first

    const baseName = projectName.replace('.html', '');
    const jsFilePath = `https://raw.githubusercontent.com/${owner}/${repo}/main/js/${baseName}.js`;

    console.log(`Loading JS: ${jsFilePath}`);

    // Remove previous script if it exists
    const existingScript = document.querySelector("#dynamic-js");
    if (existingScript) {
        console.log("Removing previous script:", jsFilePath);
        existingScript.remove();
    }

    // Fetch & execute JS dynamically
    try {
        const response = await fetch(jsFilePath);
        if (!response.ok) throw new Error(`Failed to fetch ${jsFilePath}`);

        const scriptText = await response.text();
        const scriptElement = document.createElement("script");
        scriptElement.id = "dynamic-js";  // Ensure only one script exists
        scriptElement.textContent = scriptText;
        document.body.appendChild(scriptElement);

        console.log(`Executed JS from: ${jsFilePath}`);
    } catch (error) {
        console.error(`Error loading JS: ${jsFilePath}`, error);
    }
}

async function loadGlobalCSS() {
    const cssFilePath = `https://raw.githubusercontent.com/${owner}/${repo}/main/css/task3.css`;
    
    // Check if CSS is already loaded
    if (document.querySelector("#global-css")) {
        console.log("Global CSS already loaded.");
        return;
    }

    try {
        const response = await fetch(cssFilePath);
        if (!response.ok) throw new Error(`Failed to fetch CSS: ${cssFilePath}`);

        const cssText = await response.text();
        const styleTag = document.createElement("style");
        styleTag.id = "global-css";
        styleTag.textContent = cssText;
        document.head.appendChild(styleTag);

        console.log(`Loaded global CSS from: ${cssFilePath}`);
    } catch (error) {
        console.error(`Error loading CSS: ${cssFilePath}`, error);
    }
}



window.addEventListener('popstate', (event) => {
    if (event.state) {
        loadContent(event.state.page);
    }
});

window.onload = () => {
    if (!window.location.hash) {
        loadContent('home');
    } else {
        loadContent(window.location.hash.slice(1));
    }
};
