namespace SpriteKind {
    export const TEXture = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cube.vy == 0) {
        Cube.vy = -140
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (canorb == 1) {
            Cube.vy = -140
            canorb = 0
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (Cube.vy == 0) {
        Cube.vy = -140
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Cube, assets.tile`myTile0`)
})
let canorb = 0
let killbox: Sprite = null
let Cube: Sprite = null
story.startCutscene(function () {
    story.showPlayerChoices("easy: Modernicbert", "hard: Factorystyle")
    pause(100)
    if (story.checkLastAnswer("hard: Factorystyle")) {
        Cube.ay = 275
        tiles.setCurrentTilemap(tilemap`level1`)
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            killbox = sprites.create(assets.image`gk`, SpriteKind.Enemy)
            tiles.placeOnTile(killbox, value)
        }
        scroller.scrollBackgroundWithSpeed(-10, 0)
        Cube.vx = 55
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
    } else if (story.checkLastAnswer("easy: Modernicbert")) {
        Cube.ay = 275
        tiles.setCurrentTilemap(tilemap`level0`)
        for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
            killbox = sprites.create(assets.image`w234r5`, SpriteKind.Enemy)
            tiles.placeOnTile(killbox, value2)
        }
        for (let value3 of tiles.getTilesByType(assets.tile`myTile7`)) {
            killbox = sprites.create(assets.image`bk`, SpriteKind.Enemy)
            tiles.placeOnTile(killbox, value3)
        }
        scroller.scrollBackgroundWithSpeed(-10, 0)
        Cube.vx = 55
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
    }
    tiles.placeOnRandomTile(Cube, assets.tile`myTile0`)
    story.cancelCurrentCutscene()
})
Cube = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`GJBG1sq`)
scene.setBackgroundColor(8)
forever(function () {
    scene.centerCameraAt(Cube.x + 25, Cube.y)
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
    if (Cube.vx == 0) {
        tiles.placeOnRandomTile(Cube, assets.tile`myTile0`)
        Cube.vx = 55
    }
})
game.onUpdateInterval(500, function () {
    canorb = 1
})
