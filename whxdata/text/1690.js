rh._.exports({"0":[[" ","gpu_set_zwriteenable"]],"1":[["gpu_set_zwriteenable"]],"2":[["gpu_set_zwriteenable"]],"3":[[" ","gpu_set_zwriteenable"]],"4":[[" ","This function can be used to toggle on (","true",") and off (","false",") depth ordering using the z-buffer. When an instance is rendered in ","GameMaker"," , the depth of a generated pixel (its z coordinate) is stored in the z-buffer, then, if another instance of the scene must be rendered at the same pixel, the two depths are compared (z-testing - see ","gpu_set_ztestenable()",") and the one \"closer\" to the observer is then saved to the z-buffer, replacing the old one. However, this is not always what you wish to happen and there are moments when you may want something to be drawn over everything else, no matter what its z value is. In those cases you can use this function to switch off writing to the z-buffer and so force whatever is being drawn to be drawn over everything else. Note that the description given here is for the ","default"," z-testing comparison mode, but that can be changed"," ","The default value is that z-buffering is enabled (","true",")."],[" ","gpu_set_zwriteenable(enable);"," ","Argument"," ","Type"," ","Description"," ","enable"," ","Boolean"," ","The comparison mode to use (see list above)"],[" ","N/A"],[" ","gpu_set_zwriteenable(false);","\n    with (obj_Menu_Containers)","\n    {","\n        draw_self();","\n    }","\n    gpu_set_zwriteenable(true);"," ","The above code switches off z-buffer writing, draws a number of objects, and then switches it back on again to continue drawing."," ","Back: ","GPU Control"," ","Next: ","gpu_set_depth"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1690"})