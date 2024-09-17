function interestAmount(price, time){
    let rate = "5%";
    let totalInterest = price*parseInt(rate)*time/100;
    console.log(totalInterest);
}

interestAmount(1000, 3);