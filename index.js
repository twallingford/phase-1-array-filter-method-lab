const anArray = ['Hello', 'Hi', 'Howdy', 'Ahoy'];

function findMatching(drivers, searchTerm){
    return drivers.filter(function (driver) {
        if(driver.toLowerCase() === searchTerm.toLowerCase()){
            return driver
        }
    })
}

function fuzzyMatch(drivers, searchTerm){
    const searchLength = searchTerm.length
    return drivers.filter(function (driver) {
        if(driver.slice(0, searchLength).toLowerCase() === searchTerm.toLowerCase()){
            return driver 
        }
    })
}


function matchName(drivers, searchTerm){
    return drivers.filter(function (driver){
        if(driver.name === searchTerm){
            return driver.name
        }
    })
}

// findMatching() takes an array of drivers' names and a string as arguments. Returns array of matching drivers. Case insensitive.
// fuzzyMatch() takes an array of drivers' names and a string as arguments. Returns all drivers whose names begin with the provided letters.
// matchName() takes an array of drivers' names and a string as arguments. Each driver has two properties (name, hometown). Function
// returns each element whose name property matches the provided string argument