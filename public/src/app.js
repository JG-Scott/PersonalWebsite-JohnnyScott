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
  if(data.filter == 'game') {
    handleProjectSection(data);
  } else if(data.filter == 'art') {
    handleArtSection(data);
  } else if(data.filter == 'app') {
    handleApplicationSection(data);
  }
      
}


const handleProjectSection = (data) => {
  if(width >= 992) {
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
  
          itchBtn.style.display = 'none';
        } else {
          itchBtn.style.display = 'block';
          itchBtn.href = data.itchio;
        }

        //gitBtn.href = data.github;
        if(data.github == '') {
          
          gitBtn.style.display = 'none';
        } else {
          gitBtn.style.display = 'block';
          gitBtn.href = data.itchio;
        }
        toolList = data.toolsUsed;
       
        skillSection.innerHTML="";
        toolList.split(' ').forEach(element => {
          let name =tools[element].otherName == '' ? element : tools[element].otherName;
          skillSection.innerHTML+= `<div class='skillHolder'>
                                        <p class='nameAppear'>${name}</p>
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
  
  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.querySelector(".artImage");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  }
  
  switch (data.name) {
    case 'Mirror Man':
      img.classList.remove("artImage");
      img.classList.add('mirrorMan');
      modalImg.classList.remove("modal-content");
      modalImg.classList.add('mirrorManModal');
      break;
  
    case 'Christmas Day':
      artImage.classList.remove("artImage");
      artImage.classList.add('christmas');
      modalImg.classList.remove("modal-content");
      modalImg.classList.add('christmasModal');
      break;

    case 'Camping Trip':
      artImage.classList.remove("artImage");
      artImage.classList.add('camping');
      modalImg.classList.remove("modal-content");
      modalImg.classList.add('campingModal');
      break;

    case 'Pot Boys':
      artImage.classList.remove("artImage");
      artImage.classList.add('potBoys');
      modalImg.classList.remove("modal-content");
      modalImg.classList.add('potBoysModal');
      break;

    default:

      break;
  }

}

const handleApplicationSection = (data) => {
        projectInfo.innerHTML = applicationSection;
        grabHTML();
        projectName.innerHTML = data.name;
        projectDetails.innerHTML = data.description;
        if(data.representer == 'video') {
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
        } else if(data.representer == 'image') {
          document.querySelector('.applicationImageVideo').innerHTML = `<img src="${data.imageGallery}" class="image" alt="" />`

        }
     
        if(data.itchio == '') {
          
          itchBtn.style.display = 'none';
        } else {
          itchBtn.style.display = 'block';
          itchBtn.href = data.itchio;
        }

        gitBtn.href = data.github;
        toolList = data.toolsUsed;
        
        skillSection.innerHTML="";
        toolList.split(' ').forEach(element => {
          let name =tools[element].otherName == '' ? element : tools[element].otherName;
          skillSection.innerHTML+= `<div class='skillHolder'>
                                        <p class='nameAppear'>${name}</p>
                                        <div class="skillCard">
                                        <img src="/static/${tools[element].image}" class="skillImage" alt="" />
                                        <p class="skillName ${element}"></p>
                                      </div>
                                     </div>`
        });
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



// // send emails 

// function sendEmails(){
//   var params = {
//     name: document.getElementById('senderName').value,
//     email: document.getElementById('senderEmail').value,
//     subject: document.getElementById('senderSubject').value,
//     message: document.getElementById('senderMessage').value,
//   }

//   if(params.name.trim() == "" || params.email.trim() == "" || params.subject.trim() == "" || params.message.trim() == ""){
//     alert("Please fill out all fields before sending message.");
//   } else {
//   emailjs.send(serviceID,emailTemplate, params).then(
//   res => {
//     document.getElementById('senderName').value = "";
//     document.getElementById('senderSubject').value = "";
//     document.getElementById('senderEmail').value = "";
//     document.getElementById('senderMessage').value = "";
    
//     alert("Email sent!");
//   }
// ).catch((err) => console.log(err));
//   }
// }





