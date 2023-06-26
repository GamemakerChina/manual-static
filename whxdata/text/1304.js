rh._.exports({"0":[[" ","layer_sequence_get_angle"]],"1":[["layer_sequence_get_angle"]],"2":[[" ","layer_sequence_get_angle"]],"3":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the current angle of the sequence element in the game room. Note that angles are returned in degrees, and 0º is to the right, 90º is up, 180º is to the left and 270º is down."],[" ","layer_sequence_get_angle(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Real"],[" ","var _ang = layer_sequence_get_angle(title_sequence)","\n    if _ang > 0","\n    {","\n        _ang -= 1;","\n        layer_sequence_angle(title_sequence, _ang);","\n    }"," ","The above code retrieves the current angle of the sequence element with the ID stored in the variable \"title_sequence\", and if it's not 0, then 1 is subtracted form the current angle."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_xscale"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sequence_get_angle"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1304"})