const SAVED_OPTIONS_KEY = "accessibility_options";

export default class AccessibilityWidget {
  constructor() {
    this._cacheElements();
    this._addListeners();
    this._loadOptions();
  }

  _cacheElements() {
    this.accButton = document.querySelector(".js-acc-widget-button");
    this.menu = document.querySelector(".js-acc-menu");
    this.actionButtons = this.menu.querySelectorAll(".js-acc-action-button");
    this.closeButton = this.menu.querySelector(".js-close-button");
    this.resetButton = this.menu.querySelector(".js-reset-button");
    this.fontButtons = this.menu.querySelectorAll(".js-font-adjust-button");
    this.fontSizeEl = this.menu.querySelector(".js-font-size");
    this.bigCursorButton = this.menu.querySelector(".js-big-cursor-button");
    this.bigCursor = document.querySelector(".js-big-cursor");
  }

  _addListeners() {
    this._handleMouseMove = this._handleMouseMove.bind(this);

    this.accButton.addEventListener("click", () => this._toggleMenu());
    this.actionButtons.forEach((button) =>
      button.addEventListener("click", (e) => this._handleActionButtonClick(e))
    );
    this.closeButton.addEventListener("click", () => this._toggleMenu());
    this.resetButton.addEventListener("click", () => this._resetOptions());
    this.fontButtons.forEach((button) =>
      button.addEventListener("click", (e) => this._handleFontAdjust(e))
    );
    this.bigCursorButton.addEventListener("click", () =>
      this._toggleBigCursor()
    );
  }

  _toggleMenu() {
    this.menu.classList.toggle("active");
  }

  _resetOptions() {
    document.documentElement.removeAttribute("class");
    const activeButtons = this.menu.querySelectorAll(
      ".js-acc-action-button.active"
    );

    activeButtons.forEach((button) => {
      const { action } = button.dataset;

      button.classList.remove("active");

      if (action === "big-cursor") this._toggleBigCursor();
      if (action === "dysexia-font") this._toggleDyslexiaFont(false);
    });

    document.querySelector("html").removeAttribute("style");
    this.fontSizeEl.innerText = "100%";

    this._saveOptions();
  }

  // Sesison storage

  _loadOptions() {
    if (!sessionStorage) return;

    const options = JSON.parse(sessionStorage.getItem(SAVED_OPTIONS_KEY));

    if (!options) return;

    options.forEach((option) => {
      const button = Array.from(this.actionButtons).find(
        (button) => button.dataset.action === option
      );

      const { action, addsBodyClass, addsHtmlClass } = button.dataset;

      button.classList.add("active");

      if (addsBodyClass) document.body.classList.add(action);
      if (addsHtmlClass) document.documentElement.classList.add(action);

      if (action === "big-cursor") this._toggleBigCursor();
      if (action === "dyslexia-font") this._toggleDyslexiaFont(true);
    });
  }

  _saveOptions() {
    if (!sessionStorage) return;

    const activeOptionButtons = this.menu.querySelectorAll(
      ".js-acc-action-button.active"
    );

    const actionNames = Array.from(activeOptionButtons).map(
      (options) => options.dataset.action
    );

    if (actionNames.length)
      sessionStorage.setItem(SAVED_OPTIONS_KEY, JSON.stringify(actionNames));
    else sessionStorage.removeItem(SAVED_OPTIONS_KEY);
  }

  _handleActionButtonClick(e) {
    const { action, addsBodyClass, addsHtmlClass } = e.currentTarget.dataset;

    const section = e.target.closest(".acc-menu-section");
    const { groupName } = section.dataset;

    const htmlClasslist = document.documentElement.classList;
    const bodyClasslist = document.body.classList;

    if (groupName === "color") {
      const activeNodes = Array.from(
        section.querySelectorAll(".js-acc-action-button.active")
      ).filter((node) => node !== e.currentTarget);

      activeNodes.forEach((option) => {
        option.classList.remove("active");
        const { action } = option.dataset;

        if (bodyClasslist.contains(action)) bodyClasslist.remove(action);
        if (htmlClasslist.contains(action)) htmlClasslist.remove(action);
      });
    }

    if (addsBodyClass) bodyClasslist.toggle(action);
    if (addsHtmlClass) htmlClasslist.toggle(action);

    e.target.classList.toggle("active");

    if (action === "dyslexia-font")
      this._toggleDyslexiaFont(e.target.classList.contains("active"));

    this._saveOptions();
  }

  _handleFontAdjust(e) {
    const { smaller } = e.currentTarget.dataset;

    const html = document.querySelector("html");
    const fontSize = parseInt(this.fontSizeEl.innerText, 10);

    if (fontSize >= 10 || fontSize <= 200) {
      html.style.fontSize = `${smaller ? fontSize - 10 : fontSize + 10}%`;
      this.fontSizeEl.innerText = `${smaller ? fontSize - 10 : fontSize + 10}%`;
    }
  }

  _handleMouseMove(e) {
    this.bigCursor.style.transform = `translate(${e.clientX - 12}px, ${
      e.clientY - 12
    }px)`;
  }

  _toggleDyslexiaFont(active) {
    const root = document.querySelector(":root");

    root.style.setProperty(
      "--font-family-serif",
      active ? '"opendyslexic3regular", comic-sans' : '"Cormorant", serif'
    );
  }

  _toggleBigCursor() {
    const isActive = this.bigCursor.classList.contains("active");

    this.bigCursor.classList.toggle("active");
    document.body.classList.toggle("has-big-cursor", !isActive);

    if (isActive)
      document.removeEventListener("mousemove", this._handleMouseMove);
    else document.addEventListener("mousemove", this._handleMouseMove);
  }
}
