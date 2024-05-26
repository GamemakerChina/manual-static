rh._.exports({"0":[[" ","sprite_set_nineslice"]],"1":[["sprite_set_nineslice"]],"2":[["sprite_set_nineslice"]],"3":[[" ","sprite_set_nineslice"]],"4":[[" ","This function is used to apply a ","Nine Slice struct"," to a sprite. You supply the sprite index and the Nine Slice struct to apply, which can be retrieved using ","sprite_nineslice_create()"," or ","sprite_get_nineslice()","."," ","NOTE"," ","This function affects the sprite ","asset"," so any changes you make with this function will affect ","all"," instances that are using this sprite and all future instances too. "],[" ","sprite_set_nineslice(ind, nineslice);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Sprite Asset"," ","The index of the sprite to modify"," ","nineslice"," ","Nine Slice Struct"," ","The Nine Slice struct to apply"],[" ","N/A"],[" ","var _nineslice = sprite_nineslice_create();"," ","\n    _nineslice.enabled = true;","\n    _nineslice.left = 10;","\n    _nineslice.right = 10;","\n    _nineslice.top = 10;","\n    _nineslice.bottom = 10;"," ","sprite_set_nineslice","(spr_box_0, _nineslice);\n  "," ","The code above creates a new Nine Slice struct, enables it and sets the offsets for the guides. The struct is then applied to a sprite, changing its Nine Slice properties."," ","Back: ","Sprite Manipulation"," ","Next: ","sprite_set_offset"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1386"})