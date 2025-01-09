class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .navbar-black {
          background-color: black;
          animation: fadeIn 0.5s ease;
        }
        #mobileMenu {
          transform-origin: top;
          transition: all 0.3s ease-in-out;
          display: none;
          opacity: 0;
        }
        #mobileMenu.active {
          display: block;
          opacity: 1;
          animation: slideDown 0.3s ease-in-out forwards;
        }
      </style>
      <nav class="flex items-center justify-between px-4 py-2 fixed w-full top-0 left-0 z-50">
        <a href="./">
          <img src="https://avatars.githubusercontent.com/u/138057124?s=200&v=4 " class="w-8 h-8 md:w-12 md:h-12 rounded-full" alt="TravelCity Logo" />
        </a>
        <div class="hidden md:flex items-center space-x-6">
        <a href="./Newsroom.html" class="text-sm text-white hover:text-purple-400 transition-colors">Newsroom</a>
        <a href="./TravelCityYourHome.html" class="text-sm text-white hover:text-purple-400 transition-colors">TravelCity Your Home</a>
        <a href="./CommunityForum.html" class="text-sm text-white hover:text-purple-400 transition-colors">Community Forum</a>
        <a href="./about.html" class="text-sm text-white hover:text-purple-400 transition-colors">About</a>
        <a href="./help.html" class="text-sm text-white hover:text-purple-400 transition-colors">Support</a>
          <div class="relative group">
            <button 
              class="text-white hover:text-purple-400 transition-colors flex items-center"
              aria-label="Language Selection"
              role="button"
              aria-expanded="false"
              aria-controls="language-dropdown"
              aria-haspopup="true">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   width="24" 
                   height="24" 
                   viewBox="0 0 24 24" 
                   fill="none"
                   stroke="currentColor" 
                   stroke-width="2" 
                   stroke-linecap="round" 
                   stroke-linejoin="round"
                   aria-hidden="true"
                   class="lucide lucide-globe">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </button>
            
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="py-1">
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  <img src="https://flagcdn.com/w20/us.png" class="w-4 h-4 mr-2" alt="English"> English
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  <img src="https://flagcdn.com/w20/es.png" class="w-4 h-4 mr-2" alt="Spanish"> Español
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  <img src="https://flagcdn.com/w20/fr.png" class="w-4 h-4 mr-2" alt="French"> Français
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  <img src="https://flagcdn.com/w20/de.png" class="w-4 h-4 mr-2" alt="German"> Deutsch
                </a>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  <img src="https://flagcdn.com/w20/cn.png" class="w-4 h-4 mr-2" alt="Chinese"> 中文
                </a>
              </div>
            </div>
          </div>
          <button class="flex items-center">
            <img src="https://avatars.githubusercontent.com/u/98240335?v=4" alt="Profile"
              class="w-8 h-8 md:w-10 md:h-10 rounded-full" />
          </button>
        </div>
        <button 
          id="hamburgerBtn"
          class="md:hidden text-white p-2" 
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="mobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" 
               width="24" 
               height="24" 
               viewBox="0 0 24 24" 
               fill="none"
               stroke="currentColor" 
               stroke-width="2" 
               stroke-linecap="round" 
               stroke-linejoin="round"
               aria-hidden="true">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
      <div id="mobileMenu" class="md:hidden bg-white fixed top-[48px] left-0 right-0 shadow-lg p-4 z-40">
        <a href="./Newsroom.html" class="block py-2 text-sm text-gray-700 hover:bg-purple-50">Newsroom</a>
        <a href="./TravelCityYourHome.html" class="block py-2 text-sm text-gray-700 hover:bg-purple-50">TravelCity Your Home</a>
        <a href="./CommunityForum.html" class="block py-2 text-sm text-gray-700 hover:bg-purple-50">Community Forum</a>
        <a href="./about.html" class="block py-2 text-sm text-gray-700 hover:bg-purple-50">About</a>
        <a href="./help.html" class="block py-2 text-sm text-gray-700 hover:bg-purple-50">Support</a>
        <hr class="my-2">
        <div class="flex items-center space-x-4 py-2">
          <img src="https://avatars.githubusercontent.com/u/98240335?v=4" alt="Profile" class="w-8 h-8 rounded-full" />
          <span class="text-sm">My Profile</span>
        </div>
      </div>
    `;

    // Add scroll event listener
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 0) {
        navbar.classList.add('navbar-black');
      } else {
        navbar.classList.remove('navbar-black');
      }
    });

    // Add hamburger menu toggle
    const hamburgerBtn = this.querySelector('#hamburgerBtn');
    const mobileMenu = this.querySelector('#mobileMenu');

    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
      }
    });
  }
}

customElements.define('navbar-component', NavbarComponent);