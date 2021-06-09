let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
if (protoArray1.includes(","))
{
    console.log("Array 1 includes commas.\n");
}
else
{
  console.log("Array 1 does not include commas.\n");
}

if (protoArray2.includes(","))
{
  console.log("Array 2 includes commas.\n");
}
else
{
  console.log("Array 2 does not include commas.\n");
}

if (protoArray3.includes(","))
{
  console.log("Array 3 includes commas.\n");
}
else
{
  console.log("Array 3 does not include commas.\n");
}

if (protoArray4.includes(","))
{
  console.log("Array 4 includes commas.\n");
}
else
{
  console.log("Array 4 does not include commas.\n");
}

if (protoArray1.includes(";"))
{
  console.log("Array 1 includes semicolons.\n");
}
else
{
  console.log("Array 1 does not include semicolons.\n");
}

if (protoArray2.includes(";"))
{
  console.log("Array 2 includes semicolons.\n");
}
else
{
  console.log("Array 2 does not include semicolons.\n");
}

if (protoArray3.includes(";"))
{
  console.log("Array 3 includes semicolons.\n");
}
else
{
  console.log("Array 3 does not include semicolons.\n");
}

if (protoArray4.includes(";"))
{
  console.log("Array 4 includes semicolons.\n");
}
else
{
  console.log("Array 4 does not include semicolons.\n");
}

if (protoArray1.includes(" "))
{
  console.log("Array 1 includes spaces.\n");
}
else
{
  console.log("Array 1 does not include spaces.\n");
}

if (protoArray2.includes(" "))
{
  console.log("Array 2 includes spaces.\n");
}
else
{
  console.log("Array 2 does not include spaces.\n");
}

if (protoArray3.includes(" "))
{
  console.log("Array 3 includes spaces.\n");
}
else
{
  console.log("Array 3 does not include spaces.\n");
}

if (protoArray4.includes(" "))
{
  console.log("Array 4 includes spaces.\n");
}
else
{
  console.log("Array 4 does not include spaces.\n");
}

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
if (protoArray1.includes(","))
{
  let newArray1 = protoArray1.split(",");
  let reverseArray1 = newArray1.reverse();
  let newString1 = reverseArray1.join(",");
  console.log(newString1, "\n");
}

if (protoArray2.includes(","))
{
  let newArray2 = protoArray2.split(",");
  let reverseArray2 = newArray2.reverse();
  let newString2 = reverseArray2.join(",");
  console.log(newString2, "\n");
}

if (protoArray3.includes(","))
{
  let newArray3 = protoArray3.split(",");
  let reverseArray3 = newArray3.reverse();
  let newString3 = reverseArray3.join(",");
  console.log(newString3, "\n");
}

if (protoArray4.includes(","))
{
  let newArray4 = protoArray4.split(",");
  let reverseArray4 = newArray4.reverse();
  let newString4 = reverseArray4.join(",");
  console.log(newString4, "\n");
}

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
if (protoArray1.includes(";"))
{
  let newArray1 = protoArray1.split(";");
  let sortedArray1 = newArray1.sort();
  let newString1 = sortedArray1.join(",");
  console.log(newString1, "\n");
}

if (protoArray2.includes(";"))
{
  let newArray2 = protoArray2.split(";");
  let sortedArray2 = newArray2.sort();
  let newString2 = sortedArray2.join(",");
  console.log(newString2, "\n");
}

if (protoArray3.includes(";"))
{
  let newArray3 = protoArray3.split(";");
  let sortedArray3 = newArray3.sort();
  let newString3 = sortedArray3.join(",");
  console.log(newString3, "\n");
}

if (protoArray4.includes(";"))
{
  let newArray4 = protoArray4.split(";");
  let sortedArray4 = newArray4.sort();
  let newString4 = sortedArray4.join(",");
  console.log(newString4, "\n");
}

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
if (protoArray1.includes(" "))
{
  let newArray1 = protoArray1.split(" ");
  let reverseArray1 = newArray1.reverse();
  let newString1 = reverseArray1.join(" ");
  console.log(newString1, "\n");
}

if (protoArray2.includes(" "))
{
  let newArray2 = protoArray2.split(" ");
  let reverseArray2 = newArray2.reverse();
  let newString2 = reverseArray2.join(" ");
  console.log(newString2, "\n");
}

if (protoArray3.includes(" "))
{
  let newArray3 = protoArray3.split(" ");
  let reverseArray3 = newArray3.reverse();
  let newString3 = reverseArray3.join(" ");
  console.log(newString3, "\n");
}

if (protoArray4.includes(" "))
{
  let newArray4 = protoArray4.split(" ");
  let reverseArray4 = newArray4.reverse();
  let newString4 = reverseArray4.join(" ");
  console.log(newString4, "\n");
}

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
if (protoArray1.includes(" "))
{
  let newArray1 = protoArray1.split(", ");
  let reverseArray1 = newArray1.reverse();
  let newString1 = reverseArray1.join(",");
  console.log(newString1, "\n");
}

if (protoArray2.includes(" "))
{
  let newArray2 = protoArray2.split(", ");
  let reverseArray2 = newArray2.reverse();
  let newString2 = reverseArray2.join(",");
  console.log(newString2, "\n");
}

if (protoArray3.includes(" "))
{
  let newArray3 = protoArray3.split(", ");
  let reverseArray3 = newArray3.reverse();
  let newString3 = reverseArray3.join(",");
  console.log(newString3, "\n");
}

if (protoArray4.includes(" "))
{
  let newArray4 = protoArray4.split(", ");
  let reverseArray4 = newArray4.reverse();
  let newString4 = reverseArray4.join(",");
  console.log(newString4, "\n");
}