export default function createIteratorObject(report) {
  function* empIterator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
  return empIterator();
}
