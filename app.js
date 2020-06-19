//........Chapter 21 to 25......
//asnwer 1:

// var firstName = prompt("Enter yoyr first Name");
// var firstLetter = firstName.slice(0 , 1);
// firstLetter = firstLetter.toUpperCase();
// var remainingLetter1 = firstName.slice( 1 );
// remainingLetter1 = remainingLetter1.toLowerCase();
// var lastNAme =prompt("Enter your last Name");
// var secondLetter = lastNAme.slice( 0 , 1);
// var remainingLetter2 = lastNAme.slice( 1 );
// remainingLetter2 = remainingLetter2.toLowerCase();
// var fUllName = firstLetter + remainingLetter1 +" "+ secondLetter + remainingLetter2 ;
// alert( "Hello " + fUllName);

//asnwer 2:

// var mobile = prompt("Enter your favourite mobile model");
// var mobileModel = mobile.toLowerCase();
//  document.write( mobileModel.length);


//answer 3 :
// var country = "Pakistani";
// var indexNum = country.indexOf("n");
// document.write(indexNum);

//asnwer 4:
// var greeting = "Hello World";
// var indexNum = greeting.lastIndexOf("l");
// document.write(indexNum);


//asnwer 5 :
// var text = "Pakistani";
// var indexNum = text.indexOf("i");
// document.write(indexNum);

//answer 6 :
// var beverage = [ "ice-cream " , " juice "];
// var fastFood = [ " burger " , " zinger"];
// var food = beverage.concat(fastFood);
// document.write(food);

//answer 7 :

// var city = "Hyderabad";
// var afterReplacement = city.replace("Hyder" , "Islam");
// document.write(afterReplacement);

//asnwer 8 :
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g , "&");
// document.write(newMessage);


//asnwer 9 :
// var string = "472";
// var convert = parseInt(string);
// document.write(convert);

//answer 10 :
// var userInput = prompt("Enter your text");
// userInput = userInput.toUpperCase();
// document.write(userInput);

//answer 11 :
//  var userInput =prompt("Enter your text");
//  var firstWord = userInput.slice(0 , 1);
//  firstWord = firstWord.toUpperCase();
//  var remainingWords =userInput.slice( 1 );
//  remainingWords = remainingWords.toLowerCase();
//  var titled = firstWord + remainingWords;
//  document.write("Titled :" + titled);

//answer 12 :
// var num = 35.36 ;
// var string = num.toString();
// string = string.replace(".","");
// document.write( "Number: " + num + "<br />Result: " + string);



//answer 13 :
// var userName = prompt("Enter your Name");
// if (userName.match(/@/g) || userName.match(/,/g) || userName.match(/!/g) || userName.match(/=/g) || userName.match(/=/g)) {
//     alert("Invalid name")
// } else {
//     alert( "User name is " + userName);
// }
 


//answer 14 :
// var array = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Enter your bakery items");
// bakery = bakery.toLowerCase();
// var bakeryItems = array.indexOf(bakery);
// if (array.indexOf(bakery) != -1){
//     alert( bakery + " is available at index " + bakeryItems + " in our bakery");
// } else {
//     alert( bakery + " is not available in our bakery");
// }






//asnwer 15 :
//  var userPassword= prompt("Enter your Password");

// function checkPassword(Pass)
//   {
//     var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//     var result = re.test(Pass);
//     if(result === true){
//         alert("password is correct");
//     }

//     else{
//       alert("password is incorrect");
//     }
//   }

//  checkPassword(userPassword);



// asnwer 16 :
// var university = "University of Karachi";
// var split = university.split("");
// for( i =0; i < split.length; i++){
//     document.write(split[i]+ "<br>");
// }


//answer 17 :

// var user = prompt("Enter your text");
// var lastLetter = user.charAt(user.length-1);
// document.write("Your last character is "+lastLetter);

//answer 18 :
// var para ="The quick brown fox jumps over the lazy dog"
// var paraChange = para.toLowerCase();
// var count = paraChange.match(/the/g).length;
// document.write("Text : " + para +  "<br>" + " There are "+ count + " occurance");




//.......Chapter 26 to 30....
//answer 1 :

// var userNumber = +prompt("Enter your positive number");
// var round = Math.round(userNumber);
// var floor = Math.floor(userNumber);
// var ceil = Math.ceil(userNumber);
// if (userNumber > 0) {
//     document.write("Number "+ userNumber + "<br>" + "round of value " + round + "<br>"+ "floor value of the number "+ floor + "<br>" +"ceil value of the number "+ ceil);
// } else{
// alert("Invalid number ")

// }


 //asnwer 2 :
// var userNumber = +prompt("Enter your positive number");
// var round = Math.round(userNumber);
// var floor = Math.floor(userNumber);
// var ceil = Math.ceil(userNumber);
// if (userNumber < 0) {
//     document.write("Number "+ userNumber + "<br>" + "round of value " + round + "<br>"+ "floor value of the number "+ floor + "<br>" +"ceil value of the number "+ ceil);
// } else{
// alert("Invalid number ")

