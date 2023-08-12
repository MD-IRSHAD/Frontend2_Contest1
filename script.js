let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
    const developers = arr.filter(employee => employee.profession === 'developer');
    console.log(developers);
}

function addData() {
  //Write your code here, just console.log
    const newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
    arr.push(newEmployee);
    console.log('Employee added:', newEmployee);

}

function removeAdmin() {
  //Write your code here, just console.log
     const nonAdminEmployees = arr.filter(employee => employee.profession !== 'admin');
     console.log('Employees without admin:', nonAdminEmployees);

}

function concatenateArray() {
  //Write your code here, just console.log
      const newEmployeesArray = [
        { id: 5, name: 'michael', age: 22, profession: 'developer' },
        { id: 6, name: 'linda', age: 21, profession: 'developer' }
      ];
      arr = arr.concat(newEmployeesArray);
      console.log('Concatenated array:', arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.

}
