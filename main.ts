namespace SpriteKind {
    export const upgrades = SpriteKind.create()
    export const battery = SpriteKind.create()
    export const Batt = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverMessage(false, "error")
    game.setGameOverEffect(false, effects.splatter)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverMessage(false, "error")
    game.setGameOverEffect(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverMessage(false, "error")
    game.setGameOverEffect(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`background 2`)
    tiles.setCurrentTilemap(tilemap`level5`)
    controller.moveSprite(mySprite, 90, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverMessage(false, "error")
    game.setGameOverEffect(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`bgimg`)
    tiles.setCurrentTilemap(tilemap`level7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`enemy 2`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.splatter)
    game.setGameOverMessage(false, "error")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`lvl4`)
    tiles.setCurrentTilemap(tilemap`level3`)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
200,
true
)
let Battery = sprites.create(assets.image`Batt`, SpriteKind.Batt)
controller.moveSprite(mySprite, 90, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
