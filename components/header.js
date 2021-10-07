class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <ul class="navbar-nav">
            <li class="nav-item px-1">
            <a class="nav-link" title="About page" href="/about.html">About</a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Work page" href="/work.html">Work</a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Contact page" href="/contact.html">Contact</a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Linked In Link" href="https://www.linkedin.com/in/tiffanylmackay/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Instagram Link" href="https://www.instagram.com/tiffanyyy.tech/" target="_blank"><i class="fab fa-instagram"></i></a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Twitter Link" href="https://twitter.com/tiffanyyy_tech" target="_blank"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Github Link" href="https://github.com/tiffanymackay" target="_blank"><i class="fab fa-github-square"></i></a>
            </li>
        </ul> 
      `;
    }
  }
  
  customElements.define('header-component', Header);