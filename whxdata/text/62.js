rh._.exports({"0":[[" ","xboxlive_get_user_count"]],"1":[["xboxlive_get_user_count"]],"2":[[" ","xboxlive_get_user_count"]],"3":[[" ","With this function you can find the total number of users currently signed in to the XBox system. The return value will be an integer value, from 0 - N, where N is the number of signed in users -1."],[" ","xboxlive_get_user_count();"],[" ","Real"],[" ","for(var i = 0; i < xboxlive_get_user_count(); ++i;)","\n    {","\n        user_id[i] = xboxlive_get_user(i);","\n    }"," ","The above loops through all the signed in users and stores their unique ID pointer in an array."," ","Back: ","Users And Accounts"," ","Next: ","xboxlive_get_user"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_get_user_count"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"62"})