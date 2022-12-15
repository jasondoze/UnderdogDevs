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

class Staff {
  constructor(growshow, teamMembers) {
    this.growshow = growshow;

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

const worker1 = new Staff(new GrowShow('OK'), ['Ronin', 'Jimbo']);
console.log(worker1);
worker1.addMembers('Forest');
console.log(worker1.growshow.location);
console.log(worker1.getGrowTeam());
worker1.addMembers('Chewy');
console.log(worker1.growshow.location);
console.log(worker1.getGrowTeam());
