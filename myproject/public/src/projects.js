//https://www.youtube.com/embed/urQ51v-mU5M?start=850
let projects = [
    {
        name: 'Squaredy Cat',
        description: 'Squaredy Cat is a short horror game made over the course of 3 days for the Mini Jam 127 game jam hosted on Itch.io. The theme for the Game Jam was “Cats<sup>2</sup>” and the limitation was to only use a predetermined color palette. Squaredy Cat ended up coming in 11th out of 121 entries.',
        tags: 'Unity/C#, Blender, Gimp, game',
        toolsUsed: 'CSharp Unity Blender GIMP Audacity',
        video: 'https://www.youtube.com/embed/urQ51v-mU5M',
        videoCode: 'urQ51v-mU5M',
        extra: '?start=851',
        itchio: 'https://tippyjgs.itch.io/squaredy-cat',
        github: 'https://github.com/JG-Scott/SquaredyCat',
        imageGallery: '/static/squaredyCat2.png',
        imageSingular: '/static/squaredyCat.png'
    },
    {
        name: 'Seraphs Phlebotomy',
        description: 'Seraphs Phlebotomy is PlayStation 1-esque horror game created for BCIT`s Story Telling Course, COMP 7904. ',
        tags: 'Unity/C#, Blender, Gimp, game',
        toolsUsed: 'CSharp Unity Blender GIMP Audacity Git',
        video: 'https://www.youtube.com/embed/PJ9JRmcD2h0',
        videoCode: 'PJ9JRmcD2h0',
        github: 'https://github.com/AmberMa524/COMP_7904_Project',
        itchio: '',
        extra: '',
        imageGallery: '/static/seraph.jpeg',
        imageSingular: '/static/seraph2.jpeg'
    },   
    {
        name: 'Mini Miner Men',
        description: 'Mini Miner Men is a fast paced 4 player party game in which the players compete against eachother to collect as much gold while avoiding environmental hazards.',
        tags: 'Unity/C#, Blender, Gimp, game',
        toolsUsed: 'CSharp Unity Blender GIMP Audacity Git',
        video: 'https://www.youtube.com/embed/_bbnwwJrc1Y',
        videoCode: '_bbnwwJrc1Y',
        github: 'https://github.com/Tmay98/MiniMinerMen',
        itchio: '',
        extra: '',
        imageGallery: '/static/miniminermen2.png',
        imageSingular: '/static/miniminermen.png'
    },   
    {
        name: 'Reflector Knight',
        description: 'Reflector Knight is an arcade 2D arcade game created over 3 days for the Mini Jam 121 hosted on itch.io. The objective of the game is to survive and score as many points as you can by knocking up and reflecting ground enemies at the enemies above.',
        tags: 'Unity/C#, Blender, Gimp, game',
        toolsUsed: 'CSharp Unity GIMP Aseprite Audacity',
        video: 'https://www.youtube.com/embed/vOmTriRKQSk',
        videoCode: 'vOmTriRKQSk',
        itchio: 'https://tippyjgs.itch.io/reflectorknight',
        github: 'https://github.com/JG-Scott/ReflectorKnight',
        extra: '',
        imageGallery: '/static/reflectorknight.png',
        imageSingular: '/static/reflectorknight2.png'
    }
];

let projectGallery = document.querySelector('.projectGallery');

const createProjects = (data) => {

    projectGallery.innerHTML += `
    <a href="#projectInfo" class="projectCard" data-tags="${data.tags}" data-info='${JSON.stringify(data)}'>
        <img src="${data.imageGallery}" class="projectImg" alt="">
        <span class="tags">${data.tags}</span>
    </a>
    `;
}


projects.map((project,i) => {
    createProjects(project)
});

