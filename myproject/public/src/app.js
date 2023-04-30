
let width = screen.width;
const projectInfo = document.querySelector('#projectInfo');
//change project section when below 992
if(width >= 992) {
    console.log(width)
    projectInfo.innerHTML = `<div class="projectDetails">
          <div class="imageVideo">
            <img src="static/squaredyCat.png" class="image" alt="" />
            <iframe
              class="video"
              src="https://www.youtube.com/embed/PJ9JRmcD2h0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h2 class="name">Project name</h2>
          <p class="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            atque nulla, distinctio neque qui repellat sequi quasi asperiores
            iste. Atque rerum magnam suscipit nam nulla perspiciatis ratione
            vitae. Dicta, cupiditate.
          </p>
          <div class="btnGroup">
            <a href="#" target="_blank" class="btn light" id="gitBtn">GitHub</a>
            <a href="#" target="_blank" class="btn transparent" id="itchBtn"
              >Itch.io</a
            >
          </div>
        </div>`
} else {
    projectInfo.innerHTML=`        <div class="projectDetails">
          <div class="imageDescription">
            <img src="static/squaredyCat.png" class="image" alt="" />
            <h2 class="name">Project name</h2>
            <p class="details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              atque nulla, distinctio neque qui repellat sequi quasi asperiores
              iste. Atque rerum magnam suscipit nam nulla perspiciatis ratione
              vitae. Dicta, cupiditate.
            </p>
          </div>
          <div class="btnGroup">
            <a href="#" target="_blank" class="btn light" id="gitBtn">GitHub</a>
            <a href="#" target="_blank" class="btn transparent" id="itchBtn"
              >Itch.io</a
            >
          </div>
          <div class="videoSection">
            <iframe
              class="video"
              src="https://www.youtube.com/embed/PJ9JRmcD2h0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>`;
}








let projectCards = [...document.querySelectorAll('.projectCard')];


let projectName = document.querySelector('.projectDetails .name');
let projectImage = document.querySelector('.projectDetails .image');
let projectDetails = document.querySelector('.projectDetails .details');
let projectVideo = document.querySelector('.videoSection .video');

let itchBtn = document.querySelector('#itchBtn');
let gitBtn = document.querySelector('#gitBtn');


console.log(projectName);














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

const toggleBtn = document.querySelector('.toggleBtn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('active');
});


