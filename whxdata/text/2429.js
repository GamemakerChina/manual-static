rh._.exports({"0":[[" ","sprite_set_alpha_from_sprite"]],"1":[["sprite_set_alpha_from_sprite"]],"2":[[" ","sprite_set_alpha_from_sprite"]],"3":[[" ","This function uses the value/saturation of one sprite and multiplies it with the alpha of the target sprite. Ideally the sprite being used to generate the new alpha map should be grey-scale, with the white areas having an equivalent alpha value of 1 (opaque), the black areas being equivalent to alpha 0 (transparent), and the grey areas being an alpha in between 0 and 1. The sprite that you are setting the alpha of ","cannot be a permanent resource",", nor can the sprite you use to set the alpha, as this will give an error. This means that you must create two completely new sprites \"on the fly\" in some way for the function to work correctly. This can be achieved by using surfaces, or by creating a sprite from the screen (the code example below shows how the effect can be achieved with surfaces)."," ","NOTE"," This function is only useful for ","bitmap"," sprites and will not work with SWF or JSON (Spine) sprites."," ","Below is an image that illustrates how this function works:"],[" ","sprite_set_alpha_from_sprite(ind, spr);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Sprite Asset"," ","The index of the sprite to change the transparency map of."," ","spr"," ","Sprite Asset"," ","The index of the sprite to take the transparency map data from."],[" ","N/A"],[" ","In this extended example we show how you can create a special effect sprite from two sprite resources. To start with we need to have a controller variable in the ","Create Event"," of the instance. This variable is to ensure that the sprite is only created once:"," ","spr_create = true;"," ","Once that is done we need to then go to the ","Draw Event"," and add in this code:"," ","if spr_create","\n    {","\n        spr_create = false;","\n        var _sw = sprite_get_width(spr_Explosion_Alpha);","\n        var _sh = sprite_get_height(spr_Explosion_Alpha);","\n        var _xo = sprite_get_xoffset(spr_Gradient);","\n        var _yo = sprite_get_yoffset(spr_Gradient);","\n        var _surf = surface_create(_sw, _sh);","\n        surface_set_target(_surf);","\n        draw_clear_alpha(c_black, 0);","\n        draw_sprite(spr_Gradient, 0, 0, 0);","\n        sprite_index = sprite_create_from_surface(_surf, 0, 0, _sw, _sh, false, false, _xo, _yo);","\n        draw_clear_alpha(c_black, 0);","\n        draw_sprite(spr_Explosion_Alpha, 0, _xo, _yo);","\n        var _spr = sprite_create_from_surface(_surf, 0, 0, _sw, _sh, false, false, _xo, _yo);","\n        surface_reset_target();","\n        surface_free(_surf);","\n        sprite_set_alpha_from_sprite(sprite_index, _spr);","\n        sprite_delete(_spr);","\n    }"," ","\n    draw_sprite(sprite_index, 0, x, y);\n  "," ","The above code first checks to see if the control variable is true or not, and if it is, it then runs the code to set the sprite alpha, setting the variable to false to prevent the code from running more than once. In this case, it creates a surface the size of the alpha mask that we wish to use, then draws the sprite that is to have its alpha changed onto the surface and creates a new sprite from it, assigning it as the ","sprite_index"," of the object. The code then clears the surface and draws the alpha map sprite to it and creates another new sprite, storing its index in a local variable. Finally, the new sprite assigned to the object gets its alpha set from this temporary sprite, the surface is freed and the temporary sprite is removed."," ","There is one final thing to do here, and that is remove the sprite that has been created for the object from memory when not in use. This would either be done in the ","Destroy Event"," or the ","Room End Event"," like this:"," ","sprite_delete(sprite_index);"," ","Back: ","Sprite Manipulation"," ","Next: ","sprite_set_cache_size"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sprite_set_alpha_from_sprite"]],"6":[[" ","Syntax:"],[" ","Returns"],[" ","Extended Example:"]],"id":"2429"})