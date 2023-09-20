rh._.exports({"0":[[" ","sprite_get_bbox_mode"]],"1":[["sprite_get_bbox_mode,bboxmode_automatic,bboxmode_fullimage,bboxmode_manual"]],"2":[[" ","sprite_get_bbox_mode"]],"3":[[" ","This function will return the current \"mode\" for the bounding box calculations. You supply the sprite index of the sprite to check, and the function will return one of the constants shown below."],[" ","sprite_get_bbox_mode(ind);"," ","Argument","Type"," ","Description"," ","ind","Sprite Asset"," ","The index of the sprite to check."],[" ","Bounding Box Mode Constant"," ","Constant"," ","Description"," ","bboxmode_automatic"," ","Automatic - The bounding box will be calculated automatically, based on the tolerance setting for the sprite"," ","bboxmode_fullimage"," ","Full Image - The bounding box will be set to use the full width and height of the sprite, regardless of the tolerance and \"empty\" pixels"," ","bboxmode_manual"," ","Manual - The bounding box has been set manually to user defined values (either in the sprite editor, or using the function ","sprite_set_bbox()",")"],[" ","if sprite_get_bbox_mode(sprite_index) != 0","\n    {","\n        sprite_set_bbox_mode(sprite_index, bboxmode_automatic);","\n    }"," ","The above checks the bbox mode for the current sprite and if it's not ","automatic",", then it is sets it to that value."," ","Back: ","Sprite Information"," ","Next: ","sprite_get_nineslice"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sprite_get_bbox_mode,bboxmode_automatic,bboxmode_fullimage,bboxmode_manual"]],"6":[[" ","Syntax:"],[" ","Returns"],[" ","Example:"]],"id":"1623"})