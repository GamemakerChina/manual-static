rh._.exports({"0":[[" ","median"]],"1":[["median"]],"2":[["median"]],"3":[[" ","median"]],"4":[[" ","This function returns the median of the input values, that is, the middle value. When the number of arguments is even, the larger of the two middle values is returned and the function can have as many arguments as required (note that more arguments will mean that the function will be slower to parse) which must all be real values. This means that, for example, ","median(43, 12, 25, 19, 6)"," would return 19 as it is the middle value between all the rest."],[" ","median(val1, val2, ... max_val);"," ","Argument"," ","Type"," ","Description"," ","val0 ... max_val"," ","Real"," ","The values to compare."],[" ","Real"],[" ","x = median(0, x, room_width);","\n    y = median(0, y, room_height);"," ","This will stop the player from exiting any side of the room, by using median as a clamp. If the player, for instance, moves to the left of the room boundary, its x will be smaller than 0. This will mean the middle number of the first of the medians will be 0, so the player will be jumped to (0,y)."," ","Back: ","Number Functions"," ","Next: ","min"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"830"})