function comprehensiveArrayTask(arr1, arr2, arr3) {
    let mergedArray = arr1.concat(arr2);
  
    mergedArray.copyWithin(5, 0, 3);
  
    mergedArray.fill(0, 6);
  
    mergedArray.pop();
  
    mergedArray.shift();
  
    mergedArray.unshift(100, 200);
  
    mergedArray.splice(2, 2, ...arr3);
  
    let slicedArray = mergedArray.slice(-5);
  
    return slicedArray.join(",");
  }
  
  console.log(comprehensiveArrayTask([1, 2, 3], [4, 5, 6], [7, 8]));

  




  let students = ["elene", "nika", "gio"];
let grades = [85, 90, 95];

function addStudent(student, grade) {
  students.unshift(student);
  grades.unshift(grade);
  return { students, grades };
}

function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students, grades };
}

function replaceGrade(index, newGrade) {
  grades.splice(index, 1, newGrade);
  return grades;
}

function updateGrades(newGrade) {
  grades.fill(newGrade);
  return grades;
}

console.log(addStudent("David", 80));
console.log(removeLastStudent());
console.log(replaceGrade(1, 88));
console.log(updateGrades(100));
