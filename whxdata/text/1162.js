rh._.exports({"0":[[" ","path_get_speed"]],"1":[["path_get_speed"]],"2":[["path_get_speed"]],"3":[[" ","path_get_speed"]],"4":[[" ","This function returns the speed factor of any given position on a path. The position should be a value between 0 and 1 (you can use ","path_position",", for example, if you need the current position of the instance) with 0 being the start position and 1 being the end. The value returned will be the factor by which the actual ","path_speed"," ","is being set. For example, on a path with only two points, 0 and 1, where the point 0 speed factor is 100 and point 1 speed factor is 0, the function ","path_get_speed(path, 0.5)"," will return 50."],[" ","path_get_speed(ind, pos);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Path Asset"," ","The index of the path to check."," ","pos"," ","Real"," ","How far through the path to check. Between 0 (start) and 1 (end), can be decimal."],[" ","Real"],[" ","speed = path_get_speed(pth_Patrol, 0.5) / 20;"," ","This will set the calling instance's speed to the speed factor of the point at exactly halfway through the given path, divided by 20. So if the speed factor found is the default 100, it will set the speed of the calling instance to 5."," ","Back: ","Paths"," ","Next: ","path_get_x"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1162"})