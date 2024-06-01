const count = document.querySelector('#count')
const amount = document.querySelector('#amount')

const selectHissesi = document.querySelector('#movie')


const containerHissesi = document.querySelector('.container')

const seats = document.querySelectorAll('.seat:not(.reserved)')
// console.log(count, amount,selectHissesi,seats, containerHissesi)


containerHissesi.addEventListener('click', function(e){
    // console.log(e.type)
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected')
    }

    calculateTotal()

})


function calculateTotal() {
    const selectedSeats = containerHissesi.querySelectorAll('.seat.selected')
// NodeList length 38
    const selectedSeatCount = selectedSeats.length

    count.innerText = selectedSeatCount
    amount.innerText = selectedSeatCount * selectHissesi.value


    // PROQRAM TEREFINDE SAXLANILAN VE LOCALSTORAGE  e gondereceyimiz
    const selectedSeatsArr =[]
    const seatsArr = []

    // HIGHER ORDER FUNCTION (HOF)

   

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat)

        
    })

    seats.forEach(function(s){
        seatsArr.push(s)
    })


    let selectedIndeks = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat)
    })

    localstoragedeSaxla(selectedIndeks)




    // console.log(seatsArr)

    



    // console.log(selectedSeatsArr)

}


function localstoragedeSaxla(indeks) {
    // setItem bazaya yazir
    localStorage.setItem('selectedSeats', JSON.stringify(indeks))
    localStorage.setItem('selectedMovieIndex', selectHissesi.selectedIndex)

}


localStoragedenGetir()

calculateTotal()



function localStoragedenGetir() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if(selectedSeats !==null && selectedSeats.length > 0) {
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    const secilenFilminIndeksi = localStorage.getItem('selectedMovieIndex')

    if(secilenFilminIndeksi !=null) {
        selectHissesi.selectedIndex = secilenFilminIndeksi
    }
}




// const telebeler = ["Taleh", "Hesen", "Nigar"]

// console.log(telebeler.indexOf("asdsad")) //0