// JavaScript source code
// File: review-slider.js
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("review-slider");
    const fileName = "review.csv"; // Adjust filename if necessary
    let reviews = [];
    let currentIndex = 0;

    // Function to fetch CSV and parse it
    async function fetchReviews() {
        try {
            const response = await fetch(fileName);
            const text = await response.text();
            reviews = parseCSV(text);
            if (reviews.length > 0) {
                displayReview(reviews[currentIndex]);
                startSlider();
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    }

    // Function to parse CSV data
    function parseCSV(data) {
        const lines = data.split("\n").filter(line => line.trim());
        return lines.map(line => {
            const [name, treatment, comment] = line.split(",");
            return { name, treatment, comment };
        });
    }

    // Function to display a single review
    function displayReview(review) {
        slider.innerHTML = `
            <div class="review">
                <p class="comment">"${review.comment}"</p>
                <p class="client">- ${review.name}, <span>${review.treatment}</span></p>
            </div>
        `;
    }

    // Function to start the slider
    function startSlider() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % reviews.length;
            slider.classList.add("slide-out");
            setTimeout(() => {
                displayReview(reviews[currentIndex]);
                slider.classList.remove("slide-out");
            }, 500); // Sync with CSS transition time
        }, 5000); // 5-second interval
    }

    // Initialize
    fetchReviews();
});

fetch(fileName)
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch reviews");
        console.log("Review file loaded successfully");
        return response.text();
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
