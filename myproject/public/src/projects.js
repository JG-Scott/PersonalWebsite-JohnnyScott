//https://www.youtube.com/embed/urQ51v-mU5M?start=850
let projects = [
    {
        name: 'Squaredy Cat',
        description: 'Squaredy Cat is a short horror game made over the course of 3 days for the Mini Jam 127 game jam hosted on Itch.io. The theme for the Game Jam was “Cats2” and the limitation was to only use a predetermined color palette. Squaredy Cat ended up coming in 11th out of 121 entries.',
        tags: 'Unity/C#, Blender, Gimp, game',
        video: 'https://www.youtube.com/embed/urQ51v-mU5M',
        videoCode: 'urQ51v-mU5M',
        extra: '?start=851',
        github: 'https://github.com/JG-Scott',
        imageGallery: '/static/squaredyCat2.png',
        imageSingular: '/static/squaredyCat.png'
    },
    {
        name: 'Seraphs Phlebotomy',
        description: 'lorem ipslorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumum',
        tags: 'Unity/C#, Blender, Gimp, game',
        video: 'https://www.youtube.com/embed/PJ9JRmcD2h0',
        videoCode: 'PJ9JRmcD2h0',
        extra: '',
        github: 'https://github.com/JG-Scott',
        imageGallery: '/static/seraph.jpeg',
        imageSingular: '/static/seraph2.jpeg'
    },   
    {
        name: 'Mini Miner Men',
        description: 'lorem ipslorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumum',
        tags: 'Unity/C#, Blender, Gimp, game',
        video: 'https://www.youtube.com/embed/_bbnwwJrc1Y',
        videoCode: '_bbnwwJrc1Y',
        extra: '',
        github: 'https://github.com/JG-Scott',
        imageGallery: '/static/miniminermen2.png',
        imageSingular: '/static/miniminermen.png'
    },   
    {
        name: 'Reflector Knight',
        description: 'lorem ipslorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumum',
        tags: 'Unity/C#, Blender, Gimp, game',
        video: 'https://www.youtube.com/embed/vOmTriRKQSk',
        videoCode: 'vOmTriRKQSk',
        extra: '',
        github: 'https://github.com/JG-Scott',
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

