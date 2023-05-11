rh._.exports({"0":[[" ","xboxlive_gamerscore_for_user"]],"1":[["xboxlive_gamerscore_for_user"]],"2":[["xboxlive_gamerscore_for_user"]],"3":[[" ","xboxlive_gamerscore_for_user"]],"4":[[" ","This function will return the XBox Live gamerscore for the given user ID pointer."],[" ","xboxlive_gamerscore_for_user(user_id);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The user ID (a pointer) to check"],[" ","Real"],[" ","var _a = 0;","\n    var _num = xboxlive_get_user_count();","\n    for (var i = 0; i < _num; ++i;)","\n    {","\n        var _uid = xboxlive_get_user(i);","\n        if _uid != pointer_null","\n        {","\n            global.UserName[_a] = xboxlive_gamedisplayname_for_user(_uid);","\n            global.UserScore[_a] = xboxlive_gamerscore_for_user(_uid);","\n            global.UserRep[_a] = xboxlive_reputation_for_user(_uid);","\n            global.UserAvatar[_a] = xboxlive_sprite_add_from_gamerpicture(_uid, 256, 0, 0);","\n            ++a;","\n        }","\n    }"," ","The above code loops through the logged in users and stores their gamer data in various global arrays."," ","Back: ","Users And Accounts"," ","Next: ","xboxlive_show_profile_card_for_user"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"877"})