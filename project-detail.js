// Project Detail Page Logic
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get('id')) || 1;
    
    const project = projects[projectId];
    
    if (project) {
        // Set page title
        document.title = `${project.title} - Leonardo Li`;
        
        // Set project details
        document.getElementById('projectBadge').textContent = project.badge;
        document.getElementById('projectBadge').className = `project-badge ${project.badgeClass}`;
        document.getElementById('projectTitle').textContent = project.title;
        document.getElementById('projectSubtitle').textContent = project.subtitle;
        document.getElementById('projectOverview').textContent = project.overview;
        document.getElementById('projectChallenge').textContent = project.challenge;
        document.getElementById('projectSolution').textContent = project.solution;
        document.getElementById('projectResults').textContent = project.results;
        
        // Set achievements
        const achievementsList = document.getElementById('projectAchievements');
        project.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            achievementsList.appendChild(li);
        });
        
        // Set tools
        const toolsList = document.getElementById('projectTools');
        project.tools.forEach(tool => {
            const toolTag = document.createElement('span');
            toolTag.className = 'tool-tag';
            toolTag.textContent = tool;
            toolsList.appendChild(toolTag);
        });
        
        // Set hero image based on project
        setProjectHeroImage(projectId);
        
        // Load related projects
        loadRelatedProjects(projectId);
    }
});

function setProjectHeroImage(projectId) {
    const svgElement = document.getElementById('projectHeroImage');
    
    const svgContent = {
        1: `<defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#F0E5FF;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#E8D5FF;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#grad1)"/>
        <rect x="200" y="50" width="400" height="300" rx="20" fill="#5B4DFF" opacity="0.15"/>
        <circle cx="400" cy="200" r="80" fill="#5B4DFF" opacity="0.2"/>
        <circle cx="700" cy="200" r="60" fill="#5B4DFF" opacity="0.15"/>
        <text x="600" y="220" font-family="Inter" font-size="32" font-weight="600" text-anchor="middle" fill="#5B4DFF">Smart Textile Interface</text>`,
        
        2: `<defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#E8F5E9;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#C8E6C9;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#grad2)"/>
        <path d="M 600 80 L 800 150 L 750 300 L 450 300 L 400 150 Z" fill="#5B4DFF" opacity="0.2"/>
        <rect x="300" y="200" width="600" height="150" rx="10" fill="#5B4DFF" opacity="0.1"/>
        <text x="600" y="220" font-family="Inter" font-size="32" font-weight="600" text-anchor="middle" fill="#22c55e">Universal Design Platform</text>`,
        
        3: `<defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FCE4EC;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#F8BBD0;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#grad3)"/>
        <polygon points="600,80 850,150 800,300 400,300 350,150" fill="#5B4DFF" opacity="0.15"/>
        <circle cx="600" cy="200" r="70" fill="none" stroke="#5B4DFF" stroke-width="3" opacity="0.2"/>
        <text x="600" y="220" font-family="Inter" font-size="32" font-weight="600" text-anchor="middle" fill="#ec4899">Immersive Data Visualization</text>`,
        
        4: `<defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FFF3E0;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFE0B2;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#grad4)"/>
        <circle cx="400" cy="200" r="70" fill="#5B4DFF" opacity="0.1"/>
        <circle cx="600" cy="200" r="80" fill="#5B4DFF" opacity="0.15"/>
        <circle cx="800" cy="200" r="70" fill="#5B4DFF" opacity="0.1"/>
        <path d="M 400 100 Q 410 200 400 300 M 600 100 Q 610 200 600 300 M 800 100 Q 810 200 800 300" stroke="#5B4DFF" stroke-width="2" fill="none" opacity="0.2"/>
        <text x="600" y="220" font-family="Inter" font-size="32" font-weight="600" text-anchor="middle" fill="#FF9800">Voice-Driven Interface</text>`,
        
        5: `<defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#E0F2F1;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#B2DFDB;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#grad5)"/>
        <rect x="250" y="80" width="80" height="200" fill="#5B4DFF" opacity="0.15"/>
        <rect x="420" y="60" width="80" height="220" fill="#5B4DFF" opacity="0.2"/>
        <rect x="590" y="100" width="80" height="180" fill="#5B4DFF" opacity="0.15"/>
        <rect x="760" y="80" width="80" height="200" fill="#5B4DFF" opacity="0.18"/>
        <text x="600" y="330" font-family="Inter" font-size="32" font-weight="600" text-anchor="middle" fill="#009688">Health Tracking Dashboard</text>`,
        
        6: `<defs>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#F3E5F5;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#E1BEE7;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#grad6)"/>
        <circle cx="350" cy="200" r="50" fill="#5B4DFF" opacity="0.15"/>
        <circle cx="600" cy="200" r="60" fill="#5B4DFF" opacity="0.2"/>
        <circle cx="850" cy="200" r="50" fill="#5B4DFF" opacity="0.15"/>
        <path d="M 350 150 L 600 100 L 850 150 L 850 250 L 600 300 L 350 250 Z" fill="#5B4DFF" opacity="0.08"/>
        <text x="600" y="220" font-family="Inter" font-size="32" font-weight="600" text-anchor="middle" fill="#9C27B0">Gesture Recognition System</text>`
    };
    
    if (svgContent[projectId]) {
        svgElement.innerHTML = svgContent[projectId];
    }
}

function loadRelatedProjects(currentProjectId) {
    const relatedContainer = document.getElementById('relatedProjects');
    const projectIds = [1, 2, 3, 4, 5, 6].filter(id => id !== currentProjectId);
    const selectedIds = projectIds.slice(0, 3); // Show 3 related projects
    
    selectedIds.forEach(id => {
        const project = projects[id];
        const card = document.createElement('div');
        card.className = 'related-card';
        card.innerHTML = `
            <div class="card-image">
                <div class="card-placeholder"></div>
                <span class="badge ${project.badgeClass}">${project.badge}</span>
            </div>
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.subtitle}</p>
                <a href="project-detail.html?id=${id}" class="view-project">View Project →</a>
            </div>
        `;
        relatedContainer.appendChild(card);
    });
}
