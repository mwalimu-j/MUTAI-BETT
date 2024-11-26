// promises

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error){
//         resolve("Yes! resolved the promise!");
//     }else{
//         reject("No! rejected the promise.");
//     }
// });

// console.log(myPromise);
// myPromise.then(value => {
//     console.log(value);
// })


const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error){
        resolve("Yes! promise resolved!");
    }else{
        reject("no! promise not resolved");
    }
});

const myNextPromise = new promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!")
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
})


myPromise.then(value => {
    console.log(value);
})
