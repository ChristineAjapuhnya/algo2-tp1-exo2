input.onButtonPressed(Button.A, function () {
    led.unplot(posX, posY)
    posX += -1
    if (posX < 0) {
        posX = 4
    }
    led.plot(posX, posY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, posY)
    posX += 1
    if (posX > 4) {
        posX = 0
    }
    led.plot(posX, posY)
})
let posX = 0
let posY = 0
posY = 2
posX = 0
led.plot(posX, posY)
let direction = 1
basic.forever(function () {
    basic.pause(1000)
    led.unplot(posX, posY)
    posY += direction
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    }
    led.plot(posX, posY)
})
