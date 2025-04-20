 const genres = [
                {
                    name: "Science Fiction",
                    books:[
                            {
                            image: "Dune.jpeg", 
                            title: "Dune", 
                            desc: "description"
                            },
                            {
                            image: "ThreeBodyProblem.jpeg", 
                            title: "Three-body Problem", 
                            desc: "description"
                            },
                            {
                            image: "Neuromancer.jpeg",
                            title: "Neuromancer", 
                            desc: "description"
                            }
                        ] 
                    },
                    {
                        name: "Fantasy",
                        books:[
                            {
                            image: "HarryPotter.jpeg",
                            title: "Harry Potter",
                            desc: "description",
                            },
                            {
                            image: "Fire&Blood.jpeg",
                            title: "Fire and Blood",
                            desc: "description",
                            },
                            {
                            image: "ThreeBodyProblem.jpeg",
                            title: "Three Body Problem",
                            desc: "description",
                            }
                        ]
                    }
                ];
            const container = document.getElementById('book-list');

            genres.forEach(genre => {

            const section = document.createElement('section');
            section.classList.add('genre');
                    
                const h2 = document.createElement('h2');
                    h2.textContent = genre.name;
                    //section.appendChild(h2);

                genre.books.forEach(book => {
                const bookDiv = document.createElement('div');
                    bookDiv.classList.add('book-container');

                const img = document.createElement('img');
                    img.src = `assets/${book.image}`;
                    img.alt = book.title;

                const h3 = document.createElement('h3');
                    h3.textContent = book.title;

                const p = document.createElement('p');
                    p.textContent = book.desc;

                bookDiv.appendChild(img);
                bookDiv.appendChild(h3);
                bookDiv.appendChild(p);
                section.appendChild(bookDiv);
                });
            container.appendChild(section);
});

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

if(darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode');
    if(darkmode != "active"){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
});
