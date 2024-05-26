rh._.exports({"0":[[" ","layer_sequence_create"]],"1":[["layer_sequence_create"]],"2":[["layer_sequence_create"]],"3":[[" ","layer_sequence_create"]],"4":[[" ","With this function you can create an instance of a sequence asset on the given layer. You supply the layer ID which can be a string of the layer name - as defined in ","The Room Editor"," - or the unique layer ID - as returned by the function ","layer_get_id",", as well as the X and Y position in the room to create the sequence at, and finally the ID of the sequence to create. The sequence ID is the name constant that you defined in the Asset Browser for the sequence. The function will return the unique ID of the sequence element, which can then be used in all further layer functions for sequences, or it can be used to retrieve the sequence instance struct using the function ","layer_sequence_get_instance","."," ","It is worth noting that if the sequence contains any object tracks, their instances will be created as soon as the sequence element itself is created, regardless of where their asset keys are positioned on the ","Dope Sheet",". The Sequence controller simply toggles the ","visibility"," of the instance to hide and show it depending on the position and duration of the track's asset key and does ","not ","repeatedly create and destroy it. As a result, instances will run their Create events when the sequence element is created and not when their asset keys begin."," ","NOTE"," All instances that are created for the object tracks are created on the same layer as the sequence instance."],[" ","layer_sequence_create","(layer_id, x, y, sequence_id)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer"," ","The unique ID value of the layer to target"," ","x"," ","Real"," ","The x position in the room to create the sequence at"," ","y"," ","Real"," ","The y position in the room to create the sequence at"," ","sequence_id"," ","Sequence Asset"," ","The sequence asset to use, as defined in the Asset Browser"],[" ","Sequence Element ID"],[" ","var _s = ","layer_sequence_create","(\"Background\", 0, 0, seq_AnimatedBackground);","\n    layer_sequence_pause(_s);"," ","The above code creates a new sequence on the layer \"Background\" then pauses it."," ","Back: ","Sequence Elements"," ","Next: ","layer_sequence_destroy"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2397"})