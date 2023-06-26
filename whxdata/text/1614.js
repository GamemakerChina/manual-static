rh._.exports({"0":[[" ","layer_get_script_begin"]],"1":[["layer_get_script_begin"]],"2":[[" ","layer_get_script_begin"]],"3":[[" ","You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and this function will return the ","script function"," index of the function assigned to run at the beginning of rendering for that layer, or it will return -1 if no function is assigned. You can assign script functions to a layer with ","layer_script_begin()"," and ","layer_script_end()","."],[" ","layer_get_script_begin(layer_id);"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to target (or the layer name as a string)"],[" ","Script Function"," or -1 (if no function is assigned)"],[" ","if layer_get_script_begin(layer) == -1","\n    {","\n        layer_script_begin(layer, scr_SetShaderValues);","\n    }"," ","The above code will check to see if the layer that the instance running the code has a script function assigned to it and if it doesn't one is assigned."," ","Back: ","General Layer Functions"," ","Next: ","layer_get_script_end"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_get_script_begin"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1614"})