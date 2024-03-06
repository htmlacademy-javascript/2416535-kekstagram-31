
// имяФункции('08:00', '17:30', '14:00', 90); // true
// имяФункции('8:0', '10:0', '8:0', 120);     // true
// имяФункции('08:00', '14:30', '14:00', 90); // false
// имяФункции('14:00', '17:30', '08:0', 90);  // false
// имяФункции('8:00', '17:30', '08:00', 900); // false

function countTime (startTime, endTime, meetTime, spanMeet) {

  startTime = startTime.split(':');
  startTime = startTime[0] * 60 + +startTime[1];
  endTime = endTime.split(':');
  endTime = endTime[0] * 60 + +endTime[1];
  meetTime = meetTime.split(':');
  meetTime = meetTime[0] * 60 + +meetTime[1];

  if (startTime > meetTime || endTime < (meetTime + spanMeet)) {
    return false;
  }
  return true;
}

console.log(countTime('8:00', '17:30', '14:00', 90));
console.log(countTime('8:0', '10:0', '8:0', 120));
console.log(countTime('14:00', '17:30', '08:0', 90));
console.log(countTime('14:00', '17:30', '08:0', 90));
console.log(countTime('8:00', '17:30', '08:00', 900));
