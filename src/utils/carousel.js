/**
 * @param {Node} target The outer .carousel shelf
 */
export default class Carousel {
  constructor(target) {
    this.carousel = target;

    if (!this.carousel) return;

    this.index = 0;
    this.windowWidth = window.innerWidth;

    this._cacheElements();
    this._bindHandlers();
  }

  _cacheElements() {
    this.list = this.carousel.querySelector(".js-carousel-list");
    this.listItems = this.list.querySelectorAll(".js-carousel-list-item");
    this.prevButton = this.carousel.querySelector(".js-prev-button");
    this.nextButton = this.carousel.querySelector(".js-next-button");
  }

  _bindHandlers() {
    this.prevButton?.addEventListener("click", () => this._showPreviousSlide());
    this.nextButton?.addEventListener("click", () => this._showNextSlide());

    if (window) window.addEventListener("resize", () => this._handleResize());
  }

  _updateButtonState() {
    this.prevButton.classList.toggle("hidden", this.index === 0);
    this.nextButton.classList.toggle(
      "hidden",
      this.index === this.listItems.length - 1
    );
  }

  _handleResize() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      if (window.innerWidth !== this.windowWidth) {
        this._resetScrollPosition();
        this.windowWidth = window.innerWidth;
        this.index = 0;
      }
    }, 300);
  }

  _showPreviousSlide() {
    if (this.index === 0) return;

    this.list.scrollBy({ left: -this.windowWidth, behavior: "smooth" });
    this.index--;

    this._updateButtonState();
  }

  _showNextSlide() {
    if (this.index === this.listItems.length - 1) return;

    this.list.scrollBy({ left: this.windowWidth, behavior: "smooth" });
    this.index++;

    this._updateButtonState();
  }

  _resetScrollPosition() {
    this.list.scrollTo({ left: 0, behavior: "smooth" });
  }
}
