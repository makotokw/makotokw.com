class Host {
  constructor(private location: Location) {
  }

  get isDebugHost(): boolean {
    return !!this.location.hostname.match(/^(localhost)$/);
  }
}

export default new Host(window.location);
