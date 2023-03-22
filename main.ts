namespace SpriteKind {
    export const upgrades = SpriteKind.create()
    export const battery = SpriteKind.create()
    export const Batt = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.gameOver(false)
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
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`myImage10`)
    tiles.setCurrentTilemap(tilemap`level7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`enemy 2`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeScoreBy(25)
    tiles.setTileAt(location, assets.tile`transparency16`)
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
