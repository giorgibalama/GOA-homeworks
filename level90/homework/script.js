let arr = [42, "Hello", true, null, undefined, 3.14, { name: "Alice" }, [1, 2, 3], Symbol("symbol"), BigInt(12345678901234567890)];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

arr[5] = 2.718;
arr[6] = { name: "Bob" };
arr[7] = [4, 5, 6];
arr[8] = Symbol("newSymbol");
arr[9] = BigInt(98765432109876543210);

console.log(arr);

//--------------------------//

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(concatenateArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]




