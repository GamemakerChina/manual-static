rh._.exports({"0":[[" ","xboxlive_gamedisplayname_for_user"]],"1":[["xboxlive_gamedisplayname_for_user"]],"2":[["xboxlive_gamedisplayname_for_user"]],"3":[[" ","xboxlive_gamedisplayname_for_user"]],"4":[[" ","With this function you can retrieve the display name - as a string - from the user ID pointer given. Note that if the user is local then the returned value is simply a string of the their display name, but if it is a remote user then the string will be their gamertag which can then be used, for example, for muting/unmuting in voice chat."],[" ","xboxlive_gamedisplayname_for_user(user_id);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The ID pointer of the user to check."],[" ","String"],[" ","for(var i = 0; i < xboxlive_get_user_count(); ++i;)","\n    {","\n        user_id[i] = xboxlive_get_user(i);","\n        user_name[i] = xboxlive_gamedisplayname_for_user(user_id[i]);","\n    }"," ","The above code gets the user ID pointer for each available user account and then stores the pointer along with the display name in two arrays."," ","Back: ","Users And Accounts"," ","Next: ","xboxlive_user_for_pad"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"611"})