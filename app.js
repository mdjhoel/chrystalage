// Data store for the website pages
const pages = {
    home: `
        <div class="page-fade">
            <h1>Welcome to Crystal Age Developments Group</h1>
            <p>We are a growing company focused on residential developments, real estate services, property rental and leasing, and property maintenance and
contracting services.</p>
<p>We are committed to delivering modern, functional, and well-crafted spaces that meet today’s
needs while creating long-term value for the future. Our approach is shaped by a broad range of
construction and design influences, bringing practical, contemporary ideas into every project we
deliver.</p>
<p>Every service we provide is guided by professionalism, integrity, and attention to detail.
At Crystal Age Developments Group, we focus on delivering reliable solutions and quality
results our clients can trust, from development and property services to ongoing maintenance and
support.</p>
            <img src="home.jpeg">
            <div class="grid">
                <div class="card">
                    <h3>Premium Realty</h3>
                    <p>Buying or selling? Our expert brokerage team ensures you net the best value in today's shifting market.</p>
                </div>
                <div class="card">
                    <h3>General Contracting</h3>
                    <p>From minor custom renovations to full-scale commercial builds, our build quality stands the test of time.</p>
                </div>
                <div class="card">
                    <h3>Leasing Solutions</h3>
                    <p>Explore luxury residential stays or highly optimized commercial rental spaces tailored for growth.</p>
                </div>
            </div>
        </div>
    `,
    about: `
        <div class="page-fade">
            <h1>About Us</h1>
            <p>Crystal Age Developments Group is a registered business with Corporate Registry New
Brunswick, focused on residential developments, real estate investment, property rental and
leasing, and general contracting services.</p>
<p>Founded on a passion for quality construction and innovative development, the company brings
together international experience and contemporary design inspiration from Africa, the Middle
East, and Europe. Our vision is to introduce a unique blend of modern architectural styles and
building concepts into the Canadian market while maintaining functionality, durability, and
lasting value.</p>
<p>At Crystal Age Developments Group, we believe every development should reflect quality
craftsmanship, thoughtful design, and attention to detail. As we continue to grow, we remain
committed to creating modern spaces and developments that positively contribute to
communities and stand the test of time.</p>
            <img src="logo.png">
        </div>
    `,
    residential: `
        <div class="page-fade">
            <h1>Residential Properties</h1>
            <p>At Crystal Age Developments Group, we are committed to creating modern residential
developments that combine quality craftsmanship, functional design, and lasting value. Inspired
by contemporary architectural influences from around the world, our residential projects are
designed to provide comfort, style, and practicality for modern living.</p>
<p>We focus on delivering thoughtfully planned homes and developments that contribute positively
to growing communities while maintaining high standards of quality and attention to detail.</p>
            <div class="grid">
                <div class="card"><h4>Urban Condos</h4><p>Modern luxury in the heart of the city layout.</p></div>
                <div class="card"><h4>Suburban Estates</h4><p>Spacious family living spaces featuring sustainable construction.</p></div>
            </div>
        </div>
    `,
    'current-listings': `
        <div class="page-fade">
            <h1>Rental & Leasing: Current Listings</h1>
            <p>Browse our active catalog of available rental apartments, corporate leasing spaces, and retail storefronts.</p>
            <div class="grid">
                <div class="card">
                    <h4>The Grandview Apartments - Unit 402</h4>
                    <p>2 Bed, 2 Bath | Modern Amenities | $2,400/mo</p>
                </div>
                <div class="card">
                    <h4>Oak & Main Commercial Suite</h4>
                    <p>1,500 sq ft | Prime Retail Frontage | Contact for Lease Terms</p>
                </div>
            </div>
        </div>
    `,
    'previous-listings': `
        <div class="page-fade">
            <h1>Rental & Leasing: Past Successes</h1>
            <p>Take a look at some of our recently leased properties. Our low vacancy rates reflect our commitment to tenant satisfaction and owner profitability.</p>
            <ul>
                <li><strong>Suite 101, Horizon Plaza</strong> - Leased in 14 days</li>
                <li><strong>455 Laurel Lane</strong> - Premium residential estate, long-term lease secured</li>
            </ul>
        </div>
    `,
    realty: `
        <div class="page-fade">
            <h1>Realty Services</h1>
            <p>Navigating properties acquisitions requires sharp strategy. Our full-service real estate brokerage assists buyers, sellers, and corporate investors with portfolio expansion.</p>
            <p>Our database features exclusive off-market opportunities that give you a competitive edge.</p>
        </div>
    `,
    contracting: `
        <div class="page-fade">
            <h1>General Contracting & Development</h1>
            <p>We build with precision. Our licensed contracting division handles architecture, engineering, project management, and final hand-off finishes.</p>
            <div class="grid">
                <div class="card"><h4>Commercial Build-outs</h4><p>Office spaces, restaurants, and retail spaces optimized for workflows.</p></div>
                <div class="card"><h4>Custom Home Renovations</h4><p>High-end structural additions, luxury kitchens, and exterior redesigns.</p></div>
            </div>
        </div>
    `,
    contact: `
    <div class="page-fade">
        <h1>Contact Us</h1>
        <p>Get in touch with our team to discuss your property, leasing, or development needs.</p>
        
        <div class="card" style="max-width: 500px; margin-top: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 1.5rem;">
                <!-- Email Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                    <strong style="display: block; font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</strong>
                    <a href="mailto:oluwagbemi_ibikunle@yahoo.com" style="color: #2c3e50; text-decoration: none; font-weight: 500; transition: color 0.2s;" onmouseover="this.style.color='#f39c12'" onmouseout="this.style.color='#2c3e50'">oluwagbemi_ibikunle@yahoo.com</a>
                </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px;">
                <!-- Phone Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                    <strong style="display: block; font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</strong>
                    <a href="tel:5069280880" style="color: #2c3e50; text-decoration: none; font-weight: 500; transition: color 0.2s;" onmouseover="this.style.color='#f39c12'" onmouseout="this.style.color='#2c3e50'">(506) 928-0880</a>
                </div>
            </div>
        </div>
    </div>
`
};

// Router Function
function renderPage(pageId) {
    const contentDiv = document.getElementById('content');
    
    // Fallback to home if page doesn't exist
    const htmlContent = pages[pageId] || pages['home'];
    contentDiv.innerHTML = htmlContent;

    // Update active state in Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Event Listeners for Nav Links & Mobile Interactions
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Mobile Menu Toggle Click Handler
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('active');
    });

    // Handle Page Navigation Clicking
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            renderPage(pageId);

            // Automatically close the mobile drawer and reset hamburger icons on link click
            menuToggle.classList.remove('open');
            navMenu.classList.remove('active');
        });
    });

    // Default Load Page
    renderPage('home');
});