// }

// //asnwer 3 :
// var num1 = -4 ;
// var num2 = 5;
// var absNum1 = Math.abs(num1);
// var absNum2 = Math.abs(num2);
// document.write("The absolute value of -4 is " + absNum1 + " The absolute value of 5 is " + absNum2);

//answer 4:
// var randomNumber = (Math.random()*6)  ;
// var ceilNum = Math.ceil(randomNumber);
// var randomNumber1 = (Math.random()*6)  ;
// var ceilNum1 = Math.ceil(randomNumber1);
// document.write("Random device value " + ceilNum + "<br> " +" Random device value " + ceilNum1);

//answer 5 :
// var head = (Math.random() * 2) + 1;
// var tails = (Math.random()* 2 )+ 1;
// var headfloor = Math.floor(head);
// var tailsfloor = Math.floor(tails);
// document.write(headfloor + " Random coin values Head "+ "<br>");
// document.write(tailsfloor + " Random coin values Tails ");


//asnwer 6 :
// var min = 1;
// var max = 100;
// var x= Math.floor(Math.random() *(max-min+1)+min) ;
// document.write("random number between 1 and 100 = "+ x);


//answer 7 :
//  var weight = prompt("Enter your weight");
//  var convert = parseInt(weight);
//  document.write("The weight of user is " + convert);

//answer 8 :
// var secretNum = +prompt("Enter the secret number between 1 to 10");
// if (secretNum === 8) {
// alert("Congrautalion your answer is right");
// } else {
//     alert( "Try again ");
// } 

//......Chapter 31 to 34.....

//asnwer 1 :

// var currentDate = new Date();
// document.write(currentDate);

//asnwer 2 :

// function month() {
//     var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
//     var currentDate = new Date();
//     var result = monthName[currentDate.getMonth()];
//     document.write(result);
// }
// month();

//asnwer 3:
// var dayName = ["Monday" , "Tuesday" , "wednesday" , "Thursday" , "Friday" ,"Saturday" , "Sunday"];
// var currentDay = new Date().getDay();
// var result = dayName[currentDay].substring(0, 3);
// document.write(result);

//answer 4 :
// var dayName = ["Monday" , "Tuesday" , "wednesday" , "Thursday" , "Friday", "Saturday" , "Sunday"];
// var date = new Date().getDay();
// if (date === "Saturday"  ||  date === "Sunday" ) {
//     alert("Today is FunDay")
// }else {
//     alert("Today is Working Day")
// }

//asnwer 5 :
//  var newDate = new Date();
//  if (new Date() > 16) {
//      alert("First fifteen days of the month")   
//  }else if (new Date() < 16) {
//      alert("Last days of the month")
//  }

//asnwer 6 :
// var getDate = new Date();
// var mili = getDate.getTime();
// var mint = getDate.getMinutes();
// document.write("Current date " + getDate + "<br>" + " milisecond : "+ mili + "<br>"+ " minutes :" + mint );

//asnwer 7 :
// var Dt = new Date();
// var getHours = Dt.getHours();
// if ( getHours < 12 ) {
//     alert("Its AM");
// }else {
//     alert("Its PM");
// }


//asnwer 8 :

// var myDate = new Date("Dec 31 , 2020" );
// var laterDate = myDate ;
// document.write(laterDate);


//answer 9 :

// var date1 = new Date("Jun 18, 2015"); 
// var date2 = new Date("Jun 19, 2020")
  
// // To calculate the time difference of two dates 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// // To calculate the no. of days between two dates 
// var Difference_In_Days = Difference_In_Time / (1000 *60 * 60 * 24); 
  
// //To display the final no. of days (result) 
// document.write("Total number of days passed " + Difference_In_Days); 

//answer 10 :
// var date1 = new Date("Jan 1, 2015"); 
// var date2 = new Date("Dec 5, 2015");
  
// // To calculate the time difference of two dates 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// // To calculate the no. of days between two dates 
// var Difference_In_Days = Difference_In_Time / (1000 *60); 
  
// //To display the final no. of days (result) 
// document.write("Total number of days passed " + Difference_In_Days); 


//answer 11 :
// var myDate = new Date();
// var yourDate = new Date("June 19 2020 03:19");

// document.write("Current date " +myDate + "<br> one hour ago, it was "+ yourDate);

//answer 12;

// var myDate = new Date();
// var yourDate = new Date("June 19 1920 02:25");

//  document.write(" Current Date " + myDate + "<br> 100 year back it was "+ yourDate);

// answer 13 :

// var date1 = +prompt("I am asking for your age: ");
// var currentDate = new Date();
// var year = currentDate.getFullYear();

// var MyBirthYear = year - date1;
// document.write(MyBirthYear);

