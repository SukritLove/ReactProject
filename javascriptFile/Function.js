//-------------------Normal Function-------------------
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }

  return "Average of " + args + " is " + sum / args.length;
}

console.log(avg(1,2,3,4,5,6,7,8,9,10));
//----------------------------------------------------

//-------------------Arrow Function-------------------
let avgarr = (...args) =>{
    let sum = 0;
  for (const item of args) {
    sum += item;
  }
  console.log("Average of " + args + " is " + sum / args.length);
}
avgarr(1,2,3,4,5,6,7,8,9,10);
//---------------------------------------------------