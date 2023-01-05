/**
 * color constants and class names
 */
const COLOR_NAMES = {
    SKY_BLUE: 'skyBlue',
    LIGHT_YELLOW: 'lightYellow',
    PLUM_PINK: 'plumPink',
};

const colorButtonContainer = document.getElementById('colorButtonsContainer');
const imageUploadButton = document.getElementById('imageUploadButton');
const pageContainer = document.getElementById('pageContainer');
const imageContainer = document.getElementById('imageContainer');
const uploadInput = document.getElementById('uploadInput');
const umbrellaImage = document.getElementById('umbrellaImage');

// state of color and logo uploaded
let color = COLOR_NAMES.SKY_BLUE;
let uploadedLogo;

/**
 * @description function set new selected color
 * @param {String} selectedColor 
 */
function setColor(selectedColor) {
    const colorButton = document.getElementById(color + 'button')
    colorButton.classList.remove('selected')
    pageContainer.classList.remove(color);
    imageUploadButton.classList.remove((color + 'DarkBackground'))

    color = selectedColor;

    pageContainer.classList.add(color.trim());
    // image
    const imagePath = `./assets/${color}.png`
    umbrellaImage.src = imagePath
    // button color
    imageUploadButton.classList.add((color + 'DarkBackground'));
    // selected
    const newColorButton = document.getElementById(selectedColor + 'button');
    newColorButton.classList.add('selected');
}

/**
 * @description function to appendLogo image to image container
 */

function appendLogoImage() {
    const logoImage = document.createElement('img');
    logoImage.setAttribute('id', 'logo');
    const imagePath = URL.createObjectURL(uploadedLogo);
    logoImage.src= imagePath;
    imageContainer.appendChild(logoImage)
}

function handleUploadLogo (event) {
    uploadedLogo = event.target.files[0];
    appendLogoImage();
}


function appendColorButtons() {
    let colorsArr = Object.values(COLOR_NAMES);
    for (let i = 0; i < colorsArr.length; i++) {
        const colorButton = document.createElement("button");
        const selectedColor = colorsArr[i]

        colorButton.setAttribute('id', (selectedColor + 'button'));

        // add class
        colorButton.classList.add('selectColorButton', selectedColor + 'DarkBackground')

        if (color === selectedColor) {
            colorButton.classList.add('selected')
        }

        // add a onClick function which on change sets color state => triggeres on change function
        colorButton.addEventListener('click', () => setColor(selectedColor))

        //appendChild
        colorButtonContainer.appendChild(colorButton)
    }
}

appendColorButtons()