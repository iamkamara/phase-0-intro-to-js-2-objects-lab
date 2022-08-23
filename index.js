// Write your solution in this file!
const employee = {
    name: "kamara",
    streetAddress: "kirinyaga"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]:value,
    };
}
const employeeOne= updateEmployeeWithKeyAndValue(employee, "name","Sam");
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const employeeTwo = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress","12 Broadway");
function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj.name;
    return newObj;
}
const newEmployee = deleteFromEmployeeByKey(employee, "name");
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
const emoloyeeNew = destructivelyDeleteFromEmployeeByKey(employee, "name"); 
const employeeNew = destructivelyDeleteFromEmployeeByKey(employee, "name");