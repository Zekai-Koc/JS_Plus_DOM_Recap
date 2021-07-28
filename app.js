// // for accessing elements there are different methods.

// // ID
// const myElement = document.getElementById("userName");
// console.log(myElement);

// // CLASS
// const elementsFromClass = document.getElementsByClassName("userTag");
// console.log(elementsFromClass);

// // TAG
// const elementsByTagName = document.getElementsByTagName("p");
// console.log(elementsByTagName);
// // open proto and show object. everything in js is an object.

// // querySelector -- ID
// // we are using css selectors.
// const elementByQuerySelector = document.querySelector("#userName");
// console.log(elementByQuerySelector);

// // querySelector -- CLASS
// // we are getting the first element on the page.
// const elementByQuerySelector2 = document.querySelector(".userTag");
// console.log(elementByQuerySelector2);

// // querySelectorAll -- CLASS
// // getting all the elements in the same class: nodelist
// const elementByQuerySelectorCLASS = document.querySelectorAll(".userTag");
// console.log(elementByQuerySelectorCLASS);

// // querySelectorAll -- TAG
// // getting all the elements in the same class: nodelist
// const elementByQuerySelectorTAG = document.querySelectorAll("p");
// console.log(elementByQuerySelectorTAG);

// // there are two main methods. which one should we use?
// // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

// const elements1 = document.getElementsByClassName("userTag");
// const elements2 = document.querySelectorAll(".userTag");

// console.log(elements1);
// console.log(elements2);
// // show the methods for each element on console.

// console.log(elements1[1]);
// console.log(elements2[1]);

// console.log(elements1[1].innerHTML);
// console.log(elements2[1].innerHTML);

// // differences:
// // querySelector is static, getElement methods are live.

// const lang_list = document.querySelector("#languages");
// console.log(lang_list);

// const langsGETELEM = document.getElementsByClassName("lang");
// const langsQUERYSE = document.querySelectorAll(".lang");

// console.log(langsGETELEM);
// console.log(langsQUERYSE);

// lang_list.innerHTML += '<li class="lang">JS</li>';

// console.log(langsGETELEM);  // 5 elements
// console.log(langsQUERYSE);  // 4 elements


// // accessing and changing an element.
// // first let's access the element.

// const element = document.querySelector("#myElement");
// console.log(element);

// element.innerText = "Hello...";
// element.innerHTML = "Hello World!"
// // let's add html text inside and check it on console.
// element.innerHTML = "<label>test</label>";
// element.innerText = "<label>test</label>";


// // example.
// // let's add these elements to our list on the html...
// const car_list = [
//     { brandName: "Mercedes"},
//     { brandName: "BMW"},
//     { brandName: "Toyota"},
//     { brandName: "Opel"},
// ];

// // first, we need to access our element:

// const listElement = document.querySelector("#cars");
// console.log(listElement);

// for (let index = 0; index < car_list.length; index++) {
//     listElement.innerHTML += `<li class="carClass">${car_list[index].brandName}</li>`;    
// }

// // we will see forEach method later. however, let's have a quick view:
// // car_list.forEach( car => {
// //     // console.log(car);

// //     listElement.innerHTML += `<li class="carClass">${car}</li>`;
// //     listElement.innerHTML += `<li class="carClass">${car.brandName}</li>`;
// // })



// const car_list = [
//     { id:0, brandName: "Mercedes"},
//     { id:1, brandName: "BMW"},
//     { id:2, brandName: "Toyota"},
//     { id:3, brandName: "Opel"},
// ];

// const comboBox = document.createElement("select");

// car_list.forEach( car => {
//     comboBox.innerHTML += `<option value="${car.id}">${car.brandName}</option>`
// });

// document.body.append(comboBox);



// // setAttribute - getAttribute

// const element = document.querySelector("#link");
// console.log(element);

// const attr = element.getAttribute("href");
// console.log(attr);
// // console.log(element.href); // this is also valid but not recomanded.

// element.setAttribute("href", "http://www.clarusway.com");
// element.innerText = "Go to ClarusWay"



videoda 1 saat 45 dakika tamam
https://lms.clarusway.com/mod/page/view.php?id=6753


