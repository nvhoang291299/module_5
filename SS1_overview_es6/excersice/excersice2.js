let arr2 = courses.filter((course) => course.rating < 4);

let arr3 = arr2.map((element) => (`${element.id} - ${element.title} - ${element.rating}`));
console.log(arr3);