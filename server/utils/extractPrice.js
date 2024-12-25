

exports.extractPrice = (...elements)=>{
    for(const element of elements){
        const price = element.text().trim();
        if(price){
            return price.replace(/[^\d.]/g , '');
        } 

    }
    return " ";

};


exports.calcMax = (trackPrice) => {
    let max = Math.max(...trackPrice);
    return max;

}
exports.calcLow = (trackPrice) => {
    let lowestPrice = Math.min(...trackPrice);
    return lowestPrice;
}

exports.calcAvg = (trackPrice) => {
    let sum = trackPrice.reduce((acc , value)=> acc+value , 0);
    return sum / trackPrice.length;
}

