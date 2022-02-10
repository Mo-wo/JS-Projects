//DOM Content Loaded vs window.onload
document.addEventListener('DOMContentLoaded', function(){
    
    //Querying The DOM

    // // Get Element by Id
    // var project = document.getElementById('projects');

    // //Get Elements by Classname
    // var skills = document.getElementsByClassName('skills-wrapper');
    // console.log(skills);
    // console.log(skills[3]);

    // // Check if a value is an array
    // console.log(Array.isArray(skills));

    // //Check if value is an array and convert it to an array if answer is false
    // console.log(Array.isArray(Array.from(skills)));

    // //Note:forEach is a method for arrays
    // Array.from(skills).forEach(function(item){
    //     console.log(item);
    // });

    // //Get Elements by Tagname
    // var sections = document.getElementsByTagName('section');
    // console.log(sections[1]);

    // //Query Selector
    // var skills = document.querySelector('#skills');
    // console.log(skills);

    // var css = document.querySelector('.skills-container .skills-wrapper:nth-child(2) .logo-desc');
    // console.log(css);

    // //Query SelectorAll
    // //First Example
    // var mySkills = document.querySelectorAll('.skills-container .skills-wrapper .logo-desc');
    // console.log(mySkills);
    // Array.from(mySkills).forEach(function(mySkills){
    //     console.log(mySkills);
    // });

    // //Second Example
    // var sWrapper = document.querySelectorAll('.skills-container .skills-wrapper');
    // console.log(sWrapper);
    // Array.from(sWrapper).forEach(function(sWrapper){
    //     console.log(sWrapper);
    // });
    //Querying The DOM End-------------------------------------------------


    // //Editing The DOM-----------------------------------
    // //Editing the DOM text-content
    // var mySkills = document.querySelectorAll('.skills-container .skills-wrapper .logo-desc');
    // console.log(mySkills);

    // mySkills.forEach(function(mySkills){
    //     console.log(mySkills.textContent);
    //     mySkills.textContent += "testing";
    //     // mySkills.textContent += '<p>Books and more books...</p>';
    // });
    // // Array.from(mySkills).forEach(function(mySkills){
    // //     console.log(mySkills);
    // // });

    // //Editing the DOM innerHTML
    // var about = document.querySelector('.about');
    // console.log(about);
    // console.log(about.innerHTML);
    // console.log(about.textContent);
    // about.innerHTML += '<h2>Books and more books...</h2>';
    // about.innerHTML += '<p>Books and more books...</p>';


    // var aboutMe = document.querySelector('.about p');
    // console.log(aboutMe);
    // console.log(aboutMe.innerHTML);
    // console.log(aboutMe.textContent);
    // about.innerHTML += '<h2>Books and more books...</h2>';
    // aboutMe.innerHTML += '<p>Books and more books...</p>';

    // //DOM Nodes-----------------------------------
    // var projects = document.querySelector('#projects');
    // console.log(projects);
    // console.log('#projects node type is:',projects.nodeType);
    // console.log('#projects node name is:',projects.nodeName);
    // console.log('#projects has child nodes:',projects.hasChildNodes());

    // var clonedProjects = projects.cloneNode(true);
    // console.log(clonedProjects);

    // var clonedProjects = projects.cloneNode(false);
    // console.log(clonedProjects);

    //Traversing the DOM Nodes (Parent-Child) and vice-versa-----------------------------------
    //Child to Parent
    // var projects = document.querySelector('#projects');
    // console.log(projects);
    // console.log('the parent node is:',projects.parentNode);
    // console.log('the parent element is:',projects.parentElement);
    // console.log('the parent element node name is:',projects.parentElement.nodeName);
    // console.log('the grandparent element is:',projects.parentElement.parentElement);
    // console.log('the grandparent element node name is:',projects.parentElement.parentElement.nodeName);
    // console.log('the child node is:',projects.childNodes);
    // projects.childNodes.forEach(function(projects){
    //     console.log(projects.nodeName)
    // });

    //Parent to Child
    // var projects = document.querySelector('#projects');
    // console.log(projects);
    // console.log('the child node is:',projects.childNodes);
    // console.log('the child node is:',projects.children);

    //Sibling to Sibling
    // var projects = document.querySelector('#projects');
    // console.log(projects);
    // console.log('the next sibling is:',projects.nextSibling);
    // console.log('the next element sibling is:',projects.nextElementSibling);

    // console.log('the previous sibling is:',projects.previousSibling);
    // console.log('the previous element sibling is:',projects.previousElementSibling);

    // projects.previousElementSibling.querySelector('li').innerHTML += '<br/> Something to see'

    //DOM Events & Removing Content From the DOM
    //Onclick Event
    // var view = document.querySelector('.about-links');
    // console.log(view);
    // view.addEventListener('click', function(e){
    //     console.log(e.target);
    //     console.log(e);
    // });

    //Onclick and Removing Content
    // var btn = document.querySelector('.project-card button');
    // console.log(btn);
    // btn.addEventListener('click', function(e){
    //     const card = e.target.parentElement
    //     console.log(e.target.parentElement)
    //     console.log(card.parentNode)
    //     card.parentNode.removeChild(card)
    // })

    // //Prevent Default Behaviour
    // var link = document.querySelector('nav li:nth-child(2)')
    // console.log(link)
    // link.addEventListener('click', function(e){
    //     e.preventDefault();
    // })

    // //Event Bubbling
    // var links = document.querySelector('.card-wrapper')
    // console.log(links)
    // links.addEventListener('click', function(e){
    //     if(e.target.className == 'delete'){
    //         var card = e.target.parentElement
    //         links.removeChild(card);
    //     }
    // })

    //Submit Event on Forms
    // console.log(document.forms)
    // console.log(document.forms.textContent)
    // var addForm = document.forms['testing'] 
    // addForm.addEventListener('submit',function(e){
    //     e.preventDefault();
    //     const value = addForm.querySelector('input[type="text"]').value;
    //     console.log(value);
    // })

    // //Creating Elements and Placing them on the DOM
    // var addForm = document.forms['testing'] 
    // addForm.addEventListener('submit',function(e){
    //     e.preventDefault();
    //     const value = addForm.querySelector('input[type="text"]').value;
    //     console.log(value);

    //     //Create Elements
    //     let wrapper = document.createElement('div')
    //     let image = document.createElement('img')
    //     let projectname = document.createElement('span')
    //     let linebreak = document.createElement('br')
    //     let tech = document.createElement('span')
    //     let remove = document.createElement('button')

    //     //Content
    //     projectname.textContent = value
    //     tech.textContent = 'HTML, CSS & JS'
    //     remove.textContent = 'Delete'

    //     //Attribute
    //     image.setAttribute('src', './images/projects.jpg')
    //     image.setAttribute('alt', 'projects')

    //     //Applying Styles
    //     image.style.backgroundImage = "url('./images/projects.jpg')"

    //     //Retrieve and add classes
    //     wrapper.className ="project-card"
    //     image.classList.add('project-img')
    //     projectname.classList.add('font-bold')
    //     remove.classList.add('delete')

        


    //     //Append to Dom
    //     wrapper.appendChild(image)
    //     wrapper.appendChild(projectname)
    //     wrapper.appendChild(linebreak)
    //     wrapper.appendChild(tech)
    //     wrapper.appendChild(remove)
    //     links.appendChild(wrapper)

    // })

    //Attributes
    // let img = document.querySelector('.card-wrapper img:first-child')
    // console.log(img)

    ////Check for the attribute value of an element
    // console.log(img.getAttribute('src'))
    // console.log(img.getAttribute('alt'))

    ////Change the attribute value of an element
    // console.log(img.setAttribute('src', './images/tailwind.png'))

    ////Check if an element has an attribute
    // console.log(img.hasAttribute('id'))

    ////Remove the attribute of an element
    // console.log(img.removeAttribute('src'))

    // Change Event
    // Hide Element
    // let links = document.querySelector('.card-wrapper')
    // let hideBox = document.querySelector('#hide')
    // hideBox.addEventListener('change', function(e){
    //      if (hideBox.checked){
    //         links.style.display = 'none'
    //     }else{
    //         links.style.display = 'initial'
    //     }
    // })

    //Create Search Filter
//     let links = document.querySelector('.card-wrapper')
//     console.log(links)
//     let searchBar = document.forms['search'].querySelector('input')
//     console.log(searchBar)
//     searchBar.addEventListener('keyup', function(e){
//         let term = e.target.value.toLowerCase()
//         let cards = links.getElementsByClassName('project-card')
//         Array.from(cards).forEach(function(cards){
//         let techStack = cards.lastElementChild.textContent
//             if (techStack.toLowerCase().indexOf(term) != -1){
//                 cards.style.display = 'block'
//             }else{
//                 cards.style.display = 'none'
//             }
//         })
//     })
//     //Tabbed Content

//     //ES6
//     //
//     //Default Parameter
//     function log(userName = 'Anas'){
//         console.log(userName)
//     } 
//     log('Mowo')
//     log('Vicky')
//     log()

//     //Spread Operator
//     var nums = [1,2,3]
//     function addNums(a,b,c){
//         console.log(a+b+c)    
//     }
//     addNums(...nums)

//     //Template Strings
//     function tempPrac(name='Mowo', age=24){
//         console.log(`Hello, my name is ${name} and I will be ${age} soon`)
//     } 
//     tempPrac()
//     tempPrac('Stella', 34)
    
//     //New Strings Methods
//     //Repeat
//     var str = 'YaaAAAAaaay!!!'
//     console.log(str.repeat(10)) 
    
//     //StartsWith
//     var str = 'Hello!!!'
//     console.log(str.startsWith('Hel')) 
//     console.log(str.startsWith('lo'))
//     console.log(str.startsWith('lo', 3)) 

//     //StartsWith
//     var str = 'Hello!!!'
//     console.log(str.endsWith('Hel')) 
//     console.log(str.endsWith('!!!'))
//     console.log(str.endsWith('llo', 5)) 
//     console.log(str.endsWith('!!', str.length-1)) 

//     //Includes
//     var str = 'Hello!!!'
//     console.log(str.includes('Hel')) 
//     console.log(str.includes('0!!')) 
// //---------------------------------------------------------------------------------------

//     //Object Literals
//     //ES5
//     var name = 'Mabel'
//     var techStack ='MongoDB'
//     var yearsOfExp = 5

//     var techSis = {
//         techName: name,
//         proficiency: techStack,
//         Exp: yearsOfExp,
//         code: function(x=7){
//             console.log(`You have been coding for ${x}  years`)
//         }
//     }
//     console.log(techSis.proficiency)
//     techSis.code(techSis.Exp)
//     techSis.code()


//     // ES6
//     var techSis = {
//         name, 
//         techStack, 
//         yearsOfExp,
//         code (x = 9){
//             console.log(`${name} has been coding for ${x} years`)
//         }
//     }
//     console.log(techSis.name)
//     console.log(techSis.techStack)
//     techSis.code(techSis.yearsOfExp)
//     techSis.code()

// // ----------------------------------------------------------------------------------------
//     //Arrow Functions(Fat arrows)
//     //ES5
//     var coderSlang = function(){
//         console.log(`TechBro and TechSis`)
//     }
//     coderSlang()

//     // ES6
//     var coderCamps = () => {
//         console.log(`freeCodeCamp, Codecademy, Udemy and Udacity`)
//     }
//     coderCamps()

//     //Oneline Code Block
//     var coderCamps = (name) => console.log(`${name} used freeCodeCamp and Udacity`)
//     coderCamps('Esther')

//     //One Parameter
//     var coderCamps = name => console.log(`${name} used Udemy and Codecademy`)
//     coderCamps('Precious')

//     //Lexical
//     //ES5
//     var coder ={
//         name:'Temmy',
//         code(x){
//             var _this = this
//             window.setInterval(function(){
//                 if (x > 0){
//                     console.log(this.name + " coded today")
//                     x--
//                 }
//             },1000)
//         }
//     } 
//     coder.code(1)

//     //ES6
//     var coder ={
//         name:'Temmy',
//         code(x){
//             window.setInterval(() => {
//                 if (x > 0){
//                     console.log(this.name + " coded today")
//                     x--
//                 }
//             },1000)
//         }
//     } 
//     coder.code(1)
// //------------------------------------------------------------------------------

//     //Sets (Eliminates Duplicates as it only used to store unique values)
//     var stacks = new Set()

//     //Add Method
//     stacks.add('HTML').add('React').add('MongoDB').add('HTML and CSS')
//     console.log(stacks)
//     Array.from(stacks).forEach(function(stack){
//         console.log(`I can use ${stack}`)
//     })

//     //Size Method
//     console.log('I can use'  + stacks.size + ' techStacks')

//     //Delete value from Set
//     console.log(stacks.delete('MongoDB'))
//     console.log(`I can only use ` + stacks.size + ' techStacks')
//     //Delete entire set
//     stacks.clear()
//     console.log(`I can use ` + stacks.size + ' techStacks')
//     //Has Method
//     console.log(stacks.has('MongoDB'))
//     console.log(stacks.has('HTML'))

//     //Removing Duplicates
//     var coderGang = ['Jessica', 'Mowo', 'Enejo', 'Andrew', 'Precious', 'Jessica', 'Mowo', 'Temmy', 'Opeyemi', 'Anastacia', 'Peace', 'Ada', 'Omotola', 'Esther', 'Vicky', 'Mowo', 'Michael', 'Temmy', 'Musliyu', 'Sharma', 'Becky', 'Queen', 'Ochi', 'Jessica', 'Jessica', 'Jessica', 'Mowo', 'Owole']
//     console.log(coderGang)
//     var refinedGang = new Set(coderGang)
//     console.log(refinedGang)
//     coderGang = [...refinedGang]
//     console.log(coderGang)
//------------------------------------------------------------------------------
    //Generators 
    //Set up the function
    // function* gen(){
    //    console.log('pear')
    //    console.log('kiwi')
    //    console.log('paw-paw')
    //    console.log('apple') 
    //    console.log('banana')
    //    console.log('pineapple')
    //    console.log('starfruit')
    //    console.log('all done')
    // }
    // var myGen = gen() 
    // console.log(myGen)

    // //Fire (play) the function
    // myGen.next()  
    
    // //Pause the function
    //  function* gen(){
    //     console.log('pear')
    //     console.log('kiwi')
    //     console.log('paw-paw')
    //     yield console.log('apple') 
    //     yield console.log('banana')
    //     yield console.log('pineapple')
    //     yield console.log('starfruit')
    //     console.log('all done')
    // }
    // console.log(myGen)
    // myGen.next()
    // myGen.next()
    // myGen.next()
    // myGen.next()

    //Pass Data out of Gen
    // function* gen(){
    //     yield 'pear'
    //     yield 'kiwi'
    //     yield 'paw-paw'
    //     yield 'apple' 
    //     yield 'banana'
    //     yield 'pineapple'
    //     yield 'starfruit'
    //     return 'all done' //to remove undefined value after gen is finished
    // }
    // console.log(myGen)
    // console.log(myGen.next())  
    // console.log(myGen.next())  
    // console.log(myGen.next())  
    // console.log(myGen.next()) 
    // console.log(myGen.next())  
    // console.log(myGen.next())  
    // console.log(myGen.next())
    // console.log(myGen.next()) 
    
    //Pass Data into of Gen
    // function* gen(){
    //     var a = yield 'pear'
    //     var b = yield 'kiwi'
    //     var c = yield 'paw-paw'
    //     var d = yield 'apple' 
    //     var e = yield 'banana'
    //     var f = yield 'pineapple'
    //     var g = yield 'starfruit'
    //     return a+b+c+d+e+f+g
    //     }
    // console.log(myGen)
    // console.log(myGen.next())  
    // console.log(myGen.next(6))  
    // console.log(myGen.next(3))  
    // console.log(myGen.next(4)) 
    // console.log(myGen.next(8))  
    // console.log(myGen.next(9))  
    // console.log(myGen.next(10))
    // console.log(myGen.next(12)) 
    
    //Asynchronus JS
//------------------------------------------------------------------------------

    //Regex (regex101.com)
    // Character SET
    // /regex/---first instance match
    // /regex/g---global flag match
    // /[regex]/---match regex in a position
    // /regex/i or /a-zA-Z/---case insensitive match (first instance)
    // /^regex/---exclusion 

    //Ranges & Repeating Characters
    // /a-zA-Z/---case insensitive match (first instance)
    // /[0-9]/---match numbers
    // /[0-9]+/---match numbers with unlimited length
    // /[0-9]{n}/---match numbers with n number of digits e.g a phone number
    // /[a-z]{11}/---match an n-long letter word 
    // /[a-z]{n, z}/---match words that are between n to z character long
    // /[a-z]{n,}/---match words that are between n to unlimited character long
    // Note: the repeating characters match works with a warning text as it will match the length of the regex even if in a longer text or number. For regex to act otherwise, see starting and ending patterns below
    // E.g  /[0-9]{5}/ will match numbers 23456 in the number below:
    // 2345678912345   
    // /[a-z]i{3}/ will match 'cat' in the word below:
    // 'cataract'

    //Metacharacters & Escaping
    // /\d/---match any digit character (same as 0-9)
    // /\w/---match any word character (a-z, A-Z, 0-9 and _'s)
    // /\s/---match a white space character (spaces, tabs, etc)
    // /\t/---match a tab character only

    //Special Characters
    // + --- one or more quantifier
    // \ --- escape character
    // [] --- character set
    // [^] --- negate symbol in a character set
    // ? ---the zero or one quantifier (makes a preceding character optional)
    // . --- any character whatsoever (except the newline character)
    // * --- the 0 or more quantifier (a bit like +)
    // to find a literal match for any of this characters, it has to be escaped from it's normal behaviour
    // ^ --- starting pattern
    // $ --- ending pattern 
    // | --- to match alternate characters
    
    
    // Ways of creating regex
    // var reg = /[regex]/flags or /regex/flags (most preferred)
    // var reg2 = new RegExp(actual RegExp, "string of flags")
    
    //Examples
    // Store all regexes in an object and make different form fields a property
    // const inputs = document.querySelectorAll('input');
    
    // const patterns = {
    //     telephone : /^\d{11}$/,
    //     name: /^[a-z\d]{5,12}$/i,
    //     // password: /^[\w@-]{8,20$/
    //     email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    // };

    // //Validation Function
    // function validate(field, regex){
    //     console.log(regex.test(field.value));
    //     if (regex.test(field.value)){
    //         field.classList.add('valid');
    //         field.classList.remove('invalid');
    //         // field.classList.add = 'valid';
    //     }else{
    //         field.classList.add('invalid');
    //         // field.className = 'invalid';
    //     }
    // };

    // //Testing Regexes
    // inputs.forEach((input) => {
    //     input.addEventListener('keyup', (e) => {
    //         // console.log(e.target.attributes.name.value)
    //         validate(e.target, patterns[e.target.attributes.name.value]);
    //     });
    // });

    // //Feedback to User
    
    // Asynchronous JS
    //HTTP REQUESTS using XML HTTP Request Object
    
    // //Create a Callback Function
    // const getTodos = (resource) => {//using 'resource' parameter because data from another API is required before another API request can be made
    // //removed 'callback' parameter cause a promise has been created
    //     return new Promise((resolve, reject) => {
    //         //Creating a new API request
    //         const request = new XMLHttpRequest();
    //         //Track Request Progress and Status
    //         request.addEventListener('readystatechange', () => {
    //             // console.log(request, request.readyState);
    //             if (request.readyState === 4 && request.status === 200){ 
    //                 //Converting JSON string to JS object
    //                 const data = JSON.parse(request.responseText)
    //                 // callback(undefined, data);
    //                 resolve(data)
    //             } else if (request.readyState === 4){
    //                 // callback('Could not fetch the data', undefined)
    //                 reject('error getting the resource')
    //             }
    //         });

    //         //Open and Send Request
    //         request.open('GET', resource);//to use custom made json, enter the relative url path as the second argument
    //         //use a parameter if data from another API is required before another API can be made
    //         request.send();
    //     });
                 
    // };
    
    // getTodos('https://jsonplaceholder.typicode.com/todos/').then(data => {
    //     console.log('Promise 1 resolved: ', data);
    //     return getTodos('https://jsonplaceholder.typicode.com/comments/');
    // }).then(data => {
    //     console.log('Promise 2 resolved: ', data);
    //     return getTodos('https://jsonplaceholder.typicode.com/posts/')
    // }).then(data => {
    //     console.log('Promise 3 resolved: ', data);
    // }).catch(err => {
    //     console.log('Promise rejected: ',  err)
    // }) 
    
    //  getTodos(err, data); //To log both the data and the error
    
    // getTodos('https://jsonplaceholder.typicode.com/todos/', (err, data) => { //To log either data or the error
    //         // console.log('Callback fired');
    //         // if (err){
    //         //     console.log(err)
    //         // } else{
    //         //     console.log(data);
    //         // }
    //     console.log(data);
    //     getTodos('https://jsonplaceholder.typicode.com/comments/', (err, data) => {
    //         console.log(data);
    //         getTodos('https://jsonplaceholder.typicode.com/posts/', (err, data) => {
    //                 console.log(data);
    //         });
    //     });
    // });

    //Testing the Asynchronous Nature of Callback Fuctions
    // console.log(1);
    // console.log(2);

    // getTodos((err, data) => {
    //     console.log('Callback fired');
    //     if (err){
    //         console.log(err)
    //     } else{
    //         console.log(data);
    //     }
    // });

    // console.log(3);
    // console.log(4);

    //HTTP Requests using JS inbuilt Fetch API with Promises activated under the hood
    // fetch('https://jsonplaceholder.typicode.com/posts/').then(response => {
    //     console.log('resolved', response)
    //     return response.json()
    // }).then(data => {
    //     console.log(data)
    // }).catch(err => {
    //     console.log('rejected', err)
    // })

    //Async & Await
    const getTodos = async () => {

        const message = await fetch('https://jsonplaceholder.typicode.com/postss/')

        if (message.status != 200){
            throw new Error('Could not fetch data');
        }

        const data = await message.json()

        return (data);
    };

    getTodos()
        .then(data => console.log('resolved:', data))
        .catch(err => console.log('rejected: ', err.message))
})
