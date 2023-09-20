rh._.exports({"0":[[" ","place_empty"]],"1":[["place_empty"]],"2":[[" ","place_empty"]],"3":[[" ","You can use this function to check and see if the calling instance would collide with ","any other instance"," of an object or all instances in your game. For this to collision to resolve correctly, the instance running the code must have a valid collision mask (either for the sprite itself, or through the ","mask_index",") and it will only register collisions with those instances that also have a valid mask."," ","The function is testing if there are no collisions should the calling instance be placed at a specific position, and you can supply an optional argument to refine the check to only check if a position is free of collisions with instances of the given type. Note that if no optional object ID is supplied, the check will be done against ","all"," instances within the room. The collision checking will be either precise or based on the bounding box of the instance, depending on what kind of collision mask has been selected, but for precise collisions to work correctly, all instances in the check should have precise collision masks."," ","In addition to objects and instances, the function also accepts:"," ","The special keywords ","all"," and ","other"," ","A ","Tile Map Element ID"," ","An array containing a combination of objects, instances, Tile Maps and the keywords ","all","/","other"," ","Passing an array allows you to check for collisions against multiple objects and/or Tile Maps in one call."," ","Note that the given x/y coordinates will be floored to the nearest integer before the check is performed."],[" ","place_empty(x, y, [object_id]);"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x position to check."," ","y"," ","Real"," ","The y position to check."," ","[object_id]"," ","Object Asset"," or ","Object Instance"," or ","Tile Map Element ID"," or ","Array"," ","OPTIONAL"," ","An object, instance, tile map ID, keywords all/other, or array containing these items"],[" ","Boolean"],[" ","if place_empty(mouse_x, mouse_y, obj_Enemy)","\n    {","\n        x = mouse_x;","\n        y = mouse_y;","\n    }"," ","The above code will check for a collision with any other instance of the object \"obj_Enemy\", as if the calling instance were to be placed at the same position as the mouse. If there is no collision detected, then the instance has its x/y coordinates set to those of the mouse."," ","Back: ","Collisions"," ","Next: ","place_free"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["place_empty"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2249"})