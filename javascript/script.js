import { data } from './data.js';


   // Populate Header
    const headerName = document.getElementById("header-name");
    headerName.textContent = data.header.name;

    const headerLinks = data.header.links
        .map(link => `<li><a href="#${link.id}" class="nav-link">${link.label}</a></li>`)
        .join('');
    document.getElementById("header-links").innerHTML = headerLinks;

    // Populate Main Content
    const mainContent = document.getElementById("main-content");

    // Home Section
    const homeSection = `
    <section id="home" class="h-screen flex items-center justify-between px-6 w-full max-w-7xl mx-auto">
        <div class="flex-1">
            <h1 class="text-5xl font-extrabold mb-4">${data.home.name}</h1>
            <p class="text-xl font-light">I am <span id="dynamic-text" class="text-green-400 font-bold typing-text"></span></p>
            <nav class="mt-6">
                <ul class="flex space-x-8">
                    ${data.header.links
                        .map(
                            (link) =>
                                `<li><a href="#${link.id}" class="nav-link">${link.label}</a></li>`
                        )
                        .join('')}
                </ul>
            </nav>
            <div class="flex space-x-4 mt-4">
                ${data.home.socialLinks
                    .map(
                        (link) =>
                            `<a href="${link.url}" target="_blank" class="text-2xl hover:text-green-400">
                                <i class="fa-brands ${link.icon}"></i>
                            </a>`
                    )
                    .join('')}
            </div>
        </div>
        <div class="flex-1 flex justify-center">
            <img src="${data.home.image}" alt="Profile Image" class="w-3/4">
        </div>
    </section>`;
    mainContent.insertAdjacentHTML('beforeend', homeSection);


    const aboutSection = `
        <section id="about" class="py-20 px-6 bg-gray-800">
            <div class="w-full max-w-7xl mx-auto  text-left">
                <h1 class="section-title">About</h1>
            </div>
            <div class="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center space-x-0 md:space-x-8 text-white">
                <div class="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                    <img src="${data.about.image}" alt="About Image" class="rounded-lg shadow-lg w-3/4">
                </div>
                <div class="w-full md:w-2/3">
                    <p class="text-lg leading-relaxed mb-4">${data.about.description}</p>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        ${Object.entries(data.about.details).map(([key, value]) => `
                            <p><span class="font-bold text-green-400">${key}:</span> ${value}</p>`).join('')}
                    </div>
                </div>
            </div>
        </section>`;
    mainContent.insertAdjacentHTML('beforeend', aboutSection);

    const interestsSection = `
        <section id="interests" class="py-20 px-6 bg-gray-900">
            <div class="w-full max-w-7xl mx-auto text-left">
                <h1 class="section-title">Interests</h1>
            </div>
            <div class="w-full max-w-7xl mx-auto grid-section mt-8">
                ${data.interests.map(interest => `
                    <div class="grid-item">
                        <i class="fa-solid ${interest.icon} text-2xl flex-shrink-0"></i>
                        <span>${interest.text}</span>
                    </div>`).join('')}
            </div>
        </section>`;
    mainContent.insertAdjacentHTML('beforeend', interestsSection);

    const skillsSection = `
        <section id="skills" class="py-20 px-6 bg-gray-800">
            <div class="w-full max-w-7xl mx-auto text-left">
                <h1 class="section-title">Skills</h1>
            </div>
            <div class="w-full max-w-7xl mx-auto mt-8 space-y-4">
                ${Object.entries(data.skills).map(([category, skills]) => `
                    <div class="skill-category">
                        <span>${category}:</span>
                        <div class="flex flex-wrap">
                            ${skills.map(skill => `<div class="skill-box">${skill}</div>`).join('')}
                        </div>
                    </div>`).join('')}
            </div>
        </section>`;
    mainContent.insertAdjacentHTML('beforeend', skillsSection);

    const educationSection = `
        <section id="education" class="py-20 px-6 bg-gray-900">
            <div class="w-full max-w-7xl mx-auto text-left">
                <h1 class="section-title">Education</h1>
            </div>
            <div class="w-full max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                ${data.education.map(item => `
                    <div class="card">
                        <div class="card-header">
                            <img src="${item.logo}" alt="${item.title} Logo">
                            <h2 class="text-xl font-bold">${item.title}</h2>
                        </div>
                        <div class="card-body">
                            ${item.details.map(detail => `<p>${detail}</p>`).join('')}
                        </div>
                    </div>`).join('')}
            </div>
        </section>`;
    mainContent.insertAdjacentHTML('beforeend', educationSection);

    const contactSection = `
        <section id="contact" class="py-20 px-6 bg-gray-800">
            <div class="w-full max-w-7xl mx-auto text-left">
                <h1 class="section-title">Contact</h1>
            </div>
            <div class="w-full max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card">
                    <div class="card-body">
                        <p><span class="font-bold text-green-400">Email:</span> <a href="mailto:${data.contact.email}" class="text-blue-400 hover:underline">${data.contact.email}</a></p>
                        <p><span class="font-bold text-green-400">Facebook:</span> <a href="${data.contact.facebook}" target="_blank" class="text-blue-400 hover:underline">${data.contact.facebook}</a></p>
                        <p><span class="font-bold text-green-400">Phone:</span> <a href="tel:${data.contact.phone}" class="text-blue-400 hover:underline">${data.contact.phone}</a></p>
                        <p><span class="font-bold text-green-400">GitHub:</span> <a href="${data.contact.github}" target="_blank" class="text-blue-400 hover:underline">${data.contact.github}</a></p>
                        <p><span class="font-bold text-green-400">Address:</span> ${data.contact.address}</p>
                    </div>
                </div>
            </div>
        </section>`;
    mainContent.insertAdjacentHTML('beforeend', contactSection);

    const projectsSection = `
        <section id="projects" class="py-20 px-6 bg-gray-900">
            <div class="w-full max-w-7xl mx-auto text-left">
                <h1 class="section-title">Projects</h1>
            </div>
            <div class="w-full max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                ${data.projects.map(project => `
                    <div class="card">
                        <div class="card-body">
                            <h2 class="text-xl font-bold mb-2">${project.title}</h2>
                            <a href="${project.link}" target="_blank" class="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 mb-4">View Notebook</a>
                            <p class="text-sm mb-2">${project.description}</p>
                            <p class="text-sm mb-2"><span class="font-bold text-green-400">Tasks:</span> ${project.tasks}</p>
                            <p class="text-sm mb-2"><span class="font-bold text-green-400">Tools:</span> ${project.tools}</p>
                            <p class="text-sm mb-2"><span class="font-bold text-green-400">Skills:</span> ${project.skills}</p>
                            <p class="text-sm"><span class="font-bold text-green-400">Outcome:</span> ${project.outcome}</p>
                        </div>
                    </div>`).join('')}
            </div>
        </section>`;
    mainContent.insertAdjacentHTML('beforeend', projectsSection);

    // Typing Animation for Home Section
    const dynamicText = document.getElementById("dynamic-text");
    const texts = data.home.dynamicText;
    let index = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            if (charIndex > 0) {
                dynamicText.textContent = texts[index].substring(0, charIndex - 1);
                charIndex--;
            } else {
                isDeleting = false;
                index = (index + 1) % texts.length;
            }
        } else {
            if (charIndex < texts[index].length) {
                dynamicText.textContent = texts[index].substring(0, charIndex + 1);
                charIndex++;
            } else {
                isDeleting = true;
                setTimeout(typeEffect, 1500); // Pause before deleting
                return;
            }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    typeEffect();

    // Add Navbar Scroll Behavior
    const navBg = document.getElementById('nav-bg');
    const navLinks = document.querySelectorAll('.nav-link');
    const allSections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            navBg.classList.remove('hidden');
        } else {
            navBg.classList.add('hidden');
        }

        // Highlight current section
        let current = '';
        allSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-green-400');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('text-green-400');
            }
        });
    });

    // Add Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    

