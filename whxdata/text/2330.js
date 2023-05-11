rh._.exports({"0":[[" ","surface_create_ext"]],"1":[["surface_create_ext"]],"2":[["surface_create_ext"]],"3":[[" ","surface_create_ext"]],"4":[[" ","This function allows you to attach a surface to a canvas element that already exists in your web page, meaning that you can effectively split up portions of your game to be drawn at various different places within the page. To that end, you ","must"," have defined the canvas element correctly within the ","*.html"," page of your game using the correct sizes and names that correspond to the surfaces you wish to create. So, you would have your \"main\" canvas, and then your secondary surface canvas elements, which will be assigned using this function to the correct surfaces. The following image is an example of how a page with three canvas elements would be set up:"," ","The page layout can be tricky, especially if you wish all the elements to line up correctly, but once the hard task of creating the layout has been completed, you can then add this ","html"," file as the default page file for the game using the ","HTML5 Tab"," of the ","Game Options",". The next thing you should do is set up your room and views, as each surface will need to be associated with a specific view to \"capture\" the game images (see the view variable ","view_surface_id[0...7]","). The image below shows how the game room for the above canvas example would be set out:"," ","Finally you would then use this function to create the surfaces, with the name being the same as that used for the canvas elements and the size corresponding to the size of that same canvas. The function will return the index of the surface which should be stored in a variable for future function calls. When the surface is first created, it may contain \"noise\" as basically it is just an area of memory that is put aside for the purpose (and that memory may still contain information), so you may want to clear the surface before use with a function like ","draw_clear_alpha()","."," ","This function will always create a surface with the ","surface_rgba8unorm"," format."," ","NOTE"," ","This function is only available for use with the HTML5 module."],[" ","surface_create_ext(name, w, h);"," ","Argument"," ","Type"," ","Description"," ","name"," ","String"," ","The name of the canvas element to link the surface to."," ","w"," ","Real"," ","The width of the surface to be created."," ","h"," ","Real"," ","The height of the surface to be created."],[" ","Surface ID"],[" ","s1 = surface_create_ext(\"surface1\", 192, 550);","\n    s2 = surface_create_ext(\"surface2\", 608, 186);","\n    view_surface_id[1] = s1;","\n    view_surface_id[2] = s2;"," ","The above code creates two surfaces of different sizes, assigning each one to a different canvas element, and then those surfaces are assigned to two views so that the correct part of the room is captured."," ","Back: ","Surfaces"," ","Next: ","surface_resize"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2330"})