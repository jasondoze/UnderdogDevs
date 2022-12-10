class GrowShow {
  constructor(location, squareFt) {
    this.location = location;
    this.squareFt = squareFt;
  }
  getLocale() {
    return this.location;
  }
  getSquareFt() {
    return this.squareFt;
  }
}

class Staff extends GrowShow {
  constructor(location, teamMembers) {
    super(location);

    this.teamMembers = teamMembers;
  }
  getGrowTeam() {
    return this.teamMembers;
  }
  addMembers(memberName) {
    this.teamMembers.push(memberName);
  }
}

const grow1 = new GrowShow('AZ', 8500);
console.log(grow1.getLocale());
console.log(grow1.getSquareFt());

const worker1 = new Staff('OK', ['Ronin', 'Jimbo']);
worker1.addMembers('Forest');
console.log(worker1.getGrowTeam());
