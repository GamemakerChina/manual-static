rh._.exports({"0":[[" ","layer_background_get_vtiled"]],"1":[["layer_background_get_vtiled"]],"2":[[" ","layer_background_get_vtiled"]],"3":[[" ","This function can be used to find out if the background element is tiled vertically or not. You give the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()","), and the function will return either ","true"," if the element is currently tiled, or ","false"," if it is not."],[" ","layer_background_get_vtiled(background_element_id);"," ","Argument","Type"," ","Description"," ","background_element_id","Background Element ID"," ","The unique ID value of the background element to get the information from"],[" ","Boolean"],[" ","var lay_id = layer_get_id(\"Background_sky\");","\n    var back_id = layer_background_get_id(lay_id);","\n    if !layer_background_get_vtiled(back_id)","\n    {","\n        layer_background_vtiled(back_id, true);","\n    }"," ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check if the element is tiling across the vertical axis, and if it is not then it is set to do so."," ","Back: ","Background Layers"," ","Next: ","layer_background_get_stretch"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_background_get_vtiled"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1305"})