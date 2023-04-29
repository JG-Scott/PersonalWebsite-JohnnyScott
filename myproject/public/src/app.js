let projectCards = [...document.querySelectorAll('.projectCard')];


let projectName = document.querySelector('.projectDetails .name');
let projectImage = document.querySelector('.projectDetails .image');
let projectDetails = document.querySelector('.projectDetails .details');
let projectVideo = document.querySelector('.videoSection .video');

let itchBtn = document.querySelector('#itchBtn');
let gitBtn = document.querySelector('#gitBtn');

projectCards.map((project, i) => {
    project.addEventListener('click', () => {
        projectCards.map(card => card.classList.remove('active'));
        project.classList.add('active');

        let data = JSON.parse(project.getAttribute('data-info'));
        setUpInfo(data);
    })
}); 

const setUpInfo = (data) => {
        projectName.innerHTML = data.name;
        projectImage.src = data.imageSingular;
        projectDetails.innerHTML = data.description;
        projectVideo.src = data.video;
        itchBtn.href = data.github;
        gitBtn.href = data.github;
}






const filters = [... document.querySelectorAll('.filterBtn')];

filters.map((btn, i) => {
    btn.addEventListener('click', () => {
        filters.map(item => item.classList.remove('active'));
        btn.classList.add('active');
        console.log(projectCards);
        let tag = btn.getAttribute('data-filter-value');
        projectCards.map(project => {
            if(!project.getAttribute('data-tags').includes(tag)) {
                project.style.display = 'none';
            } else {
                project.style.display = null;
            }
        })
    });

});
setUpInfo(projects[0]);

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(scrollY > 300) {
        navbar.classList.add('bg');

    } else {
        navbar.classList.remove('bg');
    }
})