rh._.exports({"0":[[" ","tilemap_set_width"]],"1":[["tilemap_set_width"]],"2":[["tilemap_set_width"]],"3":[[" ","tilemap_set_width"]],"4":[[" ","This function can be used to resize a tile map element."," ","You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and the new width of the tile map in tile cells."],[" ","tilemap_set_width","(tilemap_element_id, width);"," ","Argument"," ","Type"," ","Description"," ","tilemap_element_id"," ","Tile Map Element ID"," ","The unique ID value of the tile map element to set the width of"," ","width"," ","Real"," ","The width value (in \"cells\")"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Tiles_Walls\");","\n    var map_id = layer_tilemap_get_id(lay_id);","\n    if (tilemap_get_width(map_id) != room_width div 16)","\n    {","\n        tilemap_set_width(map_id, room_width div 16);","\n    }"," ","The above code checks the width of a specific tile map and if it is not the correct size then the width is set."," ","Back: ","Tile Map Elements"," ","Next: ","tilemap_set_height"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1418"})