function snapCrackle(maxValue){
    let valor = []
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 !== 0 && i % 5 !== 0){
            valor.push("Snap")
        }
        if(i % 5 === 0 && i % 2 === 0){
            valor.push("Crackle")
        }
        if(i % 2 !== 0 && i % 5 === 0){
            valor.push("SnapCrackle")
        }
        if(i % 2 === 0 && i % 5 !== 0){
            valor.push(i)
        }
    }
    return valor
}
console.log(snapCrackle(10))