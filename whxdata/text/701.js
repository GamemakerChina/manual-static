rh._.exports({"0":[[" ","font_add_enable_aa"]],"1":[["font_add_enable_aa"]],"2":[[" ","font_add_enable_aa"]],"3":[[" ","This function can be used to enable or disable anti-aliasing (AA) for fonts added using ","font_add()",". This function needs to be called ","before"," you add any fonts and setting it to ","true"," will enable AA, and setting it to ","false"," will disable it. By default AA is enabled. Note that this will have no effect on fonts that have been added before the function was called, and the function only needs to be called once when the font is added, and not every draw/step that the font is being used."],[" ","font_add_enable_aa(enable);"," ","Argument","Type"," ","Description"," ","enable","Boolean"," ","Whether to enable (","true",") or disable (","false",") AA for added fonts."],[" ","N/A"],[" ","if !font_add_get_enable_aa()","\n    {","\n        font_add_enable_aa(true);","\n    }"," ","The above code checks the status of anti-aliasing for added fonts and if it not enabled, then we enable it."," ","Back: ","Fonts"," ","Next: ","font_add_get_enable_aa"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["font_add_enable_aa"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"701"})