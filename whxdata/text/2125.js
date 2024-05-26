rh._.exports({"0":[[" ","instance_change"]],"1":[["instance_change"]],"2":[["instance_change"]],"3":[[" ","instance_change"]],"4":[[" ","You can use this function to change one instance of an object into another instance of a different object, and while doing so decide whether to perform the initial instance's Destroy and Clean Up Events and the new instance's Create Event."," ","In this way, you can have (for example) a bomb change into an explosion - in which case the \"perf\" argument would probably be true as you would want the bomb to perform its Destroy Event and Clean Up Event, as well as the explosion to perform its Create Event - or you could have your player character change into a different one - in which case the \"perf\" argument would probably be false as you do not want the instances to perform their Create and Destroy/Clean Up events so it keeps the same properties."," ","It is worth noting that changing the instance means that you should perform no further actions with that instance until the next step, in particular trying to access variables etc. as that will cause an error. Basically, you change the instance but it is not actually available until the end of the current step, so to access any of the variables it contains directly (for example, calling ","obj_Changed.x",") will not work."," ","WARNING"," When changing a physics enabled instance, its physical properties ","will not be carried over"," to the new instance being changed into. Therefore you should have code in place to \"transfer\" the physics state of the current instance over to the new instance, or have defined the new instance's physical properties in its Create Event, or in the object editor. For this reason it is not recommended to use this function with physics enabled instances, but rather use a combination of the functions ","instance_destroy()"," and ","instance_create_layer()","."],[" ","instance_change(obj, perf);"," ","Argument"," ","Type"," ","Description"," ","obj"," ","Object Asset"," ","The new object the calling object will change into."," ","perf"," ","Boolean"," ","Whether to perform creation and destruction events (","true",") or not (","false",")."],[" ","N/A"],[" ","if (keyboard_check(vk_enter)) ","\n    {","\n        instance_change(obj_Player_Swimming, false);","\n        exit;","\n    }"," ","The above code will change the calling instance into an instance of \"obj_Player_Swimming\" without performing the original instances destroy event nor the new instances create event when the user presses the \"Enter\" key, exiting the code block when done."," ","Back: ","Instances"," ","Next: ","instance_copy"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2125"})