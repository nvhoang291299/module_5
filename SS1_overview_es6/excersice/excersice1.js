let div1 = document.getElementById("list1");

let courses = [ 
    { 
      id: 1, 
      title: "ReactJS Tutorial", 
      rating: 4.2, 
    }, 
    { 
      id: 2, 
      title: "Angular Tutorial", 
      rating: 2.5, 
    }, 
    { 
       id: 3, 
      title: "VueJS Tutorial", 
      rating: 3.8, 
    }, 
    { 
      id: 4, 
      title: "Java Tutorial", 
      rating: 4, 
    }, 
    { 
      id: 5, 
      title: "JavaScript Tutorial", 
      rating: 3.5, 
    }, 
  ];
let html1 = "";
let arr1 = courses.map((course) => {
    if(course.rating >= 4) {
        return html1 += `
            <div>
                <p>id: ${course.id}</p>
                <p>title: ${course.title}</p>
                <p>rating: ${course.rating}</p>
            </div>
            </br>
        `
    }
});
div1.innerHTML = html1;
