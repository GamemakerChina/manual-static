rh._.exports({"0":[[" ","layer_depth"]],"1":[["layer_depth"]],"2":[["layer_depth"]],"3":[[" ","layer_depth"]],"4":[[" ","This function can be used to change the ","depth"," of the given layer, changing the order in which its contents will be rendered to the screen. You supply the layer ID (which you get when you create the layer using ","layer_create",") or the layer name (as a string - this will have a performance impact) and then give the new depth to set it to (an integer value from ","-16000"," to ","16000","). The layer depth is defined as being higher when \"further away\" from the camera and lower when \"closer\" to the camera, so if you have three layers with depths -100, 0, 100, the layers will draw in the order 100, 0, -100, so that the \"top\" layer (i.e., the closest to the camera view and so drawn over everything else) will be the layer with the -100 depth."," ","The following image shows a schematic of how depth works for layers:"," ","Note that you can check the depth of a layer at any time using the function ","layer_get_depth",". Also note that the minimum and maximum layer depths are ","-16000"," to ","16000",", and anything outside of those depths ","will not be rendered",". If you require a depth outside of that range then you will need to use the function ","layer_force_draw_depth","."," ","NOTE"," Depth values are approximate. If you try to draw things at depth values close to the maximum depth and minimum depth, they may not be drawn due to inaccuracies introduced by the calculations."," ","Keep in mind that modifying the depth of a layer may change which ","Filters and Effects"," are applied to it, as changing the depth to be lower than an FX layer's depth will no longer apply its effect on the layer."],[" ","layer_depth","(layer_id, depth)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer"," ","The unique ID value of the layer to set the depth of (or the layer name as a string)"," ","depth"," ","Real"," ","The new depth for the layer"],[" ","N/A"],[" ","if (layer_get_depth(layer) != -100) ","\n    {","\n        layer_depth(layer, -100);","\n    }"," ","The above code gets the depth of the layer that the instance running the code is on, and if it is not -100 then the depth is set to -100."," ","Back: ","Layers"," ","Next: ","layer_force_draw_depth"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2347"})