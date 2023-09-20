rh._.exports({"0":[[" ","tilemap_set_mask"]],"1":[["tilemap_set_mask,tile_rotate,tile_mirror,tile_flip,tile_index_mask"]],"2":[[" ","tilemap_set_mask"]],"3":[[" ","This function can be used to set the ","tile bit mask"," for a single tile map. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and then the mask value. The idea is that if you have, for example, a pretty small tile set of 16 x 16 tiles then you have a total of 256 different tiles in your tile set, which only uses up 8 bits of your index in the tile data \"blob\" (from an available 19 bits of data). These bits can be \"masked\" and then the rest of the tile data can be used to store additional values."," ","An easy way to get the initial index mask value is to take the number of tiles in the tile set and subtract 1, so a 16x16 tile set has 256 tiles and a mask value of 255 (or $ff in hexadecimal), and if the tile set has a number of tiles that are not a power of two, then round up to the nearest power of two to get the mask, for example a tile set that is 20x20 has 400 tiles, which you would round up to 512, and so get a mask index value of 511 ($1ff in hexadecimal). Apart from the index mask, normally you would want to preserve the flip, rotate and mirror values that are assigned to a tile too, so to help with that there are a few ","constants"," that can be used. These can be \"or\"-ed together with the index mask value to preserve those bits of data. The following constants can be used (see the example code below for usage):"," ","Tile Mask Constant"," ","Constant"," ","Description"," ","tile_rotate"," ","Used to set/get the rotate bit of a tile data blob."," ","tile_mirror"," ","Used to set/get the mirror bit of a tile data blob."," ","tile_flip"," ","Used to set/get the flip bit of a tile data blob."," ","tile_index_mask"," ","A special constant that is for \"and\"-ing with the tile data blob to extract the tile index."," ","Tile map bit masking is an advanced feature and allows you to use bits of the tile data \"blob\" for your own use. For example, the user could reserve a bit to mean \"solid\" in the tile-data structure and then this can be checked for fast collisions. Basically, the bit mask is \"and\"-ed against the tile data when the tile map is ","drawn"," (so it doesn't affect any of the other functionality), meaning that bits which aren't in the mask are ignored, but can still be read and written to by the user for their own purposes. Note that there are two different masks – a global one and one per tile map - and these are \"and\"-ed together internally by ","GameMaker"," before being used for drawing."],[" ","tilemap_set_mask(tilemap_element_id, mask)"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map element to set the mask of"," ","mask"," ","Real"," ","The mask value"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Tiles_sky\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    var mask = tile_mirror | tile_flip | tile_rotate | 255;","\n    tilemap_set_mask(map_id, mask);"," ","The above code gets the tile map ID from the given layer and then sets the tile map bit mask to 8bits, preserving the flip, mirror, and rotate values for each tile in the map."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_set_global_mask"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tilemap_set_mask,tile_rotate,tile_mirror,tile_flip,tile_index_mask"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2437"})