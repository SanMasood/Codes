function myFunc(int){  
    
    let arr1 =[];
    for (let i = (int-1); i>0 ; i--){
        if (i%3===0 || i%5===0)
        arr1.push(i);
    }
  
    let unique = arr1.filter((v, i, a) => a.indexOf(v) === i)
    .reduce((sum, acc)=> sum+acc, 0); 
    console.log(unique);    

    return (unique);
  }

  myFunc(89);