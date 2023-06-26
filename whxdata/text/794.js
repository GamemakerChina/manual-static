rh._.exports({"0":[[" ","layer_sequence_is_paused"]],"1":[["layer_sequence_is_paused"]],"2":[[" ","layer_sequence_is_paused"]],"3":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will check if the sequence is currently paused or not, returning ","true"," if it is paused, and ","false"," if it is not."],[" ","layer_sequence_is_paused(sequence_element_id)"," ","Argument","Type"," ","Description"," ","sequence_element_id","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Boolean"],[" ","if layer_sequence_is_paused(title_sequence) != 0","\n    {","\n        layer_sequence_play(title_sequence);","\n    }"," ","The above code checks if the sequence element ID stored in the variable \"title_sequence\" is paused, and if it is it starts it playing."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_is_finished"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sequence_is_paused"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"794"})