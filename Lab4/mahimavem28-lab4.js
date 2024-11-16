// mahimavem28-lab4.js
(function() {
    // 1. Change the main headline text in the hero section
    document.querySelector('#hero h1').textContent = "Supercharge Your Brand with Stellar Marketing";

    // 2. Change the subheadline text below the hero headline
    const subHeadline = document.querySelector('#hero p');
    if (subHeadline) {
        subHeadline.innerHTML = "<b><i>Leverage innovative strategies from Stellar Marketing to make your business shine and succeed.</i></b>";
    }

    // 3. Change the imagein the background of the hero section
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    }

    // 4. Match navbar background color to footer color
    const navBar = document.querySelector('header');
    const pageFooter = document.querySelector('footer');
    if (navBar && pageFooter) {
        const footerBgColor = window.getComputedStyle(pageFooter).backgroundColor;
        navBar.style.backgroundColor = footerBgColor;
    }

    // 5. Remove the "Get Started"  Call-to-action (CTA) button from the hero section
    const heroCTA = document.querySelector('#hero a');
    if (heroCTA) {
        heroCTA.remove();
    }

    // 6. Update icon colors in the Services section to light blue (#6495ed)    
    const serviceIcons = document.querySelectorAll('#services .material-symbols-outlined');
    serviceIcons.forEach(serviceIcon => {
        serviceIcon.style.color = "#6495ed";
    });

    // 7. Replace the "Digital Marketing" icon with 'Ads Click'
    const adsClickIcon = document.querySelector('#services .material-symbols-outlined[data-icon="digital"]');
    if (adsClickIcon) {
        adsClickIcon.textContent = "ads_click";
    }

    // 8. Adjust layout for specialized marketing solutions at >= 1024px to 4 columns
    const styleTag = document.createElement("style");
    styleTag.textContent = `
        @media (min-width: 1024px) {
            #solutions .grid-cols-1.md\\:grid-cols-2 {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    `;
    document.head.appendChild(styleTag);

    // 9. Update the Musicians image in the specialized marketing solutions section
    const musicianImg = document.querySelector('#solutions img[alt="Musicians"]');
    if (musicianImg) {
        musicianImg.src = "https://picsum.photos/id/453/400/300";
    }

    // Prevent the form submission to the broken URL and validate input
    const contactFormElement = document.querySelector('#contact form');
    if (contactFormElement) {
        contactFormElement.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission to contact.html

            const userName = document.querySelector('#name').value.trim();
            const userEmail = document.querySelector('#email').value.trim();

            if (userName && userEmail) {
                alert(`Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.`);
            } else {
                alert("Please provide a name and email.");
            }
        });
    }
})();
