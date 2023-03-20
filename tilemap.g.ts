// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile22 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile24 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile23 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile25 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile26 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`10001000010100000000010102010101010404010100000000000000050501010404040101010100000101010505010104040401010101010103050101010101010401010101010101050501010101010104010101000101010101010101010101010101010101010101010101040101010101010404040101010101040401010101010101040404010101010104040101010101010101050101010101010101010101010101010101010101010101010401010101010101010101010101010404010101010101010005010101010104040000000000000005050100000501000000000500000b000000000b000000000b00040509090a080202080303060a0006080007`, img`
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
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile7,myTiles.tile8,myTiles.tile2,myTiles.tile3,myTiles.tile11,myTiles.tile14,myTiles.tile15,sprites.dungeon.chestClosed,myTiles.tile16,myTiles.tile22], TileScale.Sixteen);
            case "level5":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000050000000000000000000000000000000202060701040100000000000000000002020303030202020004000701000000020303030203020202020202020200010000030300000000000000000000000300000000000000000000000000000202000000000000000000040007010202020000000007010101020202020202020200000000020202020202030303030303010002020202030303030300000000000200000000000000000000000000000003030000000000000000000000000000030302060000000000000000000000000302020200040107010101010101070103030202020202020202030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 2 . . . . . . . . . . . 2 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . 2 2 2 2 2 2 2 2 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 2 2 2 2 2 . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile16,myTiles.tile23], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile1":
            case "tile1":return tile1;
            case "myTile":
            case "tile3":return tile3;
            case "transparency16":return transparency16;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile12":
            case "tile14":return tile14;
            case "myTile13":
            case "tile15":return tile15;
            case "myTile14":
            case "tile16":return tile16;
            case "myTile16":
            case "tile18":return tile18;
            case "myTile17":
            case "tile19":return tile19;
            case "myTile15":
            case "tile17":return tile17;
            case "enemy 2":
            case "tile20":return tile20;
            case "myTile18":
            case "tile21":return tile21;
            case "myTile19":
            case "tile22":return tile22;
            case "myTile21":
            case "tile24":return tile24;
            case "myTile20":
            case "tile23":return tile23;
            case "myTile22":
            case "tile25":return tile25;
            case "myTile23":
            case "tile26":return tile26;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
