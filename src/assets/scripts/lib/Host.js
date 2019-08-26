class Host {
  constructor() {
    this.hostname = window.location.hostname;
  }

  /**
   * @returns {boolean}
   */
  get isDebugHost() {
    return !!this.hostname.match(/^(localhost)$/);
  }
}

export default new Host();
