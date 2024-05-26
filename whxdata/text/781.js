rh._.exports({"0":[[" ","highscore_add"]],"1":[["highscore_add"]],"2":[["highscore_add"]],"3":[[" ","highscore_add"]],"4":[[" ","With this function you can add a name and a score to the internal global high score list. There is no need to check the value to see if it is high enough to enter into the score list as ","GameMaker"," will only store those values that are greater than the tenth position stored."],[" ","highscore_add(str, numb);"," ","Argument"," ","Type"," ","Description"," ","str"," ","String"," ","The string (name) to attribute the score to."," ","numb"," ","Real"," ","The number (score) to add."],[" ","N/A"],[" ","if (lives == 0)","\n    {","\n        highscore_add(global.Name, score);","\n        score = 0;","\n        room_goto(rm_MainMenu);","\n    }"," ","The above code will check the lives and if they are set to 0, it will add the current score and the string held in the global variable \"Name\" into the high score list, before finally setting the score to 0 and sending the player to the room indexed in \"rm_MainMenu\"."," ","Back: ","General Game Control"," ","Next: ","highscore_name"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"781"})