class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="footer-links py-2">
                <ul> 
                <li class="nav-item">
                <a class="nav-link" title="Strategic" href="/index.html">Case Studies</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" title="About page" href="/about.html">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" title="Coding page" href="/coding.html">Coding</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" title="Coding page" href="/design.html">Design</a>
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
            </div>
            <small>
                    This website is designed and coded by <a href="https://www.linkedin.com/in/tiffanylmackay/" target="_blank">Tiffany Mackay</a>, and is <a href="https://github.com/tiffanymackay/Portfolio" target="_blank">open-sourced</a>.
                    <br>© 2021 Tiffany Mackay
            </small>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);