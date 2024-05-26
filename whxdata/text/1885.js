rh._.exports({"0":[[" ","game_get_speed"]],"1":[["game_get_speed,gamespeed_fps,gamespeed_microseconds"]],"2":[["game_get_speed,gamespeed_fps,gamespeed_microseconds"]],"3":[[" ","game_get_speed"]],"4":[[" ","This function can be used to get the game speed as either the number of game frames to run per second or as the number of micro seconds per game frame. Note that this is ","not"," the actual running speed FPS value (for that use the ","fps_real"," variable) but rather the number of game frames (FPS) that the game will attempt to maintain each second, or the length of each game frame in microseconds that the game will try to maintain (MPF). When you use this function you need to give one of the following constants which will determine the type of the return value:"," ","Game Speed Constant"," ","Constant"," ","Description"," ","gamespeed_fps"," ","Gets the game speed using frames per second."," ","gamespeed_microseconds"," ","Gets the game speed using microseconds per frame."," ","So, for example, if the game speed is set at 30 in the Game Options and you use the FPS type, then the function will return 30, but if you use the MPF then the function will return 33333."],[" ","game_get_speed(type);"," ","Argument"," ","Type"," ","Description"," ","type"," ","Game Speed Constant"," ","The type of method used to get the game speed (see the constants above)."],[" ","Real"],[" ","if (game_get_speed(gamespeed_fps) != 60) ","\n    {","\n        game_set_speed(60, gamespeed_fps);","\n    }"," ","The above code checks to see if the game is running with a game speed of 60 FPS and if not it is set to 60 FPS."," ","Back: ","General Game Control"," ","Next: ","game_set_speed"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1885"})