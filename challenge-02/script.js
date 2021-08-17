const hourHand = document.querySelector(".hand.hour-hand")
const minuteHand = document.querySelector(".hand.minute-hand")
const secondHand = document.querySelector(".hand.second-hand")

setInterval(() => {
    const date = new Date(Date.now())
    let currentHour = date.getHours()
    let currentMinute = date.getMinutes()
    let currentSecond = date.getSeconds()
    
    let hourDegrees = ((currentHour / 12) * 360)
    let minuteDegrees = ((currentMinute / 60) * 360)
    let secondDegrees = ((currentSecond / 60) * 360)

    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
}, 1000)