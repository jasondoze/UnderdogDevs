/*
You're fixing an Electrocardiogram program that captures heart-rates. 
The problem is that it doesn't indicate whether the rates are normal or 
bad rhythms (Arrhythmic). If a heart-rate is less that 60 beats-per-minute, 
we say that it is Bradycardic, latin for 'slow heart'. If the heart-rate is 
greater than 100, we say that it is Tachycardic, also latin meaning 'fast heart'. 
Normal heart rates are in between.

Your job is to fix the diagnoseRates function so that it can take an array 
of heart-rates and return a new array where each rate is formatted into a 
string with the corresponding diagnosis along with the rate.

For example, the data [ 42, 77, 103 ] would return 
["Bradycardia: 42", "Normal: 77", "Tachycardia: 103"]. 
See if you can fix diagnoseRates and help improve patient outcomes!
*/
function diagnoseRates(data) {
  let lowHR = 'Bradycardia:';
  let highHR = 'Tachycardia:';
  let normal = 'Normal:';

  for (var i = 0; i < data.length; i++) {
    let currentPatient = data[i];
    if (currentPatient < 60) {
      console.log(`${lowHR} ${currentPatient}`);
    } else if (currentPatient > 100) {
      console.log(`${highHR} ${currentPatient}`);
    } else {
      console.log(`${normal} ${currentPatient}`);
    }
  }
}
diagnoseRates([63, 117, 52, 121, 67, 43]);
