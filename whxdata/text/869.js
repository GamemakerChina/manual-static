rh._.exports({"0":[[" ","xboxlive_stats_get_stat_names"]],"1":[["xboxlive_stats_get_stat_names"]],"2":[[" ","xboxlive_stats_get_stat_names"]],"3":[[" ","This function can be used to retrieve all the defined stats from the stat manager for a given user. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", and the function will return an array of strings containing the statistics for the user. If an error occurs or the user has no stats the array will still be returned but will have an element count of 0."],[" ","xboxlive_stats_get_stat_names(user_id);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The user ID pointer to get the stat names of"],[" ","Array"],[" ","var _stat_str = xboxlive_stats_get_stat_names(user_id);","\n    for (var i = 0; i < array_length(_stat_str); ++i;)","\n    {","\n        xboxlive_stats_delete_stat(user_id, _stat_str[i]);","\n    }"," ","The above code retrieves all the defined stats for the user ID pointer stored in the given variable, and then loops through the array and deletes the specified stat from the stat manager."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_stats_get_stat"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_stats_get_stat_names"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"869"})