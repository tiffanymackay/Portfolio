class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <ul class="navbar-nav">
      
        <li class="nav-item">
        <a class="nav-link" title="Strategic" href="/index.html">Case Studies</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" title="About page" href="/about.html">About</a>
        </li>
            <li class="nav-item">
              <a class="nav-link" title="dribbble page" href="https://dribbble.com/tiffanyyylizzz" target="_blank"><i class="fa-brands fa-dribbble-square"></i></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" title="Linked In Link" href="https://www.linkedin.com/in/tiffanylmackay/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" title="Instagram Link" href="https://www.instagram.com/tiffanyyylizzz/" target="_blank"><i class="fab fa-instagram"></i></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" title="Github Link" href="https://github.com/tiffanymackay" target="_blank"><i class="fab fa-github-square"></i></a>
            </li>
        </ul> 
      `;
    }
  }
  
  customElements.define('header-component', Header);