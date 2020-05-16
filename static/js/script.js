var QUIZ = [
    {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich",
          d: "Prashant Rawat"
        },
        correctAnswer: "c"
    },

    {
        question: "What is Java Script?",
        answers: {
          a: "Sheryl Sandberg" ,
          b: "Douglas Crockford",
          c: "Brendan Eich",
          d: "Prashant Rawat"
        },
        correctAnswer: "c"
    },

    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
    },

    {
      question: "Assume class TEST. Which of the following statements is/are responsible to invoke copy constructor?",
      answers: {
        a: "TEST T2(T1)",
        b: "TEST T4 = T1",
        c: "T2 = T1",
        d: "both a and b"
      },
      correctAnswer: "d"
    },

    {
      question: " ____________ refers to the act of representing only essential features without including the background details.",
      answers: {
        a: "Data Hiding",
        b: "Data Encapsulation",
        c: "Data Abstraction",
        d: "All of these"
      },
      correctAnswer: "c"
    },

    {
      question: " When overloading unary operators using Friend function,it requires_____ argument/s.",
      answers: {
        a: "Zero",
        b: "One",
        c: "Two",
        d: "None of these"
      },
      correctAnswer: "b"
    },

    {
      question: "When a child class inherits traits from more than one parent class, this type of inheritance is called _______________ inheritance.",
      answers: {
        a: "Hierarchical",
        b: "Hybrid",
        c: "Multilevel",
        d: "Multiple"
      },
      correctAnswer: "d"
    },

    {
      question: "In Multipath inheritance, in order to remove duplicate set of records in child class, we ___________ .",
      answers: {
        a: "Write Virtual function in parent classes",
        b: "HWrite virtual functions is base class",
        c: "Make base class as virtual base class",
        d: "All of these"
      },
      correctAnswer: "c"
    },

    {
      question: "An operator function is created using _____________ keyword.",
      answers: {
        a: "iterator",
        b: "allocator",
        c: "constructor",
        d: "operator"
      },
      correctAnswer: "d"
    },

    {
      question: "Classes in CPP are________ ?",
      answers: {
        a: "derived data types",
        b: "User defined data types",
        c: "built-in data types",
        d: "All of these"
      },
      correctAnswer: "b"
    },

    {
      question: "If we have object from ofstream class, then default mode of opening the file is _____ .",
      answers: {
        a: "ios::in",
        b: "ios::out",
        c: "ios::in|ios::trunc",
        d: "ios::out|ios::trunk"
      },
      correctAnswer: "d"
    },

    {
      question: "Logical expressions produce ____________ type results.",
      answers: {
        a: "explicit",
        b: "garbage",
        c: "bool",
        d: "static"
      },
      correctAnswer: "c"
    },

    {
      question: " What is the difference between protected and private access specifiers in inheritance?",
      answers: {
        a: "private member is not inheritable and not accessible in derived class.",
        b: "protected member is inheritable and also accessible in derived class.",
        c: "Both are inheritable but private is accessible in the derived class.",
        d: "Both are inheritable but protected is not accessible in the derived class."
      },
      correctAnswer: "c"
    },

    {
      question: "Throwing an unhandled exception causes standard library function then _________ to be invoked?",
      answers: {
        a: "stop()",
        b: "aborted()",
        c: "terminate()",
        d: "Abandon()"
      },
      correctAnswer: "c"
    },

    {
      question: "When a class is defined inside any function or block, it is called ___________ .",
      answers: {
        a: "Nested class",
        b: "Block class",
        c: "Local class",
        d: "It is not possible"
      },
      correctAnswer: "c"
    },


    {
      question: "If an argument to a function is declared as const, then _______ .",
      answers: {
        a: "function can modify the argument.",
        b: "function can modify the argument.",
        c: "const argument to a function is not possible.",
        d: "None of these"
      },
      correctAnswer: "b"
    },

    {
      question: "Return type of uncaught_exception() is ________________ .",
      answers: {
        a: "int",
        b: "bool",
        c: "char*",
        d: "double"
      },
      correctAnswer: "b"
    },

    {
      question: "float x= 3.1496;cout << setpricision(2) << x;",
      answers: {
        a: "3.14",
        b: "3.15",
        c: "3.00",
        d: "None Of these"
      },
      correctAnswer: "d"
    },


    {
      question: " In case of binary operator overloading with member function, which of following statement should be taken into consideration?",
      answers: {
        a: "Right hand operand must be object.",
        b: " Left hand operand must be object.",
        c: " Both the operands must be objects",
        d: "All of these should be considered."
      },
      correctAnswer: "b"
    },

    {
      question: "class X, class Y and class Z are derived from class BASE. This is ______ inheritance.",
      answers: {
        a: "Multiple.",
        b: "Multilevel",
        c: " Hierarichal",
        d: "Single"
      },
      correctAnswer: "c"
    },

    {
      question: " Streams that will be performing both input and output operations must be declared as class _________ .",
      answers: {
        a: "iostream",
        b: " fstream",
        c: " stdstream",
        d: "Stdiostream"
      },
      correctAnswer: "b"
    },

    {
      question: " Exception handlers are declared with ________ keyword.",
      answers: {
        a: "Try",
        b: " Catch",
        c: "Throw",
        d: "Finally"
      },
      correctAnswer: "b"
    }
]


//QUIZ.splice(1, 1)
//console.log(QUIZ)

var ar = [] ;
var i ;
var j = 22 ;                     //change yahan hoga
for(i=0; i<10; i++)            // yahan bhi
{
  var randomNum = Math.floor(Math.random() *j--) ;
  
  //console.log(randomNum);
  ar[i] = QUIZ[randomNum] ;
  QUIZ.splice(randomNum, 1) ;

  //console.log(QUIZ.length);

}

//console.log(ar) ;               // array check krna hai

var k = 1 ;
var op = ['a', 'b', 'c', 'd'] ;

for(i=0; i<10; i++)                  // yahan bhi
{
  var question1 = document.createElement('h3') ;
  question1.innerHTML= (i+1) + ")" + ar[i]['question'] ;
  n = "que_"+ (i+1) ;
  //console.log(n) ;                                                       // que id
  document.getElementById(n).appendChild(question1) ;

  //options 

  for(j=0; j<4; j++)
  {
    var lable = document.createElement('label') ;
    lable.innerHTML = ar[i]['answers'][op[j]] ;
    
    m = "opt" + k++ +"_input" ;
    var input = document.getElementById(m) ;
    
    insertAfter(input, lable) ;
  }
}

function insertAfter(referenceNode, newNode)
{
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


var ansarr = []

var element = {}


function displayValue(ele)
{
  var start = parseInt(ele.id) ;
  //console.log( start) ;  //que selected
  

  var r = document.getElementsByName(ele.id) ;
  //console.log(r);
  
  for (var i = 0, length = r.length; i< length; i++)
  {
    if(r[i].checked)
    { 
      element[start] = r[i].value ;
      
      //console.log(element) ;                                  // element show hoga
      
      break ;
    }
  }

}


function displayResult(btnstate)
{

  document.getElementById("socreH2").remove() ;

  var score = 0;

  for (var q=0 ; q<10; q++)
  { 
    if(ar[q]['correctAnswer'] == element[q+1])
    {
      score = score + 1;
    }
  }

  var results = document.createElement('h2') ;
  results.setAttribute('id', "socreH2")
  results.innerHTML = "Your Score Is " + score ;

  document.getElementById('scoreee').appendChild(results) ;



}