//answer 14 :
// var customerName = prompt("Enter your name");
// var customerMonth = prompt("billing month");
// var numberUnits = +prompt("Total units");
// var ChargesPerUnit = +prompt("Charges per unit");
// var latePayment = 400 ;
// var netAmount = numberUnits * ChargesPerUnit;
// var grossAmount = netAmount + latePayment;
// document.write("Payable with in due date :" + netAmount + "<br>" );
// document.write("Payable after due date :" + grossAmount );

//....Chapter 35 to 38 ....
//answer 1 :

// function date_time() {
//     var x = new Date();
//     document.write(  x );
// }
// date_time();



//answer 2 
// function greeting() {
//     var firstName = prompt("Enter your First name");
//     var lastNAme = prompt("enter your Last name");
//     var fullName = firstName +" "+ lastNAme ;
//     document.write(fullName);   
// }

// greeting();

//asnwer 3 :

// function addition(x , y) {
//     return x + y ;
    
// }
// document.write(addition( 10 , 30));

//asnwer 4 :

// function calculator(num1 , operator , num2) {
 
//  if ( operator === "+") {
//      return num1 + num2
//  }  else  if ( operator === "-") {
//     return num1 - num2
// } else  if ( operator === "/") {
//     return num1 / num2
// } else  if ( operator === "%") {
//     return (num1 % num2)*100
// } 
// else if ( operator === "*") {
//     return num1 * num2
// }else {
//   return "Incorrect operator"
// }
// }
// var result1 = calculator(+prompt("Enter your value"),prompt("Enter your operator"),+prompt("Enter your value"));
// document.write(result1); 

//asnwer 5 :

// function squareIt( a ) {
    
//     return a * a 
  
// }

// document.write( "Square value :" + squareIt( +prompt("eter your value") ));

//asnwer 6 :

// var input = +prompt("Enter number");
// var result = 1; 
// function fact(number) {         
//     for (i=number; i>=1; i--)
//     {

//         result = result *i; 
//     }

//     return result;

// }
//     var final =fact(input);
//     document.write( final);

//answe 7 :
//  var start = +prompt("Enter first number");
//  var last = +prompt("Enter last number");
//  function counting(firstName , LastName) {
//      for( i = firstName; i <= LastName; i++ )
//      document.write( i + " ");
     
//  } counting(start ,last);

//Answer 8

// var base = prompt("Enter base value");
// var perpendicular = prompt("Enter perpendicular value");
// var hypotenous;
// function formula(base , perpendicular ) {
    
//     var baseSqurae = base*base;
//     var perSquare = perpendicular * perpendicular;
//     hypotenous = baseSqurae + perSquare;

//     function hypSquare(hypotenous) {
//         return hypotenous * hypotenous;
//     }

//     var result = hypSquare(hypotenous);
//     return result;

// }   document.write(formula(base , perpendicular));

//answer 9 :

// var width = +prompt("Enter your width");
// var height = +prompt("Enter your height");
// function areaOfRectangle(num1 , num2) {
//     return num1 * num2 ;
    
// } document.write(areaOfRectangle(width , height));
// document.write("<br>")
// document.write(areaOfRectangle( 5 , 4));

//answer 10 :

// var palindrome = prompt("Enter some text");
// function game(reverseGame) {
//     var revrstring = reverseGame.toLowerCase().split("").reverse().join("");
//     if ( palindrome === revrstring ) {
//         alert("its palindrome")
        
//     }
//     else {
//         alert("not")
//     }
// } game(palindrome);

//asnwer 11 :
// var text = prompt("enter some text");

// function capitalWord(text) {
 
//     text = text.split(" ");
//     for(i = 0; i < text.length; i++){
//         text[i] = text[i][0].toUpperCase() + text[i].substring(1);
//     }
//     return text.join(" ");
// }
// document.write(capitalWord(text));

//asnwer 12 :

// var string = prompt("Enter string");
// var converted = string.split(" ");
// var longest =converted[0];
// function longestString(converted){
// for(var i=0; i<converted.length; i++){
    
//     if(converted[i].length <= converted[i+1].length)
//    { 
//        longest = converted[i+1];
// }
//         return longest;
//     }
// }

// document.write(longestString(converted));


//asnwer 13  :
// var sentence = prompt("Enter your text");
// var word = prompt("Enter one  letter");
// function occurance(sentence , word ) {
//       var value = 0;
//       for(index = 0; index < sentence.length; index++){
//           if( sentence.charAt(index) == word){
//               value += 1;
//           }
        
//       }
//       return value;
// } 
// document.write(  "Count the number of occurance " + occurance(sentence , word));

//answer 14 :
//part a
// var radius = +prompt("Calculate the circumference based on the radius")
// function calcCircumference(radius) {
//     var formula = 2 * 3.14 * radius ;
//     return formula ;
   
// } document.write("The circumference is " +calcCircumference(radius));


// //part b
// var area = +prompt("Calculate the area based on the radius")
// function calcArea(radius) {
//     var newFormula =  3.14 * radius * radius ;
//     return newFormula ;
   
// } document.write("The area is " + calcArea(radius));
