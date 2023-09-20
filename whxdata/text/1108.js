rh._.exports({"0":[[" ","layer_sprite_index"]],"1":[["layer_sprite_index"]],"2":[[" ","layer_sprite_index"]],"3":[[" ","This function can be used to set the image index of a sprite asset which has multiple sub-images on a layer. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function ","layer_sprite_get_id()","), and then set the image index to use. If you set a value outside of the range of sub-images, then the image index will loop around."],[" ","layer_sprite_index(sprite_element_id, image_index);"," ","Argument"," ","Type"," ","Description"," ","sprite_element_id"," ","Sprite Element ID"," ","The unique ID value of the sprite element to set"," ","index"," ","Real"," ","The image index to use for the sprite"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"sprite_trees\");","\n    var spr_id = layer_sprite_get_id(lay_id, \"gfc_trees\");","\n    layer_sprite_index(spr_id, 1);"," ","The above code will get the layer ID for the layer named \"sprite_trees\" and then use that to get the ID of the given sprite element on that layer. This ID is then used to change the element image index."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_speed"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sprite_index"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1108"})