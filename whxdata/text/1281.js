rh._.exports({"0":[[" ","gc_target_frame_time"]],"1":[["gc_target_frame_time"]],"2":[["gc_target_frame_time"]],"3":[[" ","gc_target_frame_time"]],"4":[[" ","With this function you can indicate to the garbage collector that it shoulde aim to spend no more than the time specified running each frame. The function takes a time value specified in microseconds (where 1,000,000 microseconds equals one second) and the default target frame time is 100 microseconds."," ","Please note that this is simply a ","target"," value, as some operations still need to run completely in one frame and may sometimes take longer than the target time. Also note that increasing the target time will make the garbage collector more responsive to rapid changes in memory usage and will cause memory to be freed more quickly, though in practice this is unlikely to be required in most cases. Also note that setting the target frame time to 0 will ","not"," cause the collector to stop completely - it will still do a minimal amount of work each frame. To completely disable the collector use the ","gc_enable()"," function."],[" ","gc_target_frame_time(time);"," ","Argument","Type"," ","Description"," ","time","Real"," ","The target time - in microseconds -  that the garbage collector should work each frame"],[" ","N/A"],[" ","if (gc_get_target_frame_time() != 50)","\n    {","\n        gc_target_frame_time(50);","\n    }"," ","The above code checks the current frame time target for the garbage collector and if it is not 50 microseconds then it is set to this value."," ","Back: ","Garbage Collection"," ","Next: ","gc_get_target_frame_time"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1281"})