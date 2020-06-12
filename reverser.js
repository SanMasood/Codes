function reverser(str1) {

    console.log(str1.trim().length);
    str1 = str1.trim();


    let str2 = str1.split('').reverse().join('');
    console.log(str2);

    if(str1 === '')
    console.log(`Please enter a valid string.`);

    else

    (str1 === str2) ? console.log(`${str1} is a palindrome`) : console.log(`${str1} is a not a palindrome`);
}

reverser('');