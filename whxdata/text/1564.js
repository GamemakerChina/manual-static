rh._.exports({"0":[[" ","game_save_buffer"]],"1":[["game_save_buffer"]],"2":[[" ","game_save_buffer"]],"3":[[" ","This is a variant of the ","game_save()"," function, so please read ","its page"," first as it contains important information related to its use and to this function's as well."," ","With this function you can save the current state of the game to a previously created \"grow\" buffer (see ","Buffers",") which can then be loaded again at any time using ","game_load_buffer()"," function. This function is designed for use in a single room at a time (ie: it's not advised to do a buffer save in one room, then try and load the buffer from another one) and should ideally be used only for checkpoints or level restarts."," ","NOTE",": This function is ","very"," limited and it is designed for the beginner to get a checkpoint system up and running quickly, but more advanced users may prefer to code their own system using the ","File"," functions, due to the fact that the game will ","not"," save any of the dynamic resources like data structures, surfaces, added sprites etc."],[" ","game_save_buffer(buffer);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The buffer id to save to."],[" ","N/A"],[" ","if keyboard_check_pressed(ord(\"S\"))","\n    {","\n        global.Checkpoint = true;","\n        game_save_buffer(save_buff);","\n    }"," ","The above code will set a global variable to ","true"," and then save the current game state to the buffer indexed in the variable \"save_buff\" when the key \"S\" is pressed."," ","Back: ","General Game Control"," ","Next: ","game_get_speed"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["game_save_buffer"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1564"})