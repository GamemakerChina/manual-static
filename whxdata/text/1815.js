rh._.exports({"0":[[" ","xboxlive_stats_add_user"]],"1":[["xboxlive_stats_add_user,achievement_stat_event"]],"2":[["xboxlive_stats_add_user,achievement_stat_event"]],"3":[[" ","xboxlive_stats_add_user"]],"4":[[" ","This function can be used to add a given user ID pointer to the statistics manager. This must be done before using any of the other stats functions to automatically sync the game with the XBox Live server and retrieve the latest values. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", and the function will will return -1 if there was an error or if the user ID is invalid, or any other value if the function was successfully called."," ","The function will generate a callback which will trigger a ","System Asynchronous Event",". This event will have the special DS map ","async_load"," which should then be parsed for the following keys:"," ","\"","id","\" - Will hold the constant ","achievement_stat_event"," ","\"","eventname","\" - Will hold the string \"","LocalUserAdded","\""," ","\"","userid","\" - The user ID associated with the request"," ","\"","error","\" - 0 if successful, some other value if there has been an error"," ","\"","errormessage","\" - A string with an error message, if any is available"],[" ","xboxlive_stats_add_user(user_id);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The user ID (a pointer) to add"],[" ","Real"],[" ","for(var i = 0; i < xboxlive_get_user_count(); ++i;)","\n    {","\n        user_id[i] = xboxlive_get_user(i);","\n        xboxlive_stats_add_user(user_id[i]);","\n    }"," ","The above code will get the number of user accounts available then loop through them and assign the account ID to an array, as well as register the user with the stats manager."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_stats_remove_user"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1815"})