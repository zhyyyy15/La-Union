

const places = [
    {
        name: "San Juan Beach",
        image: "images/sanjuan.png",
        description: "San Juan Beach is one of the most popular destinations in La Union. It is famous for its surfing spots, beautiful coastline, relaxing atmosphere, and amazing sunsets. It is a favorite destination for beach lovers and visitors looking for adventure."
    },

    {
        name: "Tangadan Falls",
        image: "images/tagadan.png",
        description: "Tangadan Falls is a beautiful natural attraction in San Gabriel, La Union. Surrounded by green mountains and nature, it offers visitors a refreshing place to appreciate the beauty of the province."
    },

    {
        name: "Ma-Cho Temple",
        image: "images/macho.png",
        description: "Ma-Cho Temple is a Taoist temple located in San Fernando City, La Union. Dedicated to the Chinese sea goddess Mazu, it is known for its colorful architecture, peaceful surroundings, and cultural importance."
    },

    {
        name: "Bauang",
        image: "images/bauang.png",
        description: "Bauang is a municipality in La Union known for its beaches, agricultural products, and grape farms. It is a wonderful place to discover local culture, enjoy coastal scenery, and learn about the province's agricultural industry."
    },

    {
        name: "Immuki Island",
        image: "images/immuki.png",
        description: "Immuki Island is a coastal attraction in Balaoan, La Union. It is known for its natural lagoons, clear waters, and unique rock formations, making it a popular destination for nature lovers."
    }
];

const popup = document.getElementById("placePopup");

const popupImage = document.getElementById("placeImage");

const popupTitle = document.getElementById("placeTitle");

const popupDescription = document.getElementById("placeDescription");

const closeButton = document.getElementById("closePopup");


const destinationCards = document.querySelectorAll(".destination-card");

destinationCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const index = Number(card.dataset.place);

        showPlace(index);

    });

});


function showPlace(index) {

    const place = places[index];

    if (!place) {
        return;
    }

    popupImage.src = place.image;

    popupImage.alt = place.name;

    popupTitle.textContent = place.name;

    popupDescription.textContent = place.description;

    popup.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closePlace() {

    popup.classList.remove("active");

    document.body.style.overflow = "auto";

}



closeButton.addEventListener("click", closePlace);



popup.addEventListener("click", function(event) {

    if (event.target === popup) {

        closePlace();

    }

});



document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePlace();

    }

});
