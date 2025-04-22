// Script to load portfolio data from JSON and render into the page
fetch('js/portfolio.json')
  .then(response => response.json())
  .then(data => {
    // Ganti nama dan bio di header (jika ingin dinamis)
    const title = document.getElementById('site-title');
    const subtitle = document.getElementById('site-title2');
    if(title) title.textContent = data.name;
    if(subtitle) subtitle.textContent = 'Portfolio';

    // Render bio di modal about-me (jika ingin dinamis)
    const aboutModal = document.querySelector('.about-me h2');
    const aboutBio = document.querySelector('.about-me h4');
    if(aboutModal) aboutModal.textContent = `HELLO MY NAME IS ${data.name.toUpperCase()}.`;
    if(aboutBio) aboutBio.textContent = data.bio;

    // Render project list (contoh, sesuaikan dengan struktur HTML Anda)
    const projectsSection = document.getElementById('projectspage');
    if(projectsSection && data.projects) {
      let html = '';
      data.projects.forEach((project, idx) => {
        html += `<div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">Lihat Proyek</a>
        </div><hr/>`;
      });
      projectsSection.innerHTML = html;
    }
  });
