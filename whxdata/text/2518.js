rh._.exports({"0":[[" ","gif_add_surface"]],"1":[["gif_add_surface"]],"2":[["gif_add_surface"]],"3":[[" ","gif_add_surface"]],"4":[[" ","This function saves a frame to a GIF file from a surface."," ","You supply the GIF file ID (as returned by the function ","gif_open",") and a surface (as returned by the function ","surface_create","), as well as a delay time between frames. The delay time is calculated in 1/100ths of a second, but note that once the GIF has been created, if you use it for promotional purposes for example, different browsers may interpret the frame delay slightly differently - see ","here"," for more details. You may (optionally) supply X and Y offset values for the surface being used to add to the GIF, in which case the part drawn to the GIF will begin from the offset and not the default (0, 0) position, permitting you to select only a section of the surface to add. You can also supply a quantization value, which is an integer between 0 and 3, where 0 is full quantization and 3 is zero quantization (lower values will have a subsequent degradation in quality, but create a smaller GIF). Note that there isn't much difference between the default quality of 2, and the highest of 3, and using 3 will significantly slow down the creation of the GIF so care should be taken when using the maximum value."," ","Note that there are no built-in limits on number of frames or on the size of those frames in your GIF, but if you use too much memory then the function will fail and return -1, otherwise it will return 0."," ","NOTE"," This function will only work with surfaces that use the ","surface_rgba8unorm"," (default) surface format."],[" ","gif_add_surface","(gif_index, surface, delay_time, [xoffset], [yoffset]);"," ","Argument"," ","Type"," ","Description"," ","gif_index"," ","GIF ID"," ","The ID of the GIF to add the surface data to"," ","surface"," ","Surface"," ","The surface to use as the added frame"," ","delay_time"," ","Real"," ","The delay time for the frame (in 100ths of a second)"," ","[xoffset]"," ","Real"," ","OPTIONAL"," The offset along the X axis of the surface to add from"," ","[yoffset]"," ","Real"," ","OPTIONAL"," The offset along the Y axis of the surface to add from"," ","[quantization]"," ","Real"," ","OPTIONAL"," The quantization amount from 0 to 3 (0 lowest quality, 3 highest quality, default is 2)"],[" ","Real"],[" ","if (save_gif == true)","\n    {","\n        if (count == 0)","\n        {","\n            gif_image = gif_open(room_width, room_height);","\n        }","\n        else if (count < 30)","\n        {","\n            gif_add_surface(gif_image, application_surface, 6/100);","\n        }","\n        else","\n        {","\n            gif_save(gif_image, \"GameCapture.gif\");","\n            count = 0;","\n            save_gif = false;","\n        }","\n        count++;","\n    }"," ","The above code will create a GIF image file with 30 frames taken from the application surface and then save it."," ","Back: ","Cameras And Display"," ","Next: ","gif_save"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2518"})