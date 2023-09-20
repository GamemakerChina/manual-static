rh._.exports({"0":[[" ","xboxlive_user_is_signed_in"]],"1":[["xboxlive_user_is_signed_in"]],"2":[[" ","xboxlive_user_is_signed_in"]],"3":[[" ","The function will check to see if a user is signed-in and return ","true"," if there is and ","false"," otherwise. If no user is signed in then you can call the function ","xboxlive_show_account_picker()"," to open the account picker and prompt them to sign-in."],[" ","xboxlive_user_is_signed_in();"],[" ","Boolean"],[" ","if !xboxlive_user_is_signed_in()","\n    {","\n        if !xboxlive_user_is_signing_in()","\n        {","\n            xboxlive_show_account_picker();","\n        }","\n    }","\n    else","\n    {","\n        global.GamerTag = xboxlive_gamertag_for_user();","\n    }"," ","The above code checks to see if a user is signed-in to XBox Live and if they are signed-in, the code will get the gamertag for the user and store it in a global variable for future use. If they are not signed-in then the code checks to see if they are in the process of signing-in, in which case nothing further will happen, and if they are not, then it will open the account picker, prompting them to sign-in."," ","Back: ","Users And Accounts"," ","Next: ","xboxlive_user_is_signing_in"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["xboxlive_user_is_signed_in"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"707"})