//version nueva

import './Logo2.css';
import { paintHeader } from '../Header';

export function paintLogo2() {
    console.log("entra en paintLogo2");

    const logoElement = document.createElement("img");
    logoElement.src = "./public/mp_logo.jpg";
    logoElement.alt = "logo MP";
    logoElement.className = "Logo2";

    const clickHandler = (event) => {
        console.log('click logo2:reset');
        //clean MainPhotos
        const appContainer = document.getElementById("app");
        appContainer.innerHTML = "";

        // Remove the input-button-container element
        const erasedHeader = document.getElementById("header");
        while (erasedHeader.firstChild) {
            header.removeChild(header.firstChild);
        }
        // paint the header again
        paintHeader();
    };

    logoElement.addEventListener('click', clickHandler);

    const container = document.getElementById("header");
    container.appendChild(logoElement);
}