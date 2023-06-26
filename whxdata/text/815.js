rh._.exports({"0":[[" ","sprite_get_bbox_bottom"]],"1":[["sprite_get_bbox_bottom"]],"2":[[" ","sprite_get_bbox_bottom"]],"3":[[" ","This function returns the relative position of the bottom of the sprite bounding box. This value is given as a relative value based on the upper left corner of the base sprite asset being (0,0). it is the same value as can be found in the sprite editor\n    for the ","collision mask properties",". The image below shows how it is calculated:"],[" ","sprite_get_bbox_bottom(ind);"," ","Argument","Type"," ","Description"," ","ind","Sprite Asset"," ","The index of the sprite to check."],[" ","Real"],[" ","var ww, hh;"," ww = sprite_get_bbox_left(sprite_index) - sprite_get_bbox_right(sprite_index);"," hh = sprite_get_bbox_bottom(sprite_index) - sprite_get_bbox_top(sprite_index);"," ","The above code calculates the width and height of the collision mask based on the relative bounding box side positions."," ","Back: ","Sprite Information"," ","Next: ","sprite_get_bbox_left"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sprite_get_bbox_bottom"]],"6":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"id":"815"})