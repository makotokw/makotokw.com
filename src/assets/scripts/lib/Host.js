class Host {
  constructor() {
    this.location = window.location;
  }

  /**
   * @returns {string}
   */
  get origin() {
    return this.location.origin;
  }

  /**
   * @returns {boolean}
   */
  get isDebugHost() {
    return !!this.location.hostname.match(/^(localhost)$/);
  }
}

export default new Host();
