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



// we will change our list element's attributes in accordance with their initial text.

// const elementsLI = document.querySelectorAll("li");
// // console.log(elementsLI);

// // // let's check the elements and innerHTMLs:
// // elementsLI.forEach(item => console.log(item));
// // elementsLI.forEach(ele => console.log(ele.innerHTML));

// // now let's have a long function for different purposes:
// elementsLI.forEach( listItem => {
//     // console.log(listItem);
//     // console.log(listItem.innerHTML);
//     // console.log(typeof listItem.innerHTML);
//     if (listItem.innerText.includes("error")) listItem.setAttribute("class", "error");
//     if (listItem.innerText.includes("success")) listItem.setAttribute("class", "success");
//     // select the element on console and show the newly added classes on it.   
// });




// let's create a new p element on our html page and add some properties on sytle.css - uncomment

// const myElem = document.querySelector(".hello");
// console.log(myElem);
// // let's access the style attributes of our element:
// myElem.style.color = "red";
// // show the new style on console by selecting the element.
// myElem.style.fontWeight = "bold";
// myElem.style.textDecoration = "line-through";
// son iki satırdaki style özelliklerinin style.css'ten farklı olduğu, arada çizgi bulunmadığı...



// // const myBanner = document.getElementById("myBanner");
// const myBanner = document.querySelector("#myBanner");
// console.log(myBanner);
// // now, we want to add an additional class to our element.
// console.log(myBanner.classList);  // show the methods on console.
// console.log(typeof myBanner.classList);
// // html sayfasında elemente "active" sınıfı ekleyip konsolda gösterelim, sonra kaldıralım.

// myBanner.classList.add("active");
// console.log(myBanner.classList);


// ============================================================================= //
// const element = document.querySelector("#today");
// console.log(element);

// const myElement = document.createElement("p");
// // console.log(myElement);
// myElement.innerText = "Wednesday";
// console.log(myElement);

// element.appendChild(myElement);



// ============================================================================= //
// const element = document.querySelector("#btn");
// console.log(element);
// element.addEventListener("click", clickFunction);

// function clickFunction() {
//     console.log("inside clickFunction");
//     // let's change the inner text of our p element
//     document.querySelector("#para").innerText = "qqqqqq";  // show it on console...
// }

// // check/show dom events on internet.
// document.querySelector("#para").addEventListener("mouseenter", function() {
//     alert("mouse entered.");
//     // we can remove event listeners...
//     // element.removeEventListener("click", clickFunction);
// })



// ============================================================================= //
// const elementsLI = document.querySelectorAll("li");
// console.log(elementsLI);

// elementsLI.forEach( listItem => {
//     listItem.addEventListener("click", () => { console.log("clicked!!!")});

//     //başka bir yöntem.
//     listItem.addEventListener("click", clickFunct);    
// });

// function clickFunct(e) {
//     console.log(e.target.innerText);
// }




// ======================= example X ================================= //
