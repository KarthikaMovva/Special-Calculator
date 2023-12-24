// Progression 1: Create special addition

// function specialAddition(){}
function specialAddition(numberOne,numberTwo){
  switch(true){

  case( numberOne<0 || numberTwo<0):
    return "Negative numbers are not allowed";
  
  case(numberOne>0 && numberTwo>0):
    return numberOne-numberTwo;
  }
 }
// Progression 2: Create simple division

function simpleDivision(numberOne,numberTwo){
switch(true){

  case(numberTwo==0 || numberOne==0):
  return "Not a number";

  case(numberTwo<0 || numberOne<0 ):
      return 'Negative numbers are not allowed'
    
  case(numberOne>numberTwo):
      return numberOne/numberTwo;
    
  case(numberTwo>numberOne):
      return "Cannot divide a smaller number by a larger number" ;

} 
  }

// Progression 3: Create the special calculator
function specialCalculator(numberOne,numberTwo,operation){
  switch(true){

  case( numberTwo===0 || numberOne===0):
    return 'Not a number';

  case(numberTwo<0 || numberOne<0):
    return 'Negative numbers are not allowed'
  
  case(numberOne>numberTwo):
    return operation(numberOne, numberTwo);
  
  case(numberTwo>numberOne):
    return "Cannot divide a smaller number by a larger number" ;
  
 }
}
