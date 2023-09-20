rh._.exports({"0":[[" ","tilemap_tileset"]],"1":[["tilemap_tileset"]],"2":[[" ","tilemap_tileset"]],"3":[[" ","Using this function you can change the tile set asset assigned to a given tile map element on a layer. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and then supply a tile set index and the tile map will be given the new sprite."],[" ","tilemap_tileset(tilemap_element_id, tileset_index)"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map element to change"," ","tileset_index"," ","Tile Set Asset"," ","The new tile set index to use"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Tiles_trees\");","\n    var tile_id = layer_tilemap_get_id(lay_id);","\n    if tilemap_get_tileset(tile_id) != ts_Nighttime","\n    {","\n        tilemap_tileset(tile_id, ts_Nighttime);","\n    }"," ","The above code checks the current tile set assigned to the tile map on the layer \"Tiles_trees\" and if it is not \"ts_Nighttime\" then that tile set is assigned to the tile map."," ","Back: ","Tile Map Layers"," ","Next: ","tilemap_clear"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["tilemap_tileset"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1373"})