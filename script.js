// Wait for the web page to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // --- START OF ORIGINAL CODE ---

    // Get the main elements from the HTML
    const mapContainer = document.getElementById("map-container");
    const infoBox = document.getElementById("info-box");
    const closeBtn = document.getElementById("close-btn");

    // --- Step 1: Fetch and Read the XML file ---
    fetch("society_data.xml")
        .then(response => response.text())
        .then(xmlString => {
            // Convert the XML text into a document we can read
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");
            
            // Get all the <person> tags from the XML
            const people = xmlDoc.getElementsByTagName("person");

            // --- Step 2: Loop through each person and create a pin ---
            for (let person of people) {
                // Read the data for this person
                const name = person.querySelector("name").textContent;
                const info = person.querySelector("info").textContent;
                const image = person.querySelector("image").textContent;
                
                // Read the coordinates
                const coords = person.querySelector("mapCoords");
                const x = coords.getAttribute("x");
                const y = coords.getAttribute("y");

                // Create a new <img> element for the pin
                let pin = document.createElement("img");
                pin.className = "person-pin"; // Apply the style from style.css
                pin.src = image; // Use the person's picture as the pin
                
                // Position the pin on the map
                pin.style.left = x + "px";
                pin.style.top = y + "px";

                // --- Step 3: Add the "click" functionality ---
                pin.addEventListener("click", (event) => {
                    // Stop the click from "bubbling up" to the map
                    event.stopPropagation(); 
                    
                    // When clicked, fill the info box with this person's data
                    infoBox.querySelector("#info-image").src = image;
                    infoBox.querySelector("#info-name").textContent = name;
                    infoBox.querySelector("#info-details").textContent = info;
                    
                    // Show the info box by removing the 'hidden' class
                    infoBox.classList.remove("hidden");
                });

                // Add the new pin to the map
                mapContainer.appendChild(pin);
            }
        })
        .catch(error => {
            console.error("Error loading or parsing XML:", error);
        });

    // --- Step 4: Make the Close Button work ---
    closeBtn.addEventListener("click", () => {
        // Hide the info box by adding the 'hidden' class
        infoBox.classList.add("hidden");
    });

    // --- END OF ORIGINAL CODE ---


    // --- TEMPORARY COORDINATE FINDER (NOW IN THE RIGHT PLACE) ---
    const mapImage = document.querySelector(".map-image");

    if (mapImage) {
        mapImage.addEventListener("click", (event) => {
            // Get the position of the map itself on the page
            const mapRect = mapImage.getBoundingClientRect();

            // Calculate the exact (x, y) inside the map
            const x = Math.round(event.clientX - mapRect.left);
            const y = Math.round(event.clientY - mapRect.top);

            // This will now print to the console
            console.log(`COORDINATES: x="${x}" y="${y}"`);
        });
    } else {
        console.error("Coordinate Finder: Could not find '.map-image'");
    }
});