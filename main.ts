function advStars () {
    for (let index = 0; index <= 3; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.plotBrightness(index, index2, led.pointBrightness(index + 1, index2))
        }
    }
}
input.onButtonPressed(Button.A, function () {
    music.playTone(523, music.beat(BeatFraction.Eighth))
    xw += -1
    if (0 > xw) {
        xw = 0
    }
})
function nuStars () {
    for (let index = 0; index <= 4; index++) {
        if (8 < randint(0, 10)) {
            led.plotBrightness(4, index, randint(50, 90))
        } else {
            led.plotBrightness(4, index, 0)
        }
        if (90 < randint(0, 100)) {
            led.plotBrightness(4, index, 240)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    music.playTone(988, music.beat(BeatFraction.Eighth))
    doLaser()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    xw += 1
    if (4 < xw) {
        xw = 4
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(131, music.beat(BeatFraction.Half))
    droid += 1
    if (droid > 1) {
        droid = 0
    }
})
function doLaser () {
    for (let index3 = 0; index3 <= 4; index3++) {
        if (240 == led.pointBrightness(index3, xw)) {
            game.addScore(5)
        }
        led.plot(index3, xw)
    }
}
let droid = 0
let xw = 0
let speed = 200
xw = 2
game.setLife(5)
droid = 0
basic.forever(function () {
    led.plot(0, xw)
    nuStars()
    advStars()
    if (240 == led.pointBrightness(0, xw)) {
        game.removeLife(1)
    }
    led.plot(0, xw)
    basic.pause(speed)
})
basic.forever(function () {
    if (droid && !(game.isGameOver())) {
        xw = randint(0, 4)
        led.plot(0, xw)
        basic.pause(500)
        doLaser()
    }
})
