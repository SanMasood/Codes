
function evenOrOdd(num){

  const result = num % 2;


  switch (result){

    case NaN:
      console.log ('Please enter a number');
      break;

      case 1:
        console.log (`${num} is odd`);
        break;

        case 0:
        console.log(`${num} is even`); 
        break;
  }

}

evenOrOdd(98);