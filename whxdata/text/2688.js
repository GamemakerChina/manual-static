rh._.exports({"0":[[" ","call_later"]],"1":[["call_later"]],"2":[["call_later"]],"3":[[" ","call_later"]],"4":[[" ","This function triggers a callback function after the specified time or after a certain interval. It does this by creating a ","Time Source"," (see ","Time Sources",")."," ","To cancel the callback function, see ","call_cancel","."," ","IMPORTANT"," While this function returns an actual time source, it cannot be used with the time source functions, as the time sources used by ","call_later"," and ","call_cancel"," are \"invisible\" - they will not appear as children of any built-in time sources and cannot be used with other time source functions. They are, however, included in the time source count returned by ","debug_event(\"ResourceCou","nts\")","."],[" ","The following is a breakdown of this function's arguments: "],[" ","This is a period of time that may be expressed in seconds or frames, depending on the unit specified in the next argument."," ","When using frames as the unit, the period must be an integer. Non-integer values are rounded down (floored), with the exception of values lower than 1, which are rounded up to 1."],[" ","This is the unit that the period is expressed in, and may be ","time_source_units_seconds"," or ","time_source_units_frames","."," ","See: ","Time Source Units"," ","You can use a beats-per-minute value by using ","time_bpm_to_seconds()","."],[" ","You must specify a \"callback\" ","method"," that is called when the ","Time Source"," expires."," "," ","Loop"," "," ","Whether the time source should loop."],[" ","call_later(period, unit, callback, [loop=false]);"," ","Argument"," ","Type"," ","Description"," ","period"," ","Real"," ","The period that the ","Time Source"," runs for, in the given units"," ","units"," ","Time Source Unit Constant"," ","The units that the given period is in"," ","callback"," ","Method"," or ","Script Function"," ","The method or script function to call after the specified time"," ","loop"," ","Boolean"," ","OPTIONAL"," Whether to loop the ","Time Source"," (default is ","false",")"],[" ","Time Source"],[" ","var _callback = function()","\n    {","\n        show_debug_message(\"Five seconds have passed!\");","\n    }","\n    var _handle = call_later(5, time_source_units_seconds, _callback);"," ","In this example, we create a callback function that shows a debug message after five seconds have passed. After that, the underlying ","Time Source"," is destroyed."],[" ","var _create_enemy = function()","\n    {","\n        var _x = random(room_width);","\n        var _y = random(room_height);","\n        instance_create_depth(_x, _y, depth, obj_enemy);","\n    }"," ","\n    var _handle = call_later(10, time_source_units_seconds, _create_enemy, true);\n  "," ","In this example, we create a callback function that creates a new enemy at a random position in the room. This function is then executed every 10 seconds by passing it to ","call_later",". The last argument is set to ","true"," so the function keeps getting called every 10 seconds."," ","Use ","call_cancel"," with the handle returned by ","call_later"," to stop the ","Time Source"," and the calls to the callback."," ","Back: ","Time Sources"," ","Next: ","call_cancel"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"7":[[" "],[" ","Period"," "],[" "],[" ","Unit"," "],[" "],[" ","Callback"," "]],"8":[[" ","Arguments"]],"id":"2688"})