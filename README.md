# Boxing Website

A multi-page boxing information website built with **HTML**, **CSS**, and **JavaScript**.  
The site features four pages: a **Home page**, a **Muhammad Ali page**, a **Mike Tyson page**, and a **Floyd Mayweather page**.  
Users can view boxer statistics, switch images dynamically, toggle color/black-and-white modes, display nicknames, and watch highlight videos.

---

## Features

### Home Page
- Overview text describing the history of boxing.
- A boxer selector with nine available boxers.
- Displays:
  - Boxer image
  - Wins
  - Losses
  - Draws  
- Updates automatically when a boxer is selected.

### Boxer Pages (Ali, Tyson, Mayweather)
Each boxer page includes:
- A slideshow cycling through multiple images every 5 seconds.
- A **Color** button that toggles images between color and black-and-white.
- A **Show Nickname** button displaying the boxer’s nickname in an alert.
- Wins, losses, and draw statistics.
- Paragraphs describing the boxer’s career.
- A highlight video in MP4 format.

---

## Technologies Used

- **HTML5**  
- **CSS3** (Responsive design with grid + media queries)  
- **JavaScript** (DOM manipulation, events, image preloading, timers)  
- **jQuery** (used for selectors and event handling)

---

## Core JavaScript Behaviors

- Automatic image switching using:
  ```js
  setInterval(switchImage, 5000);
  ```
- Preloading images for smooth transitions.
- Updating boxer stats dynamically based on selection.
- Switching between color and black-and-white image sets.
- Showing boxer nicknames via alerts.
- Conditional logic based on which page is currently active.

---

## Project Structure

```
/project-root
 ├── index.html                # Home page
 ├── ali.html                  # Muhammad Ali page
 ├── tyson.html                # Mike Tyson page
 ├── mayweather.html           # Floyd Mayweather page
 ├── script.js                 # Main JavaScript functionality
 ├── style.css                 # Global styling and responsive layout
 └── /images                   # All boxer images and folder structures
      ├── homeImages/
      ├── ali/
      ├── tyson/
      └── mayweather/
```

---

## How to Run the Website

1. Clone or download the repository.
2. Ensure the folder structure remains unchanged (especially the image folders).
3. Open **index.html** in any modern web browser.

No additional installation or server setup is required.

---

## Author

**Vincent Bejbom**
