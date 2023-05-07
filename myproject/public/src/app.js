var projectCards;
var projectName;
var projectImage;
var projectDetails;
var projectVideo;
var itchBtn;
var gitBtn;
var skillSection;
var artImage;




let width = screen.width;
const projectInfo = document.querySelector('#projectInfoHolder');
//change project section when below 992
// if(width >= 992) {
//     console.log(width)
//     projectInfo.innerHTML = largeProjectSection;
// } else {
//     projectInfo.innerHTML= smallProjectSection;
// }
const grabHTML = () => {
    projectCards = [...document.querySelectorAll('.projectCard')];
    projectName = document.querySelector('.projectDetails .name');
    projectImage = document.querySelector('.projectDetails .image');
    projectDetails = document.querySelector('.projectDetails .details');
    projectVideo = document.querySelector(' .video');
    itchBtn = document.querySelector('#itchBtn');
    gitBtn = document.querySelector('#gitBtn');
    skillSection = document.querySelector('.skillContainer');
    artImage = document.querySelector('.artImage');
}
grabHTML();

projectCards.map((project, i) => {
    project.addEventListener('click', () => {
        
        projectCards.map(card => card.classList.remove('active'));
        project.classList.add('active');

        let data = JSON.parse(project.getAttribute('data-info'));
        setUpInfo(data);
    })
}); 


const setUpInfo = (data) => {
  console.log("this is running")
  if(data.filter == 'game') {
    handleProjectSection(data);
  } else if(data.filter == 'art') {
    handleArtSection(data);
  }
      
}


const handleProjectSection = (data) => {
  if(width >= 992) {
      console.log(width)
      projectInfo.innerHTML = largeProjectSection;
  } else {
      projectInfo.innerHTML= smallProjectSection;
  }
  grabHTML();
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
        toolList = data.toolsUsed;
        console.log(toolList.split(' '));
        skillSection.innerHTML="";
        toolList.split(' ').forEach(element => {
          skillSection.innerHTML+= `<div class='skillHolder'>
                                        <p class='nameAppear'>${element}</p>
                                        <div class="skillCard">
                                        <img src="/static/${tools[element].image}" class="skillImage" alt="" />
                                        <p class="skillName ${element}"></p>
                                      </div>
                                     </div>`
        });
} 

const handleArtSection = (data) => {
  
  projectInfo.innerHTML = artSection;
  grabHTML();
  artImage.src = data.imageGallery;
  projectName.innerHTML = data.name;
  projectDetails.innerHTML = data.description;
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

projectCards.map(project => {
    if(!project.getAttribute('data-tags').includes('game')) {
        project.style.display = 'none';
    } else {
        project.style.display = null;
    }
})

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





