export default store => next => action =>{
    console.log(action);
    console.log(store);
    next(action)
}



// export default function (store) {
//     return function (next) {
//         return function (action) {
            
//         }
//     }
    
// }