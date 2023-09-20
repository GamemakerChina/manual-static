rh._.exports({"0":[[" ","time_source_get_state"]],"1":[["time_source_get_state"]],"2":[[" ","time_source_get_state"]],"3":[[" ","This function returns the ","state"," of the given ","Time Source","."],[" ","time_source_get_state(id);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Time Source ID"," ","The ","Time Source"," to get the state of"],[" ","Time Source State Constant"],[" ","if (keyboard_check_pressed(vk_space))","\n    {","\n        var _state = time_source_get_state(time_source);"," ","\n        if (_state == time_source_state_active)","\n        {","\n            time_source_pause(time_source);","\n        }","\n        else if (_state == time_source_state_paused)","\n        {","\n            time_source_start(time_source);","\n        }","\n    }\n  "," ","When the Space key is pressed, this code will get a ","Time Source","'s state."," ","When the state is active, it will pause the ","Time Source",", and when it's paused, it will resume it."," ","Back: ","Time Sources"," ","Next: ","time_source_get_time_remaining"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["time_source_get_state"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1526"})