// Navigation System for NHC SMP Website
// This file handles the dynamic generation of navigation bars

class NavigationManager {
    constructor() {
        this.currentPage = this.detectCurrentPage();
        this.basePath = this.getBasePath();
    }

    // Detect which page we're currently on
    detectCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('/about/')) return 'about';
        if (path.includes('/community/')) return 'community';
        if (path.includes('/gettingstarted/')) return 'gettingstarted';
        if (path.includes('/rules/')) return 'rules';
        if (path.includes('/gallery/')) return 'gallery';
        return 'home';
    }

    // Get the base path for navigation links
    getBasePath() {
        return this.currentPage === 'home' ? '' : '../';
    }

    // Generate the desktop navigation
    generateDesktopNav() {
        const basePath = this.basePath;
        const currentPage = this.currentPage;

        // Special handling for home page navigation
        if (currentPage === 'home') {
            return `
                <nav class="desktop_navbar">
                    <a href="#"><img class="desktop_navbar_logo_img" src="media/logo_small.png" alt="logo" /></a>
                    <!--       <a href="https://wiki.example.com/" class="desktop_navbar_link">Wiki</a> -->
                    <a href="#discord" class="desktop_navbar_link scroll">Discord</a>
                    <a href="community/index.html" class="desktop_navbar_link">Community</a>
                    <a href="about/index.html" class="desktop_navbar_link">About Us</a>
                    <a href="gettingstarted/index.html" class="desktop_navbar_link">Getting Started</a>
                    <a href="rules/index.html" class="desktop_navbar_link">Server Rules</a>
                    <a href="gallery/index.html" class="desktop_navbar_link">Gallery</a>
                    <div class="desktop_navbar_link2_div">
                        <a href="#join" class="desktop_navbar_link2 scroll">Join Us!</a>
                    </div>
                </nav>
            `;
        }

        // Special handling for community page navigation
        if (currentPage === 'community') {
            return `
                <nav class="desktop_navbar">
                    <a href="${basePath}index.html"><img class="desktop_navbar_logo_img" src="${basePath}media/logo_small.png" alt="logo" /></a>
                    <!--       <a href="https://wiki.example.com/" class="desktop_navbar_link">Wiki</a> -->
                    <a href="${basePath}index.html#discord" class="desktop_navbar_link">Discord</a>
                    <a href="#community" class="desktop_navbar_link scroll current">Community</a>
                    <a href="${basePath}about/index.html" class="desktop_navbar_link">About Us</a>
                    <a href="${basePath}gettingstarted/index.html" class="desktop_navbar_link">Getting Started</a>
                    <a href="${basePath}rules/index.html" class="desktop_navbar_link">Server Rules</a>
                    <a href="${basePath}gallery/index.html" class="desktop_navbar_link">Gallery</a>
                    <div class="desktop_navbar_link2_div">
                        <a href="${basePath}index.html#join" class="desktop_navbar_link2">Join Us!</a>
                    </div>
                </nav>
            `;
        }

        // For all other pages
        return `
            <nav class="desktop_navbar">
                <a href="${basePath}index.html"><img class="desktop_navbar_logo_img" src="${basePath}media/logo_small.png" alt="logo" /></a>
                <!--       <a href="https://wiki.example.com/" class="desktop_navbar_link">Wiki</a> -->
                <a href="${basePath}index.html#discord" class="desktop_navbar_link">Discord</a>
                <a href="${basePath}community/index.html" class="desktop_navbar_link ${currentPage === 'community' ? 'current' : ''}">Community</a>
                <a href="${basePath}about/index.html" class="desktop_navbar_link ${currentPage === 'about' ? 'current' : ''}">About Us</a>
                <a href="${basePath}gettingstarted/index.html" class="desktop_navbar_link ${currentPage === 'gettingstarted' ? 'current' : ''}">Getting Started</a>
                <a href="${basePath}rules/index.html" class="desktop_navbar_link ${currentPage === 'rules' ? 'current' : ''}">Server Rules</a>
                <a href="${basePath}gallery/index.html" class="desktop_navbar_link ${currentPage === 'gallery' ? 'current' : ''}">Gallery</a>
                <div class="desktop_navbar_link2_div">
                    <a href="${basePath}index.html#join" class="desktop_navbar_link2">Join Us!</a>
                </div>
            </nav>
        `;
    }

    // Generate the mobile navigation
    generateMobileNav() {
        const basePath = this.basePath;
        const currentPage = this.currentPage;

        // Special handling for home page mobile navigation
        if (currentPage === 'home') {
            return `
                <div class="mobile_navbar">
                    <a href="#" class="mobile_navbar_logo_img_a"><img class="mobile_navbar_logo_img" src="media/logo_small.png" alt="logo" /></a>
                    <div id="mobile_navbar_links">
                        <!--           <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="https://wiki.example.com/">Wiki</a> -->
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="#discord">Discord</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="community/index.html">Community</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="about/index.html">About Us</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="gettingstarted/index.html">Getting Started</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="rules/index.html">Server Rules</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="gallery/index.html">Gallery</a>
                    </div>
                    <div class="icon" onclick="mobile_navbar_link_hider()">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            `;
        }

        // Special handling for community page mobile navigation
        if (currentPage === 'community') {
            return `
                <div class="mobile_navbar">
                    <a href="#" class="mobile_navbar_logo_img_a"><img class="mobile_navbar_logo_img" src="${basePath}media/logo_small.png" alt="logo" /></a>
                    <div id="mobile_navbar_links">
                        <!--           <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="https://wiki.example.com/">Wiki</a> -->
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}index.html#discord">Discord</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="#">Community</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}about/index.html">About Us</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}gettingstarted/index.html">Getting Started</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}rules/index.html">Server Rules</a>
                        <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}gallery/index.html">Gallery</a>
                    </div>
                    <div class="icon" onclick="mobile_navbar_link_hider()">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            `;
        }

        // For all other pages
        return `
            <div class="mobile_navbar">
                <a href="#" class="mobile_navbar_logo_img_a"><img class="mobile_navbar_logo_img" src="${basePath}media/logo_small.png" alt="logo" /></a>
                <div id="mobile_navbar_links">
                    <!--           <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="https://wiki.example.com/">Wiki</a> -->
                    <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}index.html#discord">Discord</a>
                    <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}community/index.html">Community</a>
                    <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}about/index.html">About Us</a>
                    <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}gettingstarted/index.html">Getting Started</a>
                    <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}rules/index.html">Server Rules</a>
                    <a class="mobile_navbar_link" onclick="mobile_navbar_link_hider()" href="${basePath}gallery/index.html">Gallery</a>
                </div>
                <div class="icon" onclick="mobile_navbar_link_hider()">
                    <i class="fa fa-bars"></i>
                </div>
            </div>
        `;
    }

    // Initialize navigation on page load
    init() {
        // Insert desktop navigation
        const desktopNavContainer = document.getElementById('desktop-nav-container');
        if (desktopNavContainer) {
            desktopNavContainer.innerHTML = this.generateDesktopNav();
        }

        // Insert mobile navigation
        const mobileNavContainer = document.getElementById('mobile-nav-container');
        if (mobileNavContainer) {
            mobileNavContainer.innerHTML = this.generateMobileNav();
        }

        // Define the mobile navigation toggle function globally
        window.mobile_navbar_link_hider = function() {
            var x = document.getElementById("mobile_navbar_links");
            if (x.style.display === "flex") {
                x.style.display = "none";
            } else {
                x.style.display = "flex";
            }
        };
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const navManager = new NavigationManager();
    navManager.init();
});

// Export for manual initialization if needed
window.NavigationManager = NavigationManager;
