namespace SpriteKind {
    export const Sword = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Yves.vy == 0) {
        Yves.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sword, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let Yves: Sprite = null
info.setLife(3)
Yves = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f . . . f f f f . . f . . . 
    . . 2 . . . f f f f . . 2 . . . 
    . 2 4 2 . . f f f f . 2 4 2 . . 
    . 2 5 2 . . . 2 2 . . 2 5 2 . . 
    . . 2 . . . 2 4 4 2 . . 2 . . . 
    . . . . . . 2 4 5 2 . . . . . . 
    . . . . . . 2 5 5 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(Yves, 100, 0)
scene.cameraFollowSprite(Yves)
Yves.ay = 320
let Sword = sprites.create(img`
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    `, SpriteKind.Sword)
let Swords_collected = 0
info.setScore(0)
tiles.placeOnRandomTile(Sword, assets.tile`myTile1`)
if (info.score() == 1) {
	
}
