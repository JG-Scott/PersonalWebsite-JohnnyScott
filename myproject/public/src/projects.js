//https://www.youtube.com/embed/urQ51v-mU5M?start=850
let projects = [// GAMES///////////////////////////////////////////////////////////////////
    {
        name: 'One Shot',
        description: 'One Shot is a first person horror game made for the Scream Jam 2023 game jam hosted on Itch.io. It was ranked 1st in the horror category.',
        tags: 'Unity/C#, Blender, Gimp',
        filter: 'game',
        toolsUsed: 'CSharp Unity Blender GIMP Audacity Git',
        video: 'https://www.youtube.com/embed/jTckpc5KkCQ',
        videoCode: 'jTckpc5KkCQ',
        github: '',
        itchio: 'https://tippyjgs.itch.io/oneshot',
        extra: '',
        imageGallery: '/static/oneshot.jpg',
        imageSingular: '/static/oneshot2.png'
    },   
    {
        name: 'Squaredy Cat',
        description: 'Squaredy Cat is a short horror game made over the course of 3 days for the Mini Jam 127 game jam hosted on Itch.io. The theme for the Game Jam was “Cats<sup>2</sup>” and the limitation was to only use a predetermined color palette. Squaredy Cat ended up coming in 11th out of 121 entries.',
        tags: 'Unity/C#, Blender, Gimp',
        filter: 'game',
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
        tags: 'Unity/C#, Blender, Gimp',
        filter: 'game',
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
        tags: 'Unity/C#, Blender, Gimp',
        filter: 'game',
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
        tags: 'Unity/C#, Aseprite, Gimp',
        filter: 'game',
        toolsUsed: 'CSharp Unity GIMP Aseprite Audacity',
        video: 'https://www.youtube.com/embed/vOmTriRKQSk',
        videoCode: 'vOmTriRKQSk',
        itchio: 'https://tippyjgs.itch.io/reflectorknight',
        github: 'https://github.com/JG-Scott/ReflectorKnight',
        extra: '',
        imageGallery: '/static/reflectorknight.png',
        imageSingular: '/static/reflectorknight2.png'
    },
    {
        name: 'The Knightly Grind',
        description: 'The Knightly Grind is a 2D action game made for the Trijam game jam hosted by itch.io. The game was made in under 3 hours and was placed first overall in the competition.',
        tags: 'Unity/C#, Aseprite, Gimp',
        filter: 'game',
        toolsUsed: 'CSharp Unity GIMP Aseprite Audacity',
        video: 'https://www.youtube.com/embed/f10kSj8W2ec',
        videoCode: 'f10kSj8W2ec',
        itchio: 'https://tippyjgs.itch.io/the-knightly-grind',
        github: 'https://github.com/JG-Scott/TheKnightlyGrind',
        extra: '',
        imageGallery: '/static/theknightlygrind.png',
        imageSingular: '/static/theknightlygrindlong.png'
    },
    { // ART///////////////////////////////////////////////////////////////////
        name: 'Christmas Day',
        description: 'Created Using Blender, December 18, 2020.',
        tags: 'Blender',
        filter: 'art',
        toolsUsed: 'Blender',
        imageGallery: '/static/christmas.png',
        imageSingular: '/static/christmas.png'
    },
    {
        name: 'Mirror Man',
        description: 'Created Using Blender, December 23, 2020.',
        tags: 'Blender',
        toolsUsed: 'Blender',
        filter: 'art',
        imageGallery: '/static/bathroom.png',
        imageSingular: '/static/bathroom.png',
    },
    {
        name: 'Camping Trip',
        description: 'Created Using Blender, December 23, 2020.',
        tags: 'Blender',
        toolsUsed: 'Blender',
        filter: 'art',
        imageGallery: '/static/worm2.png',
        imageSingular: '/static/worm2.png'
    },
    {
        name: 'Pot Boys',
        description: 'Created Using Blender, December 23, 2020.',
        tags: 'Blender',
        toolsUsed: 'Blender',
        filter: 'art',
        imageGallery: '/static/potboys.png',
        imageSingular: '/static/potboys.png'
    },
    
    // APPS///////////////////////////////////////////////////////////////////
    {
        name: 'Sorting Algorithm Visualizer',
        description: 'A sorting algorithm visualizer which demonstrates how different algorithms go about sorting large lists of values. The project was made in C++ using the SFML Library',
        tags: 'C++, SFML',
        filter: 'app',
        toolsUsed: 'CPlusPlus SFML',
        video: 'https://youtu.be/B27Bbe0QPSA',
        videoCode: 'B27Bbe0QPSA',
        itchio: '',
        github: 'https://github.com/JG-Scott/SortingAlgorithmVisualizer',
        extra: '',
        imageGallery: '/static/sortingAlgorithmImage.png',
        representer: 'video'
    }
    
    // {
    //     name: 'Bobo - C++ Game Engine and Pool Simulator',
    //     description: 'Bobo is a game engine made entirely from C++. It utilizes OpenGL for rendering, Jolt for physics, and ImGui for UI Handling. A pool simulator game was created in order to show the capabilities of the engine.',
    //     tags: 'C++, OpenGL, Jolt, ImGui',
    //     filter: 'app',
    //     toolsUsed: 'C++, OpenGL, Jolt, ImGui',
    //     video: 'Video',
    //     videoCode: 'Videocode',
    //     itchio: '',
    //     github: 'https://github.com/metalpipemomo/bobo',
    //     extra: '',
    //     imageGallery: '/static/sortingAlgorithmImage.png',
    //     representer: 'video'
    // },

];



let projectGallery = document.querySelector('.projectGallery');

const createProjects = (data) => {

    projectGallery.innerHTML += `
    <a href="#projectInfoHolder" class="projectCard" data-tags="${data.filter}" data-info='${JSON.stringify(data)}'>
        <img src="${data.imageGallery}" class="projectImg" alt="">
        <span class="tags">${data.tags}</span>
    </a>
    `;
}


projects.map((project,i) => {
    createProjects(project)
});

