rh._.exports({"0":[[" ","is_mouse_over_debug_overlay"]],"1":[["is_mouse_over_debug_overlay"]],"2":[["is_mouse_over_debug_overlay"]],"3":[[" ","is_mouse_over_debug_overlay"]],"4":[[" ","This function returns ","true"," ","if the mouse is over a debug overlay window or gadget, or is being used by the debug overlay in any other way (i.e. when dragging windows)."," ","The mouse is over ","The Debug Overlay"," whenever it's over a menu or window."],[" ","is_mouse_over_debug_overlay","();"],[" ","Boolean"],[" ","Step Event"," ","if (!","is_mouse_over_debug_overlay","())","\n    {","\n        if (keyboard_check_pressed(vk_control))","\n        {","\n            instance_create_layer(mouse_x, mouse_y, layer, obj_enemy);","\n        }","\n    }"," ","The code example above first uses ","is_mouse_over_debug_overlay"," to check if the mouse is over any menu or window of ","The Debug Overlay",". If it's not, ","keyboard_check_pressed"," is used to check if the ","Ctrl"," key was pressed. If that's the case, an instance of an object ","obj_enemy"," is created at the mouse position."," ","Back: ","The Debug Overlay"," ","Next: ","is_keyboard_used_debug_overlay"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1262"})