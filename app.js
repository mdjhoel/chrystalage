// Data store for the website pages
const pages = {
    home: `
        <div class="page-fade">
            <h1>Welcome to Chrystal Age Developments Group</h1>
            <p>Your premier partner in property management, real estate brokerages, and premium general contracting services. We bridge the gap between your property dreams and reality.</p>
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
            <h1>About Our Firm</h1>
            <p>Founded on principles of integrity, masterful craftsmanship, and market expertise, Apex Enterprises has grown into a multi-faceted real estate and construction powerhouse.</p>
            <p>Whether you are a tenant looking for a place to call home, a buyer searching for your forever property, or a stakeholder ready to build from the ground up, we provide unified, seamless execution across all phases of the project lifecycle.</p>
            <img src="logo.png">
        </div>
    `,
    residential: `
        <div class="page-fade">
            <h1>Residential Properties</h1>
            <p>Discover property ownership reimagined. We specialize in developing and managing premier residential estates, master-planned neighborhoods, and high-end urban condominiums.</p>
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

// Event Listeners for Nav Links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            renderPage(pageId);
        });
    });

    // Default Load Page
    renderPage('home');
});
