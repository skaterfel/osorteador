// get the whole number between the values ​​chosen by the user
function getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//make the draw
function luck(){
    
    numbers = []
    var qtSort = document.getElementById('qtSort').value
    var numIni = document.getElementById('numIni').value
    var numFin = document.getElementById('numFin').value
    var res = document.getElementById('res')

    if(qtSort <= 0){
        window.alert(`Você não pode usar ${qtSort} para realizar sorteios`)
        document.getElementById('qtSort').focus()
    } else {

        for(i = 0; i < qtSort; i++){
            numluck = getInt(numIni, numFin)  
            numbers.push(numluck)
            
        }
            
        if(qtSort == 1){
            res.innerHTML = `Número da Sorte: ${numbers}`
        } else {
            res.innerHTML = ''
            for(i = 0; i < qtSort; i++){
                res.innerHTML += `Número da Sorte: ${numbers[i]}<br>`
            }
        }
        
               
    }
    
}
