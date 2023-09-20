rh._.exports({"0":[[" ","draw_set_swf_aa_level"]],"1":[["draw_set_swf_aa_level"]],"2":[[" ","draw_set_swf_aa_level"]],"3":[[" ","This function can be used to set the anti-aliasing (AA) level for SWF format vector sprites. This can be a real value from 0 to 1 and will \"smooth\" the edges of these sprites. Note that to see this effect, you must first have enabled AA using the function ","draw_enable_swf_aa()","."],[" ","draw_set_swf_aa_level(AA);"," ","Argument","Type"," ","Description"," ","AA","Real"," ","The anti-aliasing value to use from 0 to 1."],[" ","N/A"],[" ","if draw_get_swf_aa_level() == 0","\n    {","\n        draw_enable_swf_aa(true);","\n        draw_set_swf_aa_level(0.5);","\n    }"," ","The above code will check the AA value for SWF format sprites, and if it is 0 it enables AA and sets the value to 0.5."," ","Back: ","Sprites And Tiles"," ","Next: ","draw_get_swf_aa_level"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_set_swf_aa_level"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"440"})