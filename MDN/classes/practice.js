class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  name() {
    return this._name;
  }

  remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

class Surgeon extends Nurse {
  constructor(name, specialty) {
    super(name);
    this._specialty = specialty;
  }
  specialty() {
    return this._specialty;
  }
  addSpecialty(newSpecialty) {
    this._specialty.push(newSpecialty);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays());
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications());
console.log(nurseOlynyk.name());

const surgeonMalek = new Surgeon('Malek', ['Orthopaedic']);
surgeonMalek.takeVacationDays(2);
console.log(surgeonMalek.remainingVacationDays());
surgeonMalek.addCertification('Prosthetics');
console.log(surgeonMalek.certifications());
surgeonMalek.addSpecialty('Maxofacial');
console.log(surgeonMalek.specialty());
