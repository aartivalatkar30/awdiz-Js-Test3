// Question 1

// for(let i=0;i<100;i++)
//   if(i%3==0 && i%5==0){

//     console.log("FizzBuzz");

//   }
//   else if(i%3 == 0){
//     console.log("Fizz");
//   }
//   else if(i%5 ==0){

//     console.log("Buzz")
//   }else
//   {
//     console.log(i)
//   }
   

// Question 2


// let input1=[1,2,3,4]
// let input2 =[2,4,6,8]

// let newarr=[];

// function Javascript(input1,input2){

//   for(let i=0;i<input1.length;i++){

//     for(let j=0;j<input2.length;j++){
 
// if(input1[i]===input2[j]){

//   var newarr1 = input1[i];
//   newarr.push(newarr1);
// }
// }
//     }
//     return newarr;
// }

// console.log(Javascript(input1,input2))

// Question 4

// function largestPrimeNum(num){

//   var i =2
//   while(i<=num){

//     if(num%i == 0){

//       num /= i;
//     }else{
//       i++;
//     }
//   }

//   console.log(i)

// }
// var a = 13195;
// largestPrimeNum(a);


// Question 5
// let arr=[1 , 2, 3,4 , 5 ,5 ,6];

function RemoveDuplicate(arr){

  let newarray=[];

  for(let i of arr){

    if(newarray.indexOf(i)===-1){

      newarray.push(i);
    }
  }

  console.log(newarray)
}

const val =[1,2,2,3,4,4,5,5,6];
console.log("givennumber :::"+val)

RemoveDuplicate(val)