let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
}; 

for(const property in statistics){
    let currVal = statistics[property];  
    if(currVal % 2 == 1 || property.charAt(0) == 'r'){
        console.log(currVal);  
    }
}