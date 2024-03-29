export default function createReportObject(employeesList) {
  // Extraction department names and emp. from  employeeslist.
  const departmentNames = Object.keys(employeesList);
  const allEmployees = {};

  // Creating the allemployees object
  departmentNames.forEach((department) => {
    allEmployees[department] = [...employeesList[department]];
  });

  const getNumberOfDepartments = () => departmentNames.length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
