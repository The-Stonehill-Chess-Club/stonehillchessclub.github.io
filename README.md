# Stonehill Chess Club Website

This repository contains the static website for the Stonehill Chess Club. The website consists of three main files:
- `index.html`: The main HTML file.
- `style.css`: The main CSS file for styling.
- `init.js`: The main JavaScript file for initializing dynamic content.

## Structure

### index.html
This file contains the structure of the website, including:
- A header with the club title.
- An introduction section.
- A section for executive board members.
- A section for past events.

### style.css
This file is used to style the website, including:
- Basic styles for the body, header, and sections.
- Styling for lists and list items.

### init.js
This file is used to add dynamic content to the website, such as the list of past events.

## How to Update and Upkeep

### Update the Executive Board Members
To update the list of executive board members:
1. Open `index.html`.
2. Locate the section with the class `eboard`.
3. Update the list items (`<li>`) within the `<ul>` to reflect the current executive board members.

### Add Past Events
To add new past events:
1. Open `init.js`.
2. Locate the `pastEvents` array.
3. Add new events to the array as strings in the format "Event Name - Month Year".

### Update Styling
To update the styling of the website:
1. Open `style.css`.
2. Modify the existing styles or add new styles as needed.

## Deployment
Since this is a static website, you can host it on any static web hosting service (e.g., GitHub Pages, Netlify, Vercel). Simply upload the three files (`index.html`, `style.css`, and `init.js`) to your hosting service.

## Contributions
For any changes or updates, please create a pull request with a description of the changes. The changes will be reviewed and merged accordingly.

## Contact
For any questions or issues, please contact the Stonehill Chess Club at [email@example.com].
