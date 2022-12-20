console.log('jedan');
console.log('dva');
console.log('tri');
try {
    console.log('lalalal');
} catch (error) {
    console.log('something went wrong!');
}
console.log('cetiri');



try {

    console.log('Start of try runs'); // (1)
    
    // ...no errors here
    
    console.log('End of try runs'); // (2)
    
    } catch (err) {
    
    console.log('ignored, no errors'); // (3)
    
    }
    
    console.log("...Execution continues");



    


    try {

        console.log('Start of try runs'); // (1)
        
        lalala; // error, variable is not defined!
        
        console.log('Never reached'); // (2)
        
        } catch (err) {
        
        console.log('Error has occurred!'); // (3)
        
        }
        
        console.log("...Execution continues");