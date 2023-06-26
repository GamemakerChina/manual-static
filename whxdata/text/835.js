rh._.exports({"0":[[" ","surface_get_target"]],"1":[["surface_get_target"]],"2":[[" ","surface_get_target"]],"3":[[" ","With this function you can get the ID of the current surface being targeted for drawing to. If you created that surface using ","surface_create()",", then this will be the positive integer which is the unique ID for that surface"," ","If no custom surface is set, but the default application_surface is still enabled, then the function will typically return 0. However, if you have been manipulating the application_surface previously you might wish to check that the ID you got does not match the current value of the application_surface variable, in case this is no longer 0."," ","If no custom surface is set and the default application_surface has also been disabled, then the function will return -1."],[" ","surface_get_target();"],[" ","Surface ID"," or -1 (if no target surface is set)"],[" ","if surface_get_target() != -1","\n    {","\n        surface_reset_target();","\n    }","\n    draw_surface(surf, 0, 0);"," ","The above code will check to see if the current render target is a surface or not, and if it is, it resets the target then draws a surface."," ","Back: ","Surfaces"," ","Next: ","surface_get_target_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["surface_get_target"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"835"})