
let width = screen.width;
const projectInfo = document.querySelector('#projectInfo');
//change project section when below 992
if(width >= 992) {
    console.log(width)
    projectInfo.innerHTML = `<div class="projectDetails">
          <div class="imageVideo">
            <img src="static/squaredyCat.png" class="image" alt="" />
                       <div style="width: 100%; max-width: 550px">
              <div
                style="
                  position: relative;
                  padding-bottom: 56.15%;
                  height: 0;
                  overflow: hidden;
                "
              >
                <iframe
                  style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                  "
                  loading="lazy"
                  ;
                  class="video"
                  src=""
                  srcdoc="<style>
          * {
          padding: 0;
          margin: 0;
          overflow: hidden;
          }
          
          body, html {
            height: 100%;
          }
          
          img, svg {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          
          svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
            transition: all 250ms ease-in-out;
          }
          
          body:hover svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
            transform: scale(1.2);
          }
        </style>
        <a  href=''>
          <img src='https://img.youtube.com/vi/PJ9JRmcD2h0/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>
          <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
        </a>
        "
                  title="Coffee Recipe Javascript Project"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </div>
            </div>
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
                        <div style="width: 100%; max-width: 550px">
              <div
                style="
                  position: relative;
                  padding-bottom: 56.15%;
                  height: 0;
                  overflow: hidden;
                "
              >
                <iframe
                  style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                  "
                  loading="lazy"
                  ;
                  class="video"
                  src=""
                  srcdoc="<style>
          * {
          padding: 0;
          margin: 0;
          overflow: hidden;
          }
          
          body, html {
            height: 100%;
          }
          
          img, svg {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          
          svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
            transition: all 250ms ease-in-out;
          }
          
          body:hover svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
            transform: scale(1.2);
          }
        </style>
        <a  href=''>
          <img src='https://img.youtube.com/vi/PJ9JRmcD2h0/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>
          <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
        </a>
        "
                  title="Coffee Recipe Javascript Project"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>`;
}








let projectCards = [...document.querySelectorAll('.projectCard')];


let projectName = document.querySelector('.projectDetails .name');
let projectImage = document.querySelector('.projectDetails .image');
let projectDetails = document.querySelector('.projectDetails .details');
let projectVideo = document.querySelector(' .video');

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
        if(screen.width <= 732) {
            projectImage.src = data.imageGallery;

        } else {
            projectImage.src = data.imageSingular;
        }
        projectDetails.innerHTML = data.description;
        projectVideo.src = data.video;
        projectVideo.srcdoc=`<style>
          * {
          padding: 0;
          margin: 0;
          overflow: hidden;
          }
          
          body, html {
            height: 100%;
          }
          
          img, svg {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          
          svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
            transition: all 250ms ease-in-out;
          }
          
          body:hover svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
            transform: scale(1.2);
          }
        </style>
        <a  href='https://www.youtube.com/embed/${data.videoCode}${data.extra}'>
          <img src='https://img.youtube.com/vi/${data.videoCode}/hqdefault.jpg' alt='${data.name}'>
          <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
        </a>`;
        projectVideo.title = data.name;
        if(data.itchio == '') {
          console.log('this is runnig');
          itchBtn.style.display = 'none';
        } else {
          itchBtn.style.display = 'block';
          itchBtn.href = data.itchio;
        }

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



// send emails 
const serviceID = "service_2cc3ga1"

const emailTemplate = "template_refrswc"

function sendEmails(){
  var params = {
    name: document.getElementById('senderName').value,
    email: document.getElementById('senderEmail').value,
    subject: document.getElementById('senderSubject').value,
    message: document.getElementById('senderMessage').value,
  }

  if(params.name.trim() == "" || params.email.trim() == "" || params.subject.trim() == "" || params.message.trim() == ""){
    alert("Please fill out all fields before sending message.");
  } else {
  emailjs.send(serviceID,emailTemplate, params).then(
  res => {
    document.getElementById('senderName').value = "";
    document.getElementById('senderSubject').value = "";
    document.getElementById('senderEmail').value = "";
    document.getElementById('senderMessage').value = "";
    console.log(res);
    alert("Email sent!");
  }
).catch((err) => console.log(err));
  }
}





