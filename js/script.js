const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1:

var cat = {
    complain: function(){
        console.log("Meow!");
    }
}
cat.complain();


// Question 2:
var heading = document.querySelector("h3");
heading.innerHTML = ("Updated heading");

// Question 3:
heading.style.fontSize = "2em";

// Question 4:
heading.classList.add("subheading");

// Question 5:
var allParagraphs = document.querySelectorAll("p");

for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].style.color = "red";
}

// Question 6:
var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7:
function question7list(list){
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}


question7list(cats);
/*const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
*/

// Question 8
function createCats(cats){
    
}

// did not know how to do this task
