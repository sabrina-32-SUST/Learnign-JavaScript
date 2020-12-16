console.log("Minhaz+ Nusrat");

var  numbr = 5; //in-line comment

/*this  is a 
  multiline  comment*/

//   Data  Type   and   variables


  /* Data types:
  undefiend,  null,  boolean,  string,  symbol,  number,
  and  object */
  var  myName  = "Sabrina" /// can  change
  myName = 8

  let ourName  = "SabMin"

  const pi = 3.14 //can never  change

  var a;
  console.log(a);

  var  b = 2;

a = 5;
b= a;
console.log(a);
console.log(a);

//initializing  variable

var a = 9;
var   b = 4;
var  c = "I  am  a "

a = a+1;
b = b+1;
c = c+ "String!"

console.log(a);
console.log(b);
console.log(c);


//JS  is  case sensitive


//adding  number

var  sum  =  10+10
console.log(sum);

//substraction  number

var  sub  =  200-110
console.log(sub);

//multiplication  number

var  mul  =  20 * 110
console.log(mul);

//dividing   number

var  div  =  200/110
console.log(div);

//incrimenting  number

var  inc  =  98;
inc++;
console.log(inc);


//decrementing  number

var  dec  =  98;
dec--;
console.log(dec);


//concate string

var ortStr = "I  come  1st"+ " I  come  2nd";
console.log(ortStr);


var  myStr = "This  is  the  1st  sentence."
myStr+=" This  is  the  2nd  sentence."

console.log(myStr)


//constructing string  with  variable
var  myStr = "This  is  the  1st  sentence."
myStr+=  ourName
myStr+=" This  is  the  2nd  sentence."

console.log(myStr)




// decimal  number

var  ourDecimal = 5.3;
 

//lenth of the  str


var   firstName = "Sabrina";
var   firstNameLenght = 0;
firstNameLenght = firstName.length;
console.log(firstNameLenght);
var  firstLatterOfFirstName = "";
firstLatterOfFirstName = firstName[0];
console.log(firstLatterOfFirstName);

var  lastLatterOfFirstName = "";
lastLatterOfFirstName = firstName[ firstName.length-1];
console.log(lastLatterOfFirstName);
 

//work  with  Function
function  wordBlanks(myNoun,  myAdjective,  myVerb,  myAdverb){
    var  result = "";
    result+= "The "+myAdjective + myNoun + myVerb+" to  the Store" + myAdverb;
    return result;

}

console.log(wordBlanks("dog ", "big ", "ran ", " quickly "));



//Array

var  ourArray = [["John",  23],["Ary",  01]];

 
console.log(ourArray);
 

//array  index

var  ourrArray = [1,2,3,4,5,56];
var ourData = ourrArray[0];

console.log(ourrArray);

console.log(ourData);

//modify  array  

ourrArray[4] =76;
console.log(ourrArray);

//multi-dimensional  Array


var  mymultiArray = [[1,2,3], [4,5,6],[7,8,9],[[10,11,12],13,14] ];

var  multiArrayData = [1][0];
console.log(multiArrayData)


//push()

var   ourAarray = ["Sima", "Rima", "Jima"];
ourAarray.push(["Ruma", "Jhuma"]);

console.log(ourAarray);

//pop()

console.log(ourAarray.pop());


//shift()

console.log(ourAarray.shift());

  
//reusable  code  with  function

function  ourReusableFunction(){
    console.log("Hello", "World");
}

ourReusableFunction();


//passing values

function  ourFunctionArgs(a, b){
    console.log(a-b);
}

ourFunctionArgs(5,2);

//boolean

function  ourTrueFalse(isItTrue){
  if(isItTrue){
    return  "yes ,  it is  true";

  }
  return " no  it  is  false"
}


console.log(ourTrueFalse(true)) ;


//equality  operator

function  testEqual(val){
  if(val == 12){
    return  "Equal";
  }
  return  "not Equal";

}

console.log(testEqual('12'));


//strict equal
 // here  3===3 is  true
 //but 3==='3'  is false
 // bcz  ===  dont  do  type  conversion

 function  testStrictEqual(val){
  if(val === 12){
    return  "Equal";
  }
  return  "not Equal";

}

console.log(testStrictEqual('12'));


 /// objects


 var   ourDOg = {
"name" : "Camper",
"legs" :  4,
"tails":  1,
"friends" : ["everythings!"]


 };

//accessign  obj with  dot

 var ourDogObj = ourDOg.name;
 console.log(ourDogObj);

 //accessign  obj with  brackets

 

 











































































































































































































