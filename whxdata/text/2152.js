rh._.exports({"0":[[" ","script_execute_ext"]],"1":[["script_execute_ext"]],"2":[["script_execute_ext"]],"3":[[" ","script_execute_ext"]],"4":[[" ","This function works similarly to the function ","script_execute"," but allows you to pass the arguments required for the function/script as an ","array","."," ","You can also pass two optional arguments to the function to specify an offset into the array to get the arguments from, as well as the number of arguments to use from the array (this must be a maximum of array_length - offset)."],[" ","script_execute_ext","(scr, [array_args], [offset], [num_args]);"," ","Argument"," ","Type"," ","Description"," ","scr"," ","Script Asset"," or ","Script Function"," ","The function/script that you want to call"," ","array_args"," ","Array"," ","OPTIONAL"," The array containing the arguments for the function/script. Can be omitted if the function/script takes no arguments."," ","[offset]"," ","Real"," ","OPTIONAL"," The offset into the argument array"," ","[num_args]"," ","Real"," ","OPTIONAL"," The number of arguments to use (from the offset onwards)"],[" ","Any"," (Will depend on the return value from the function/script being called)"],[" ","script_execute_ext","(move_inst, move_array, floor(random(4)), 1);"," ","The above example code will use ","script_execute_ext"," to call the given function, supplying an array of four arguments, but only using one of them at random."," ","Back: ","Scripts"," ","Next: ","script_exists"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2152"})