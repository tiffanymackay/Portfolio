class Breadcrumb extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const category = this.getAttribute('category') || 'Category';
      const categoryUrl = this.getAttribute('category-url') || '#';
      const currentPage = this.getAttribute('current-page') || 'Page Name';
  
      // Check if the current page is the category page
      const isCategoryPage = categoryUrl === '#' || currentPage === 'Category';
  
      this.innerHTML = `
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/index.html">Home</a></li>
            ${isCategoryPage ? `<li class="breadcrumb-item active" aria-current="page">${category}</li>` : `<li class="breadcrumb-item"><a href="${categoryUrl}">${category}</a></li><li class="breadcrumb-item active" aria-current="page">${currentPage}</li>`}
          </ol>
        </nav>
      `;
    }
  }
  
  customElements.define('breadcrumb-component', Breadcrumb);
  