rh._.exports({"0":[[" ","layer_sprite_get_yscale"]],"1":[["layer_sprite_get_yscale"]],"2":[["layer_sprite_get_yscale"]],"3":[[" ","layer_sprite_get_yscale"]],"4":[[" ","This function can be used to get the current scale multiplier along the y axis for the sprite element. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function ","layer_sprite_get_id()","), and the function will return real value for the y scale, where 1 is no scaling."],[" ","layer_sprite_get_yscale(sprite_element_id);"," ","Argument","Type"," ","Description"," ","sprite_element_id","Sprite Element ID"," ","The unique ID value of the sprite element to get the information from"],[" ","Real"],[" ","var lay_id = layer_get_id(\"sprite_sky\");","\n    var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");","\n    if layer_sprite_get_yscale(spr_id) != 1","\n    {","\n        layer_sprite_yscale(spr_id, 1);","\n    }"," ","The above code will get the layer ID for the layer named \"sprite_sky\" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the yscale value and if it is anything other than 1 it is set to 1."," ","Back: ","Sprite Layers"," ","Next: ","layer_sprite_get_angle"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1096"})