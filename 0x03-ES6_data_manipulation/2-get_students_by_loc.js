const getStudentsByLocation = (studentlist, city) => {
  const students = studentlist.filter((student) => student.location === city);
  return students;
};

export default getStudentsByLocation;
