rh._.exports({"0":[[" ","sprite_flush"]],"1":[["sprite_flush"]],"2":[["sprite_flush"]],"3":[[" ","sprite_flush"]],"4":[[" ","With this function you can remove the texture page for the given sprite from texture memory (VRAM). The texture will stay in RAM after being flushed."," ","You supply the sprite index (as defined when creating the sprite resource) and the texture page it is assigned to will be removed from texture memory. Note that if the texture page is used elsewhere in the room (by another instance sprite or a background, etc...) you may get a minor performance hit as the page is immediately reloaded, so care should be taken when using this function. Note that the function will return ","-1"," if flush is not supported for the chosen resource, or it will return ","0"," if all worked correctly."],[" ","sprite_flush(ind)"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Sprite Asset"," ","The index (resource name) of the sprite asset to flush"],[" ","Real"," (-1 or 0)"],[" ","sprite_flush(spr_Player_Aura);"," ","The above code flushes the sprite \"spr_Player_Aura\" from memory."," ","Back: ","Sprite Manipulation"," ","Next: ","sprite_flush_multi"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"947"})