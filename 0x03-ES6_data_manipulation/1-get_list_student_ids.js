export default function getListStudentsIds(studetsobject) {
  if (studetsobject instanceof Array) {
    return studetsobject.map((student) => student.id);
  }
  return [];
}
