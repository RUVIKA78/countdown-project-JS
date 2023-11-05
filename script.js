const endDate = "8 December 2023 12:00 AM"
document.getElementById("end-Date").innerText = endDate


const inputs = document.querySelectorAll('input')
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const difference = (end - now) / 1000


    if (difference < 0) return;
    // console.log(difference); 

    //convert into days
    inputs[0].value = Math.floor(difference / 3600 / 24)
    //convert into hours
    inputs[1].value = Math.floor(difference / 3600) % 24
    inputs[2].value = Math.floor(difference / 60) % 60
    inputs[3].value = Math.floor(difference) % 60

}
clock()
setInterval(
    () => {
        clock()
    },
    1000
)


