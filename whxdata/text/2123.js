rh._.exports({"0":[[" ","draw_surface_part_ext"]],"1":[["draw_surface_part_ext"]],"2":[["draw_surface_part_ext"]],"3":[[" ","draw_surface_part_ext"]],"4":[[" ","This function will draw a part of the chosen surface at the given position following the same rules as per ","draw_surface_part()",", only now you can scale the part, blend a colour with it, or change its alpha when drawing it to the screen (the same as when drawing a surface with ","draw_surface_ext()",")."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."],[" ","draw_surface_part_ext(id, left, top, w, h, x, y, xscale, yscale, colour, alpha);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Surface ID"," ","The unique ID value of the surface to draw."," ","left"," ","Real"," ","The left position in the surface of the part to be drawn."," ","top"," ","Real"," ","The top position in the surface of the part to be drawn."," ","w"," ","Real"," ","The width of the part to be draw, from left."," ","h"," ","Real"," ","The height of the part to be drawn, from top."," ","x"," ","Real"," ","The x position of where to draw the surface."," ","y"," ","Real"," ","The y position of where to draw the surface."," ","xscale"," ","Real"," ","The horizontal scaling the part should be drawn with."," ","yscale"," ","Real"," ","The vertical scaling the part should be drawn with."," ","colour"," ","Colour"," ","The colour blending the part should be drawn with."," ","alpha"," ","Real"," ","The alpha transparency the part should be drawn with."],[" ","N/A"],[" ","draw_surface_part_ext(surf, 8, 8, 32, 32, x, y, 2, 0.5, c_black, 1);"," ","This will draw a 32x32 pixel area from 8x8 pixels into the surface indexed in the variable \"surf\". It will be stretched to double its usual width but half its usual height. It will be opaque and it will be blended with black (turning it into a silhouette)."," ","Back: ","Surfaces"," ","Next: ","draw_surface_stretched"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2123"})