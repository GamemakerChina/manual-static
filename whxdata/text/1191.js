rh._.exports({"0":[[" ","ds_queue_destroy"]],"1":[["ds_queue_destroy"]],"2":[["ds_queue_destroy"]],"3":[[" ","ds_queue_destroy"]],"4":[[" ","This function will remove the given queue data-structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the DS queue to prevent memory leaks that can slow down and crash your game."," ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the ","ds_exists()"," function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards so we recommend always setting the variable that held the DS index to -1 after destroying."],[" ","ds_queue_destroy(id);"," ","Argument","Type"," ","Description"," ","id","DS Queue ID"," ","The id of the data structure to remove."],[" ","N/A"],[" ","if (lives == 0)","\n    {","\n        ds_queue_destroy(AI_queue);","\n        AI_queue = -1;","\n        room_goto(rm_Menu);","\n    }"," ","The above code will check the value of the built in global variable \"lives\" and if it is 0, it destroys the DS queue indexed in the variable \"AI_queue\" and then changes rooms."," ","Back: ","DS Queues"," ","Next: ","ds_queue_clear"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1191"})