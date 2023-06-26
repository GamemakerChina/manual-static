rh._.exports({"0":[[" ","gamepad_get_option"]],"1":[["gamepad_get_option"]],"2":[[" ","gamepad_get_option"]],"3":[[" ","This function can be used to retrieve the given option value. You supply the gamepad \"slot\" to check, as well as the option string and the function will return the associated value. The available option string will depend on the platform that the project is being run on, as listed below:"," ","Option"," ","Platform"," ","Description"," ","Returns"," ","\"allow_rotation\""," ","tvOS"," ","Returns whether the Siri Remote will be rotation locked (ie: can only be used vertically) or not. When unlocked, rotating the control will change the input, such that a rotation of 90º to the left will make the \"right\" side of the touch pad return \"up\", etc... such that all input will be relative to the orientation of the device"," ","Boolean"," ","\"dpad_absolute\""," ","tvOS"," ","Returns whether the Siri Remote touchpad accepts absolute input, or relative input. In absolute mode, the center of the touch pad is considered the (0,0) position - ie: where the analog stick is at rest or where the center of the dpad would be - and movement around this position will generate input. When set to relative, then the (0,0) position will be considered as being wherever the initial touch on the pad is made and all input will be generated from that position, not the center of the pad."," ","Boolean"],[" ","gamepad_get_option(device, option_name);"," ","Argument","Type"," ","Description"," ","device","Real"," ","Which gamepad device \"slot\" to check."," ","option_name","String"," ","The name of the option to get the value from (a string, see the table above)"],[" ","Boolean",", ","Real",", ","String",", or ","N/A"," (depends on platform and option)"],[" ","for(var i = 0; i < 12; ++i;)","\n    {","\n        if gamepad_is_connected(i) && gamepad_get_description(i) == \"tvOS Siri Remote\"","\n        {","\n            if gamepad_get_option(i, \"allow_rotation\") == false","\n            {","\n                gamepad_set_option(i, \"allow_rotation\", true);","\n            }","\n        }","\n    }"," ","The above code loops through all the gamepad slots and checks for the \"Siri Remote\" on the tvOS platform. If one is detected, it then sets the remote to allow input rotation."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_set_button_threshold "]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gamepad_get_option"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2105"})