# Color Sets Project

## Overview

This project displays a collection of color sets, each containing ten colors. Users can browse through the color sets and copy a set's colors in a predefined CSS variable format by clicking on the set title.

## Features

- **Responsive Design:** The interface is designed to be responsive and user-friendly.
- **Pagination:** Color sets are displayed in pages with five sets per page.
- **Copy to Clipboard:** Clicking on a set title copies the color set in a CSS variable format to the clipboard.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/1999AZZAR/color-set.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd color-set
   ```

## Usage

1. Open the `index.html` file in a web browser.

## File Structure

- `index.html`: Main HTML file containing the structure and logic for displaying the color sets.
- `README.md`: Detailed project description and usage instructions.

## Detailed Description

### HTML Structure

- The `head` section includes the meta tags, title, and link to Google Fonts.
- The `style` section defines the CSS for the project, ensuring a clean and modern look.
- The `body` section contains:
  - A main title (`h1`) for the page.
  - A container (`div`) for displaying the color sets.
  - A container (`div`) for pagination buttons.

### JavaScript Logic

1. **Data Structure:**
   - An object named `colorSets` stores multiple color sets, each identified by a key like `set1`, `set2`, etc.

2. **Pagination and Display:**
   - The `displaySets` function handles the rendering of color sets based on the current page.
   - The `displayPagination` function creates pagination buttons and updates the current page when a button is clicked.

3. **Copy to Clipboard:**
   - Clicking on a set title triggers the `copyToClipboard` function, which formats the color set into CSS variables and copies it to the clipboard.

### CSS Styling

- **Flexbox Layout:** Used for centering and aligning elements.
- **Hover Effects:** Applied to color boxes and pagination buttons for interactivity.
- **Responsive Design:** Ensures the page looks good on various screen sizes.

## How It Works

1. **Loading the Page:**
   - The `displaySets` function is called to render the first set of color sets based on `currentPage`.

2. **Navigating Pages:**
   - Pagination buttons allow users to navigate between pages. The `currentPage` variable is updated, and `displaySets` is called again to refresh the display.

3. **Copying Color Sets:**
   - Clicking a set title formats the set's colors into CSS variables and copies it to the clipboard using the `copyToClipboard` function. An alert confirms the action.

## Example

### Displayed Color Set:

When a user clicks on "Set 1," the following text is copied to the clipboard:

```css
:root {
    --primary-color: #5e4b56;
    --secondary-color: #7e5878;
    --tertiary-color: #9370db;
    --quaternary-color: #9b8ca5;
    --quinary-color: #c19ac4;
    --senary-color: #cfa1e3;
    --septenary-color: #d4a5d2;
    --octonary-color: #bca5c8;
    --nonary-color: #dccae3;
    --denary-color: #f3e4f2;
}
```

## Contributing

1. **Fork the repository.**
2. **Create a new branch:**
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes:**
   ```sh
   git commit -m 'Add some feature'
   ```
4. **Push to the branch:**
   ```sh
   git push origin feature/your-feature-name
   ```
5. **Open a pull request.**

## License

This project is licensed under the MIT License.
