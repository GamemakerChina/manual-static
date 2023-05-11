rh._.exports({"0":[[" ","surface_format_is_supported"]],"1":[["surface_format_is_supported"]],"2":[["surface_format_is_supported"]],"3":[[" ","surface_format_is_supported"]],"4":[[" ","This function returns whether the given surface format is supported on the current platform. All formats are ","listed here","."],[" ","surface_get_format(format);"," ","Argument"," ","Type"," ","Description"," ","format"," ","Surface Format Type Constant"," ","The surface format to check"],[" ","Boolean"],[" ","if (surface_format_is_supported(surface_rgba32float))","\n    {","\n        my_surf = surface_create(320, 180, surface_rgba32float);","\n        // ...","\n    }","\n    else","\n    {","\n        show_debug_message(\"Effect disabled, 32-bit surface not supported\");","\n    }"," ","This checks if the ","surface_rgba32float"," format is supported on the current platform, and in that case it creates a surface with that format. However if the format is not supported, it instead prints a message to the output log."," ","Back: ","Surfaces"," ","Next: ","surface_free"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1246"})