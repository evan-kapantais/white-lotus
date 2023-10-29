export default class Menu {
  constructor() {
    document.body.classList.remove("modal-open");

    this._cacheElements();
    this._bindHandlers();
  }

  _cacheElements() {
    this.menuButton = document.querySelector(".js-menu-button");
    this.menu = document.querySelector(".js-menu");
    this.closeButton = this.menu.querySelector(".js-close-button");
  }

  _bindHandlers() {
    this.menuButton?.addEventListener("click", () => this._openModal());
    this.closeButton?.addEventListener("click", () => this._closeModal());
    document?.addEventListener("keydown", (e) => this._handleKeyDown(e));
  }

  _openModal() {
    this.menu.classList.add("active");
    document.body.classList.add("modal-open");
  }

  _closeModal() {
    this.menu.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  _handleKeyDown(e) {
    if (e.key === "Escape") this._closeModal();
  }
}
