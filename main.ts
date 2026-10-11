namespace SpriteKind {
    export const Sword = SpriteKind.create()
    export const InventoryUI = SpriteKind.create()
    export const Helditem = SpriteKind.create()
    export const Crystal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Yves.vy == 0) {
        Yves.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Crystal, function (sprite, otherSprite) {
    Inventory_crystal = sprites.create(img`
        3 3 3 5 5 5 5 5 5 5 5 5 5 5 5 5 
        3 3 5 5 3 3 3 3 3 3 3 3 3 5 5 5 
        3 5 5 3 3 3 3 3 3 3 3 3 5 5 3 5 
        3 5 3 3 3 3 3 3 3 3 3 5 3 3 3 5 
        5 5 5 3 3 3 3 3 3 5 5 3 3 3 3 5 
        5 3 5 5 5 5 5 3 5 5 3 3 3 3 3 5 
        5 3 3 3 3 3 5 5 3 3 3 3 3 3 3 5 
        5 3 3 3 5 5 3 5 5 3 3 3 3 3 3 5 
        5 3 3 3 5 3 3 3 5 5 3 3 3 3 3 5 
        5 3 5 5 3 3 3 3 3 3 5 3 3 3 3 5 
        5 3 5 3 3 3 3 3 3 3 3 5 5 3 3 5 
        5 5 3 3 3 3 3 3 3 3 3 3 5 3 3 5 
        5 5 3 3 3 3 3 3 3 3 3 3 5 5 3 5 
        3 5 5 3 3 3 3 3 3 3 3 3 3 5 5 5 
        3 3 3 5 5 3 3 3 3 3 3 3 3 3 5 5 
        3 3 3 3 5 5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.InventoryUI)
    Inventory.push("Crystal")
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sword, function (sprite, otherSprite) {
    Inventory.push("Sword")
    Inventory_sword = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 . . . . . . . . . . 
        . . . . 9 2 9 . . . . . . . . . 
        . . . . . 9 2 9 . . . . . . . . 
        . . . . . . 9 2 9 . . . . . . . 
        . . . . . . . 9 2 9 . . . . . . 
        . . . . . . . . 9 2 9 . . . . . 
        . . . . . . . . . 9 2 9 . . . . 
        . . . . . . . . . . 9 2 9 e . . 
        . . . . . . . . . . . 9 e . . . 
        . . . . . . . . . . . e . e . . 
        . . . . . . . . . . . . . . e . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.InventoryUI)
    Sword_held = sprites.create(img`
        4 4 . . . . . . . 
        4 2 4 . . . . . . 
        . 4 2 4 . . . . . 
        . . 4 2 4 . . . . 
        . . . 4 2 4 . . . 
        . . . . 4 2 4 . . 
        . . . . . 4 2 4 e 
        . . . . . . 4 e . 
        . . . . . . e . e 
        `, SpriteKind.Helditem)
    sprites.destroy(otherSprite)
})
let Sword_held: Sprite = null
let Inventory_crystal: Sprite = null
let Inventory_sword: Sprite = null
let Yves: Sprite = null
let Inventory: string[] = []
Inventory = []
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
let Sword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 . . . . . . . . . . 
    . . . . 4 2 4 . . . . . . . . . 
    . . . . . 4 2 4 . . . . . . . . 
    . . . . . . 4 2 4 . . . . . . . 
    . . . . . . . 4 2 4 . . . . . . 
    . . . . . . . . 4 2 4 . . . . . 
    . . . . . . . . . 4 2 4 . . . . 
    . . . . . . . . . . 4 2 4 e . . 
    . . . . . . . . . . . 4 e . . . 
    . . . . . . . . . . . e . e . . 
    . . . . . . . . . . . . . . e . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Sword)
let Crystal = sprites.create(img`
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 . 3 . . . . . 
    . . . . 3 3 3 3 3 . . 3 . . . . 
    . . . . 3 3 3 3 3 . . 3 3 . . . 
    . . . 3 3 3 3 3 3 . . . 3 . . . 
    . 3 3 3 3 3 3 3 3 . . . 3 3 . . 
    3 3 3 3 3 3 3 3 3 . . . . 3 3 . 
    3 . 3 3 3 3 3 3 3 . . . . . 3 3 
    . . . 3 3 3 3 3 3 . . . . . 3 3 
    . . . . . 3 3 3 3 . . . . 3 . . 
    . . . . . . 3 3 3 . . 3 3 . . . 
    . . . . . . . 3 3 . 3 3 . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    `, SpriteKind.Crystal)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(Yves, 100, 0)
scene.cameraFollowSprite(Yves)
Yves.ay = 320
let Inventory_slot_1 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.InventoryUI)
Inventory_sword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.InventoryUI)
tiles.placeOnRandomTile(Sword, assets.tile`myTile1`)
tiles.placeOnRandomTile(Crystal, assets.tile`myTile1`)
game.onUpdate(function () {
    Inventory_slot_1.setPosition(Yves.x - 65, Yves.y - 45)
    if (Inventory.indexOf("Sword") >= 0) {
        Inventory_sword.setPosition(Inventory_slot_1.x, Inventory_slot_1.y)
        Sword_held.setPosition(Yves.x - 10, Yves.y)
    } else {
    	
    }
})
