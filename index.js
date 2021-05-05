/* Your Code Here */

const createEmployeeRecord = (arr) => {
    const [firstName, familyName, title, payPerHour] = arr
    const employeeRecord = {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents:[],
        timeOutEvents:[]
    }
    return employeeRecord
}

const createEmployeeRecords = (arrayOfArrays) => {
    return arrayOfArrays.map(arr => {
        return createEmployeeRecord(arr)
    })
}

function createTimeInEvent(dateTime){
  let [date, hour] = dateTime.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
  });
  return this;
};

function createTimeOutEvent(dateTime){
    let [date, hour] = dateTime.split(' ')
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date,
    });
    return this
}

function hoursWorkedOnDate(d){
    let timeIn = this.timeInEvents.find(obj => obj.date === d)
    let timeOut = this.timeOutEvents.find(obj => obj.date === d)
    let hoursWorked = (timeOut.hour - timeIn.hour)/100
    return hoursWorked
}

function wagesEarnedOnDate(d){
    let hourlyRate = this.payPerHour
    return hourlyRate * hoursWorkedOnDate.call(this, d)
}

function findEmployeeByFirstName(arr,firstName) {
     return arr.find((obj) => obj.firstName === firstName);
}

function calculatePayroll(arr){
      return arr.reduce((acc, employee) => {
        return acc + allWagesFor.call(employee);
      }, 0);
}





/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}