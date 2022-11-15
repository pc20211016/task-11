input.onButtonPressed(Button.A, function () {
    led.setBrightness(input.soundLevel())
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
basic.forever(function () {
	
})
