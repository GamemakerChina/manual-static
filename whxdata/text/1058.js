rh._.exports({"0":[[" ","device_is_keypad_open"]],"1":[["device_is_keypad_open"]],"2":[["device_is_keypad_open"]],"3":[[" ","device_is_keypad_open"]],"4":[[" ","This does a check of the device for a keypad and if one is available it returns ","true"," otherwise it returns ","false",". Please note that this function is mainly for use with Android devices"," ","For those users with a ","Sony Xperia Play",", there is a set button/key map setup within ","GameMaker",", so you can use the ","keyboard constants"," ","vk_up",", ","vk_down",", ","vk_left",", ","vk_right"," for the joypad keys and ","Triangle"," is ","ord(\"T\")",", ","Square"," is ","ord(\"S\")",", ","Circle"," is ","vk_alt"," + ","vk_backspace"," while the ","back"," button is simply ","vk_backspace",", ","Cross"," is ","vk_space",", ","Select"," is ","vk_return"," and ","Start"," is ","vk_rshift",", the ","L Trigger"," is ","ord(\"L\")"," and ","R Trigger"," is ","ord(\"R\")","."],[" ","device_is_keypad_open"],[" ","Boolean"],[" ","if device_is_keypad_open()","\n    {","\n         global.Setting = 2;","\n    }","\n    else","\n    {","\n         global.Setting = 1;","\n    }"," ","The above code checks for a keypad then changes a global variable depending on the returned value."," ","Back: ","Device Input"," ","Next: ","device_get_tilt_x"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1058"})