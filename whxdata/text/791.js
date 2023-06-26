rh._.exports({"0":[[" ","layer_get_y"]],"1":[["layer_get_y"]],"2":[[" ","layer_get_y"]],"3":[[" ","You can use this function to retrieve the y position of the layer within the currently scoped room. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the function returns a real number for the x position of the layer, relative to the (0,0) position of the room. Default is 0."],[" ","layer_get_y(layer_id)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to get the y position of"],[" ","Real"],[" ","var lay_id = layer_get_id(\"Sprites\");","\n    if layer_get_x(lay_id) != 0 || layer_get_y(lay_id) != 0","\n    {","\n        layer_x(lay_id, 0);","\n        layer_y(lay_id, 0);","\n    }"," ","The above code checks the given layer position and if it is not set to (0, 0) then it is set to that position."," ","Back: ","General Layer Functions"," ","Next: ","layer_get_hspeed"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_get_y"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"791"})