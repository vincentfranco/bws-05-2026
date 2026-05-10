
(function() {
    const apiKey = "AIzaSyBxHScssMwL4bouQiybeuLMsQ1k0vG9Vag"; // Replace with your actual API key

    function loadGoogleMaps() {
        // Prevent multiple script injections
        if (window.google && window.google.maps) {
            initMap();
            return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.defer = true;
        script.async = true;

        script.onerror = function() {
            console.error("Google Maps API failed to load.");
        };

        document.head.appendChild(script);
    }

    // Ensuring initMap is globally accessible
    window.initMap = function() {
        if (typeof google === "undefined" || typeof google.maps === "undefined") {
            console.error("Google Maps API not loaded yet.");
            return;
        }

        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 50.7707392, lng: 0.278528 },
            zoom: 14,
        });

        new google.maps.Marker({
            position: { lat: 50.7707392, lng: 0.278528 },
            map: map,
            title: "Beauty With Christina",
        });
    };

    // Wait for page load before injecting script
    document.addEventListener("DOMContentLoaded", loadGoogleMaps);
})();
