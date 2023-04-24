function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.map((studentId) => studentId.id);
}

export default getListStudentIds;
