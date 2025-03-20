const owner = 'adrouser';  // Replace with your GitHub username
const repo = 'testFrontEnd';  // Replace with your repository name
const folder = 'projects';  // The folder where your project HTML files are stored

async function loadProjectTitles() {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${folder}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        const htmlFiles = data.filter(file => file.name.endsWith('.html'));

        const navbar = document.getElementById('navbar');
        navbar.innerHTML = '';

        htmlFiles.forEach((file, index) => {
            const taskNumber = index + 1;
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = `Task ${taskNumber}`;
            link.href = "#";  // Prevent full page reload
            link.addEventListener('click', (event) => {
                event.preventDefault();
                loadProjectContent(file.name, listItem);
            });

            listItem.appendChild(link);
            navbar.appendChild(listItem);
        });

    } catch (error) {
        console.error('Error fetching project files:', error);
        document.getElementById('navbar').innerHTML = '<li>Error loading projects</li>';
    }
}

async function loadProjectContent(project, selectedItem) {
    const contentDiv = document.getElementById('content');
    contentDiv.style.opacity = '0'; // Fade out effect

    try {
        const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${folder}/${project}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load content');

        const data = await response.text();

        // Create a temporary div to parse the HTML and extract scripts
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        // Insert the HTML content first (without scripts)
        contentDiv.innerHTML = tempDiv.innerHTML;

        // Fade in effect
        setTimeout(() => {
            contentDiv.style.opacity = '1';
        }, 200);

        // Execute scripts manually
        executeScripts(tempDiv);

        // Highlight the selected task
        document.querySelectorAll('#navbar li').forEach(li => li.classList.remove('active'));
        selectedItem.classList.add('active');

    } catch (err) {
        contentDiv.innerHTML = "<p>Sorry, there was an error loading the project.</p>";
    }
}

// Function to extract and execute scripts from dynamically loaded content
function executeScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach((script) => {
        const newScript = document.createElement('script');
        if (script.src) {
            newScript.src = script.src;  // Copy the script source if it's an external script
            newScript.async = true;  // Ensure async loading
        } else {
            newScript.textContent = script.textContent;  // Inline script execution
        }
        document.body.appendChild(newScript);
        document.body.removeChild(newScript); // Remove after execution to avoid duplicates
    });
}

// Initialize the page by loading project titles
loadProjectTitles();
