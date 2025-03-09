document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar");
    const movieCards = document.querySelectorAll(".movie-card");
    const modal = document.getElementById("movieModal");
    const closeModal = document.querySelector(".close");
    
    movieCards.forEach(card => {
        card.addEventListener("click", () => {
            document.getElementById("modal-title").textContent = card.dataset.title;
            document.getElementById("modal-description").textContent = card.dataset.description;
            document.getElementById("modal-rating").textContent = card.dataset.rating;
            document.getElementById("modal-cast").textContent = card.dataset.cast;
            document.getElementById("modal-img").src = card.dataset.image;
            
            // Clear previous actor images
            const actorsContainer = document.getElementById("modal-actors");
            actorsContainer.innerHTML = "";
            
            // Add actor images dynamically
            const actors = JSON.parse(card.dataset.actors); // Convert stored JSON string to array
            actors.forEach(actor => {
                let actorElement = document.createElement("div");
                actorElement.classList.add("actor");
                
                let img = document.createElement("img");
                img.src = actor.image;
                img.alt = actor.name;
                
                let name = document.createElement("p");
                name.textContent = actor.name;
                
                actorElement.appendChild(img);
                actorElement.appendChild(name);
                actorsContainer.appendChild(actorElement);
            });
            
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    searchBar.addEventListener("input", () => {
        let query = searchBar.value.toLowerCase();
        movieCards.forEach(card => {
            let title = card.dataset.title.toLowerCase();
            card.style.display = title.includes(query) ? "block" : "none";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("movieModal");

    // Ensure modal is hidden initially
    modal.style.display = "none";

    document.querySelectorAll(".movie-card").forEach(card => {
        card.addEventListener("click", function () {
            modal.style.display = "block";  // Show modal only when a movie is clicked
        });
    });

    // Close modal when clicking the close button
    document.querySelector(".close").addEventListener("click", function () {
        modal.style.display = "none";
    });
});
