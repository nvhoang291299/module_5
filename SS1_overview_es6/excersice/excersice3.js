let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 
  
  const mergeArray = (courses, addedCourses) => {
    return [...courses, ...addedCourses];
  }

console.log(mergeArray(courses, addedCourses));