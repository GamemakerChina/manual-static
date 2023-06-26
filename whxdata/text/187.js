rh._.exports({"0":[[" ","gpu_get_alphatestref"]],"1":[["gpu_get_alphatestref"]],"2":[[" ","gpu_get_alphatestref"]],"3":[[" ","You can use this function to find the current value for the alpha test reference (default is 0, but you can use ","gpu_set_alphatestref()"," to set this value to something other than this)."],[" ","gpu_get_alphatestref();"],[" ","Real"," (from 0 - 255)"],[" ","if gpu_get_alphatestenable()","\n    {","\n        if gpu_get_alphatestref() < 254","\n        {","\n            gpu_set_alphatestref(254);","\n        }","\n    }"," ","The above code checks to see if alpha testing is enabled, and if it is, it then checks the current alpha test reference value and sets it if it is less than 254."," ","Back: ","GPU Control"," ","Next: ","gpu_get_texfilter"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_get_alphatestref"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"187"})