const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


////////

const pets = [
    {
        name: "Pheobe",
        age: "beautiful Pheeb is coming up on 8 years old now - reaching golden oldie territory",
        likes: "playing in the park and chasing Leo with the ball. Belly rubs and cuddles",
        dislikes: "getting groomed and not being able to cuddle people who make eye contact with her",
        hobbies: "toys. toys. sleep. cuddle. toys.",
        nicknames: "Spleeb, Phoebert, Smeller Ella",
        images: '../pictures/Pheobe3.JPG',
    }, 
    {
        name: "Leo",
        age: "acts like a full baby, is actually 4",
        likes: "playing in the park and having Phoebe chase him. Leo loves food",
        dislikes: "being left on his own (especially without Pheeb!)",
        hobbies: "tennis balls for days! Cuddling up to people and giving no personal space",
        nicknames: "stinker, Leroy, Leonardo",
        images: '../pictures/Leo1.jpg',
    },
    {
        name: "Juniper Gin",
        age: "born on April Fool's Day 2019",
        likes: "likes to lounge around all day in the sunshine, and eat her favourite snack - dreamies.",
        dislikes: "Anything loud and unfamiliar. Being told no. Any snacks not dreamies",
        hobbies: "Juniper likes to play string toys, eat food, and wake her pawrents up at 4am every morning.",
        nicknames: "Tuniper Tin, Junebug, LovelyRug",
        images: '../pictures/Juniper2.jpg',
    },
];

let firstArray = 0;

let totalPets = pets.length;

let PetsContainer = document.getElementById("pet-container");
let ClickNext = document.getElementById("next");
let ClickBack = document.getElementById("previous");

let displayPets = () => {
    PetsContainer.innerHTML = `
        <h3>${pets[firstArray].name}</h3>
        <p> 
            Age: ${pets[firstArray].age}<br><br>
            Likes: ${pets[firstArray].likes}<br><br>
            Dislikes: ${pets[firstArray].dislikes}<br><br>
            Hobbies: ${pets[firstArray].hobbies}<br><br>
            Nicknames: ${pets[firstArray].nicknames}<br><br>
            <img src=${pets[firstArray].images}>
        </p>
    `;
};

ClickNext.addEventListener("click", () => {
    firstArray = (totalPets + firstArray + 1) % totalPets;
    displayPets();
});

ClickBack.addEventListener("click", () => {
    firstArray = (totalPets + firstArray - 1) % totalPets;
    displayPets();
});


window.onload = displayPets;