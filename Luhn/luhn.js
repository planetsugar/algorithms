const IsValidCCNumber = (account => {

    const checkDigit = parseInt(account[account.length - 1]);
    account = Array.from(account);
    account.pop();
    account.reverse();
    
    const processedDigits = account.map((current, index) => {
        if ((index % 2) != 0) {
            return parseInt(current);
        } 
    
        const newDigit = parseInt(current * 2); 
        return(newDigit > 9 ? newDigit - 9 : newDigit);
    });
    
    const sum = processedDigits.reduce((previous, current) => previous + current);
    return((sum + checkDigit) % 10 === 0);
    
});

console.log(IsValidCCNumber('4556737586899855'));
console.log(IsValidCCNumber('1234567391234589'));
console.log(IsValidCCNumber('5419143375971720'));
console.log(IsValidCCNumber('4716268649073301'));
console.log(IsValidCCNumber('4716268231873301'));