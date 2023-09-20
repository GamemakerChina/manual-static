rh._.exports({"0":[[" ","layer_sequence_get_instance"]],"1":[["layer_sequence_get_instance"]],"2":[[" ","layer_sequence_get_instance"]],"3":[[" ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return the sequence ","instance"," ","struct",". You can find out more about the format of the sequence instance struct on ","this page","."],[" ","layer_sequence_get_instance(sequence_element_id)"," ","Argument"," ","Type"," ","Description"," ","sequence_element_id"," ","Sequence Element ID"," ","The unique ID value of the sequence element to target"],[" ","Sequence Instance Struct"],[" ","var _seq = layer_sequence_create(\"Background\", 0, 0, seq_AnimatedBackground);","\n    var _struct = layer_sequence_get_instance(_seq);","\n    _struct.speedScale = 0.5;"," ","The above code creates a new sequence element and then retrieves its sequence instance ID. This is then used to change the playback speed scale property of the sequence instance."," ","Back: ","Sequence Layers"," ","Next: ","layer_sequence_get_sequence"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_sequence_get_instance"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1445"})