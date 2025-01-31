import emailjs from 'emailjs-com';


export function toggleNavigation(menuIcon, navMenu, closeIcon) {
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("hide-page");
            navMenu.classList.toggle("hide-page");
            closeIcon.classList.toggle("hide-page");
        });
    
        closeIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("hide-page");
            navMenu.classList.toggle("hide-page");
            closeIcon.classList.toggle("hide-page");
        });
    }
    
    /**
     * Generic function to handle page visibility toggling and URL change.
     * @param {HTMLElement[]} pagesToHide - An array of elements to hide.
     * @param {HTMLElement} pageToShow - The element to show.
     * @param {HTMLElement[]} imagesToHide - An array of image elements to hide.
     * @param {HTMLElement} imageToShow - The image element to show.
     * @param {string} route - The URL route to update.
     */
    function router(pagesToHide, pageToShow, imagesToHide, imageToShow, menuIcon, navMenu, closeIcon, route) {
        pagesToHide.forEach(page => page.classList.add("hide-page"));
        imagesToHide.forEach(image => image.classList.add("hide-page"));
    
        window.scrollTo(0, 0);
    
        pageToShow.classList.remove("hide-page");
        imageToShow.classList.remove("hide-page");
    
        menuIcon.classList.remove("hide-page");
        navMenu.classList.add("hide-page");
        closeIcon.classList.add("hide-page");
    
        // Update the URL without reloading the page
        history.pushState(null, "", route);
    }
    
    /**
     * Set up routes with URL routes and page toggling.
     * @param {Object[]} routesConfig - Array of route configurations.
     * @param {HTMLElement} menuIcon - The menu icon element.
     * @param {HTMLElement} navMenu - The navigation menu element.
     * @param {HTMLElement} closeIcon - The close icon element.
     */
    export function setupRoutes(routesConfig, menuIcon, navMenu, closeIcon) {
        routesConfig.forEach(({ triggerElement, pagesToHide, pageToShow, imagesToHide, imageToShow, route }) => {
            triggerElement.addEventListener("click", () => {
                router(pagesToHide, pageToShow, imagesToHide, imageToShow, menuIcon, navMenu, closeIcon, route);
            });
        });
    }
    
    /**
     * Handle page load and URL check to show the appropriate page.
     */
    function handlePageLoad(routesConfig) {
        const currentRoute = window.location.pathname;
    
        // Check if the current URL matches any defined route and trigger the corresponding page
        const matchingRoute = routesConfig.find(route => route.route === currentRoute);
        if (matchingRoute) {
            router(matchingRoute.pagesToHide, matchingRoute.pageToShow, matchingRoute.imagesToHide, matchingRoute.imageToShow, matchingRoute.menuIcon, matchingRoute.navMenu, matchingRoute.closeIcon, currentRoute);
        }
    }
    
    // Add this function call to handle page load and set up routes
    window.addEventListener("load", () => handlePageLoad(routesConfig));
    

emailjs.init('7XlDgxkr6548W9SOwG7ef');

const SERVICE_ID = 'service_ooy5p9l';
const TEMPLATE_ID = 'template_hskuq0i';
const USER_ID = 'taQFBqY9ZGxzfkAuZ';

export function handleFormSubmit(form) {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
        .then((result) => {
            alert('Message sent successfully: ' + result.text);
        })
        .catch((error) => {
            alert('Failed to send message: ' + error.text);
        });
}

export function carouselSlide(index, slide1, slide2, slide3, increaseSlide, decreaseSlide, selectSlide1, selectSlide2, selectSlide3) {
        console.log(index)
        increaseSlide.addEventListener("click", () => {
                index = index + 1;
                if(index > 2) {
                   index = 0;
                }
                if (index === 0) {
                        slide1.classList.remove("hide-page");
                        slide2.classList.add("hide-page");
                        slide3.classList.add("hide-page");
                } else if (index === 1) {
                        slide1.classList.add("hide-page");
                        slide2.classList.remove("hide-page");
                        slide3.classList.add("hide-page");
                } else if (index === 2) {
                        slide1.classList.add("hide-page");
                        slide2.classList.add("hide-page");
                        slide3.classList.remove("hide-page");
                }
        })

        decreaseSlide.addEventListener("click", () => {
                index = index - 1;
                if(index < 0) {
                   index = 2;
                }
                if (index === 0) {
                        slide1.classList.remove("hide-page");
                        slide2.classList.add("hide-page");
                        slide3.classList.add("hide-page");
                } else if (index === 1) {
                        slide1.classList.add("hide-page");
                        slide2.classList.remove("hide-page");
                        slide3.classList.add("hide-page");
                } else if (index === 2) {
                        slide1.classList.add("hide-page");
                        slide2.classList.add("hide-page");
                        slide3.classList.remove("hide-page");
                }
        })

        selectSlide1.addEventListener("click", () => {
                index = 0;
                slide1.classList.remove("hide-page");
                slide2.classList.add("hide-page");
                slide3.classList.add("hide-page");
        })

        selectSlide2.addEventListener("click", () => {
                index = 1;
                slide1.classList.add("hide-page");
                slide2.classList.remove("hide-page");
                slide3.classList.add("hide-page");
        })

        selectSlide3.addEventListener("click", () => {
                index = 2;
                slide1.classList.add("hide-page");
                slide2.classList.add("hide-page");
                slide3.classList.remove("hide-page");
        })
}
document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('googleLink').addEventListener('click', function() {
            const email = 'info@sedictexas.com'; // Replace with your actual email
            const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
            window.open(mailtoLink, '_blank');
        });
    });
    


/**
 * Task close menu navigation on Select route
 * 1. function toggleNavigation(menuIcon, navMenu, closeIcon)
 * 2. close the navigation menu and reset the menu icon
 */

