class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="footer-links py-2">
                <ul>
                    <li><a href="/about.html" title="About page">About</a></li>
                    <li><a href="/work.html"title="Work page">Work</a></li>
                    <li><a href="/contact.html" title="Contact page">Contact</a></li>
                    <li><a href="https://www.linkedin.com/in/tiffanylmackay/" title="Linked In" target="_blank"><i class="fab fa-linkedin"></i></i></a></li>
                    <li><a href="https://www.instagram.com/tiffanyyy.tech/" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></i></a></li>
                    <li><a title="Twitter Link" href="https://twitter.com/tiffanyyy_tech" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a title="Dribbble Link" href="https://dribbble.com/tiffanyyylizzz" target="_blank"><i class="fab fa-dribbble-square"></i></a></li>
                    <li><a title="Github Link" href="https://github.com/tiffanymackay" target="_blank"><i class="fab fa-github-square"></i></a></li>
                </ul>
            </div>
            <small>
                    This website is designed and coded by <a href="https://www.linkedin.com/in/tiffanylmackay/" target="_blank">tiffany mackay</a>, and is <a href="https://github.com/tiffanymackay/Portfolio" target="_blank">open-sourced</a>.
                    <br>© 2021 Tiffany Mackay
            </small>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);