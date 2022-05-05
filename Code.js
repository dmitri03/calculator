////******************************************************************************************************
////******************************************************************************************************
//// Lecture  3: DOM Manipulation Basics, Getting Elements, Setting Attributes, and Adding Event Listeners
////******************************************************************************************************
////******************************************************************************************************

// These are the basic building blocks for all Web Applications

// What is the DOM (Document Object Model)?
// A representation of the HTML document as a queryable tree of objects
// And the browser actually isn't displaying the raw HTML it's displaying the DOM
// So when we change the DOM we change what the user sees.

//**********
// Selectors
//**********

window.addEventListener('load', (event) => { //For now we'll ignore this line and think of it as a main function

    function NumOnClick(event){
        var num = event.target.value;
        
        console.log(num);
        if(InputTxt=="0"){
            InputTxt=num;
        }else{
        InputTxt = InputTxt+''+num
        }
        InputWindow.innerHTML=InputTxt;
        
    };

    function Equals(event){
        // var sign = event.target.value;
        
        // InputTxt = InputTxt+''+sign
        // InputWindow.innerHTML=InputTxt;
        OutputWindow.innerHTML = ParseStringToMath(InputWindow.innerHTML)
        Operands=new Array();
        Operators=new Array();
        EquationComplete = true;
    };

    function ParseStringToMath(strng){
        strngNum=0;
        strngOp='';
        rangeBegin=0;
        rangeEnd=0;
        for(let i =0;i< strng.length; i++){
            if(strng[i]==' '){
                rangeEnd = i;
                strngNum = parseFloat(strng.slice(rangeBegin,rangeEnd));
                Operands.push(strngNum);
                Operators.push(strng[i+1]);
                rangeBegin = i+3;
                i=i+2;
                
            }else if(i==strng.length-1){
                strngNum = parseFloat(strng.slice(rangeBegin,strng.length));
                Operands.push(strngNum);
            }

        }
        console.log(Operands);
        console.log(Operators);
        return 69;
    }
    
    function Minus(event){
        var sign = event.target.value;
        
        InputTxt = InputTxt+' '+sign+' '
        InputWindow.innerHTML=InputTxt;
    };

    function Plus(event){
        var sign = event.target.value;
        
        InputTxt = InputTxt+' '+sign+' '
        InputWindow.innerHTML=InputTxt;
    };

    function Divide(event){
        var sign = event.target.value;
        
        InputTxt = InputTxt+' '+sign+' '
        InputWindow.innerHTML=InputTxt;
    };

    function Mult(event){
        var sign = event.target.value;
        
        InputTxt = InputTxt+' '+sign+' '
        InputWindow.innerHTML=InputTxt;
    };
    
    function Percent(event){
        var sign = event.target.value;
        
        InputTxt = InputTxt+' '+sign+' '
        InputWindow.innerHTML=InputTxt;
    };

    function Decimal(event){
        var sign = event.target.value;
        
        InputTxt = InputTxt+''+sign
        InputWindow.innerHTML=InputTxt;
    };
    
    function ClearAll(event){
        console.log(InputWindow.innerHTML)
        InputTxt='0';
        InputWindow.innerHTML=InputTxt;
        OutputWindow.innerHTML = InputTxt;

    };

    var InputWindow = document.getElementById('inputText');
    var OutputWindow = document.getElementById('outputText');
    var NumBtnElements = document.getElementsByClassName("calc-button-num");
    var OpBtnElements = document.getElementsByClassName("calc-button-operator")
    var InputTxt='';
    var Operands=new Array();
    var Operators=new Array(); 
    var EquationComplete = false; 

    for(var i=0; i < NumBtnElements.length;i++){
        NumBtnElements[i].addEventListener("click",NumOnClick);
    }

    for(var i=0; i < OpBtnElements.length;i++){
        if(OpBtnElements[i].id=='btnMinus'){
            OpBtnElements[i].addEventListener("click", Minus);
        }else if(OpBtnElements[i].id=='btnPlus'){
            OpBtnElements[i].addEventListener("click", Plus);
        }else if(OpBtnElements[i].id=='btnDvd'){
            OpBtnElements[i].addEventListener("click", Divide);
        }else if(OpBtnElements[i].id=='btnMult'){
            OpBtnElements[i].addEventListener("click", Mult);
        }else if(OpBtnElements[i].id=='btnPercent'){
            OpBtnElements[i].addEventListener("click", Percent);
        }else if(OpBtnElements[i].id=='btnAC'){
            OpBtnElements[i].addEventListener("click", ClearAll);
        }else if(OpBtnElements[i].id=='btnDec'){
            OpBtnElements[i].addEventListener("click", Decimal);
        }else if(OpBtnElements[i].id=='btnEquals'){
            OpBtnElements[i].addEventListener("click", Equals);
        }
    }
    
















    // console.log(document.getElementsByTagName("div"));
    console.log(document.getElementsByClassName("IO").item(1));
    // console.log(document.getElementsByTagName("div").item(0).getElementsByTagName("h2"));
    // document.getElementById("btn7").style.backgroundColor ="black";
    // console.log(document.getElementById("RTC-Image").getElementsByTagName("div"));
    // console.log(document.getElementsByClassName("card-project"));

    // console.log(document.querySelectorAll("div"));
    // console.log(document.querySelectorAll("ul#navigation"));
    // console.log(document.querySelectorAll("ul#navigation li:not(.float-right)"));
    // console.log(document.querySelectorAll("ul#navigation li:not(.float-right) a").item(0));


//********************************
// Attributes and the style object
//********************************

    //**********
    //Attributes
    //**********

    // document.getElementsByTagName("div").item(2).setAttribute("id", "hi"); // doesn't work

    // document.getElementsByTagName("div").item(1).setAttribute("class", "hello");
    // document.getElementsByTagName("div").item(1).classList.add("hello");
    
    // document.getElementsByTagName("h2").item(0).setAttribute("style", "color: blue");
    // document.getElementsByTagName("h2").item(0).setAttribute("style", "background-color: green");
    
    // document.getElementsByTagName("h2").style.color = "blue"; // doesn't work
    // console.log(document.getElementsByTagName("h2"), document.getElementsByTagName("h2").item(0).style)
    // document.getElementsByTagName("h2").item(0).style.color = "blue";

    // var h2s = document.getElementsByTagName("h2");
    // for(var i = 0; i < h2s.length; i++){
    //     h2s[i].style.color = "blue";
    // }

    // [...document.getElementsByTagName("h2")].forEach(element => {element.style.color = "blue"}); //three advanced concepts

    // [...document.getElementsByTagName("div")].forEach(element => element.setAttribute("class","")); 
    //     ////trashes all class based css on divs


//*************************************
// Event Listeners (mouse and keyboard)
//*************************************


//     console.log(event);
//     element = document.getElementById("RTC-Image");
    // function myFunction(event){
    //     event.target.style.color="blue";
    // }; 
//     function mySecondFunction(event){
//         console.log("sup", event)
//     }; 
    // function myThirdFunction(event){
    //     event.target.style.color= "";
    // }; 
    // function myFourthFunction(event){
    //     console.log("clicked", event.path[0])
    //     // event.path[0].setAttribute("hidden", "true")
    // };
    // document.addEventListener("mouseover", myFunction);
    // // element.addEventListener("click", mySecondFunction);
    // document.addEventListener("mouseout", myThirdFunction);
    // // document.addEventListener("click",myFourthFunction)
    // element.removeEventListener("mouseout", myThirdFunction);
    // document.addEventListener('keydown', logKey);

    // function logKey(taco) {
    //   console.log(taco);
    // }
    // function addGlobalEventListener(type, selector, callback){
    //     document.addEventListener(type, e => {
    //         if (e.target.matches(selector)){
    //             callback(e)
    //         }
    //     })
    // }

    // addGlobalEventListener("click", "div.button", e =>{ console.log("hi")})

});