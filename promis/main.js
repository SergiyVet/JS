function getPromise(message, delay) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
}
getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});
function calcArrProduct(arr) {
    return new Promise(function(resolve, reject){
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                product *= arr[i];
              } else {
                reject("Error! Incorrect array!");
                return;
              }
            
        }
        resolve(product);
    });
}
calcArrProduct([3, 4, 5]).then(rezult => console.log(rezult));
calcArrProduct([3,'user', 4, 5]).then(rezult => console.log(rezult));
  