rh._.exports({"0":[[" ","fx_set_single_layer"]],"1":[["fx_set_single_layer"]],"2":[[" ","fx_set_single_layer"]],"3":[[" ","This function is used to enable or disable \"Single Layer\" mode for a filter/effect. By default, a filter/effect is applied to the layer that it is ","assigned to"," and all layers below that layer, however you can enable Single Layer mode on an FX struct to make sure that it's only applied to the layer that it is assigned to."," ","You specify an FX struct (as returned from ","fx_create()"," or ","layer_get_fx()",") and a ","boolean"," value to enable (","true",") or disable (","false",") Single Layer mode."," ","The following visual shows a filter being used with Single Layer mode disabled (which is the default behaviour for all FX layers) and the same filter with Single Layer mode enabled:"," ","Single Layer Mode OFF"," ","Single Layer Mode ON"," ","NOTE"," When you enable Single Layer mode for an FX, make sure that you apply it to a layer that is not an ","FX layer",", because an FX layer by itself contains nothing and so no filter/effect will be visible."],[" ","fx_set_single_layer(filter_or_effect, enable);"," ","Argument","Type"," ","Description"," ","filter_or_effect","FX Struct"," ","The FX struct to modify"," ","enable","Boolean"," ","A ","boolean"," value to enable (","true",") or disable (","false",") Single Layer Mode"],[" ","N/A"],[" ","shake_fx = fx_create(\"_filter_screenshake\");","\n    fx_set_single_layer(shake_fx, true);","\n    layer_set_fx(\"ShakeyThings\", shake_fx);"," ","The above code creates a new screenshake FX, enables Single Layer mode on it and then applies it to a room layer. This means that the screenshake filter will only be applied to the ","\"ShakeyThings\""," layer."," ","Back: ","Filter and Effect Functions"," ","Next: ","layer_set_fx"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["fx_set_single_layer"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2248"})