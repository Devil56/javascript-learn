const accountId = 144364 // cannot be changed
let accountEmail = "amirkhan@gmail.com"
var accountPassword = "345678"
accountCity = "Jaipur"
let accountState;

// accountId = 3 // not allowed

/* prefer not to use var 
because of issue in block scope and functional scope 
*/

accountEmail = "khansamar@gmail.com"
accountPassword = "876678"
accountCity = "Delhi"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

