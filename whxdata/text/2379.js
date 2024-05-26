rh._.exports({"0":[[" ","draw_vertex_texture_colour"]],"1":[["draw_vertex_texture_colour,draw_vertex_texture_color"]],"2":[["draw_vertex_texture_colour,draw_vertex_texture_color"]],"3":[[" ","draw_vertex_texture_colour"]],"4":[[" ","This function defines the position of a textured vertex for a primitive. The final look of the primitive will depend on the primitive type chosen to draw (See ","draw_primitive_begin"," for more information), the order with which you add the vertices to it, the position of the start and end points that you give for the texture sample and the colour and alpha values that you have set. To maintain the texture appearance while changing only the alpha, a value of ","-1"," (or ","c_white",") may be used for the colour argument. To end and draw the primitive you must call ","draw_primitive_end","."," ","NOTE"," For a texture to repeat it must be a power of two in size, i.e.: 32x32, 128x128, etc."],[" ","draw_vertex_texture_colour","(x, y, xtex, ytex, col, alpha)"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x coordinate of the vertex."," ","y"," ","Real"," ","The y coordinate of the vertex."," ","xtex"," ","Real"," ","The x coordinate within the texture (0 refers to the left edge of the sprite image, 1 refers to the right edge)."," ","ytex"," ","Real"," ","The y coordinate within the texture (0 refers the top edge of the sprite image, 1 refers the bottom edge)."," ","col"," ","Colour"," ","The colour to blend with the texture at this vertex (","-1"," or ","c_white"," for no blending)."," ","alpha"," ","Real"," ","The alpha to draw this vertex with (a value from 0 - 1)."],[" ","N/A"],[" ","draw_set_colour(c_white);","\n    var _tex = sprite_get_texture(spr_Background, 0);","\n    draw_primitive_begin_texture(pr_trianglestrip, _tex);","\n    draw_vertex_texture_colour(0, 0, 0, 0, c_fuchsia, 1);","\n    draw_vertex_texture_colour(640, 0, 1, 0, c_yellow, 1);","\n    draw_vertex_texture_colour(0, 480, 0, 1, c_aqua, 1);","\n    draw_vertex_texture_colour(640, 480, 1, 1, c_lime, 1);","\n    draw_primitive_end();"," ","The above code will draw a 4 vertex triangle strip (making a rectangle) textured with the texture held in the ","_tex"," variable, and the whole texture will be used to cover the completed primitive, and it will be blended with four different colours."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","vertex_format_begin"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2379"})