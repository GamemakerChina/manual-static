rh._.exports({"0":[[" ","keyboard_virtual_status"]],"1":[["keyboard_virtual_status"]],"2":[["keyboard_virtual_status"]],"3":[[" ","keyboard_virtual_status"]],"4":[[" ","This function can be used to get the status of the virtual keyboard on the device running the game. The function will return ","true"," if the OS virtual keyboard is visible/being shown or ","false"," if it is hidden/hiding."],[" ","keyboard_virtual_status();"],[" ","Boolean"],[" ","var _status = keyboard_virtual_status();","\n    if (_status == false) ","\n    {","\n        keyboard_virtual_show(kbv_type_numbers, kbv_returnkey_default, kbv_autocapitalize_none, false);","\n    }"," ","The above code will show the OS virtual keyboard if the current status is ","false","."," ","Back: ","Virtual Keys And Keyboards"," ","Next: ","keyboard_virtual_height"]],"5":[[" ","Syntax"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"208"})