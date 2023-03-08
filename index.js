(function() {

    function findCompartment() {
        const btn = document.getElementById('button');
        const seatNumber = document.getElementById('seatNumber').value;
        const compartmentNumber = Math.ceil(seatNumber / 4);
        const seatType = (compartmentNumber % 2) === 0 ? 'бокове' : 'не бокове';
        const seatPositionCompartment = (compartmentNumber % 4 === 1 || compartmentNumber % 4 === 2) ? 'нижнє' : 'верхнє';
        // ;
    
        window.onload = function() {
            const result = document.getElementById('resultCompartment');
            result.innerHTML = 'Дані по вашому квитку: купе № ' + compartmentNumber + ', ' + 'місце ' + seatType + ', ' + 'розташування ' + seatPositionCompartment;
        }
    
    btn.addEventListener('click', findCompartment);   
    
}
findCompartment();
    
})();