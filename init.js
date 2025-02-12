document.addEventListener("DOMContentLoaded", function() {
    const eventsList = document.getElementById("events-list");

    const pastEvents = [
        "TANA x OSCA x Stonehill Chess Club $2000 Open Championship - November 23, 2024",
        "Chess & Cheese Night - February 26, 2025",
    ];

    pastEvents.forEach(event => {
        const li = document.createElement("li");
        li.textContent = event;
        eventsList.appendChild(li);
    });
});
