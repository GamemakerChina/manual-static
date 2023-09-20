rh._.exports({"0":[[" ","show_question"]],"1":[["show_question"]],"2":[[" ","show_question"]],"3":[[" ","This function creates a pop-up message box with two buttons for \"Yes\" and \"No\". It returns ","true"," or ","false"," depending on which one of the two buttons the user presses."," ","NOTE"," This function is for ","debug use only"," on the Windows target, but is ","deprecated"," on all other targets."],[" ","show_question(str);"," ","Argument"," ","Type"," ","Description"," ","str"," ","String"," ","The string to show in the pop-up question."],[" ","Boolean"],[" ","if (score > 500) && debug_mode","\n    {","\n        if show_question(\"Continue to next room?\")","\n        {","\n            room_goto(rm_Level2);","\n        }","\n        else game_end();","\n    }"," ","The above code will check the score and if it is over 500, it will ask the user if they wish to continue or not and if the \"yes\" button is clicked it will go to another room, but if the \"no\" button is selected it will end the game."," ","Back: ","Debugging"," ","Next: ","show_debug_message"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["show_question"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1048"})