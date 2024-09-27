class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `${this.sqft} sqft: This method must be overridden.`;
  }
}
export default Building;