rh._.exports({"0":[[" ","gamepad_get_guid"]],"1":[["gamepad_get_guid"]],"2":[[" ","gamepad_get_guid"]],"3":[[" ","With this function you can retrieve the GUID for the gamepad connected to the given slot index. You supply the gamepad slot to check (from 0 - 11), and the function will return one of the following strings:"," ","\"","none","\" if no GUID is available or no gamepad is connected"," ","\"","device index out of range","\" if the gamepad slot index is out of range"," ","The GUID string, something like \"050000005e040000fd020000ffff3f00\", if the slot has a gamepad assigned and can get the GUID for it"," ","This function would usually be used in conjunction with ","gamepad_get_description()"," to generate part of the SDL string required for remapping controllers on Windows, Android and macOS."," "," Platform-Specific Notes"," ","Platform"," ","Note"," ","GX.games"," ","On the GX.games target platform, this function will always return ","\"none\""," for non-DirectInput devices"],[" ","gamepad_get_guid(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Real"," ","Which gamepad \"slot\" index to check"],[" ","String"],[" ","var _guid = gamepad_get_guid(global.PadIndex);\n      ","\n      var _desc = gamepad_get_description(global.PadIndex);\n      ","\n      global.GamepadID = _guid + \",\" + _desc;"," ","The above code gets the GUID and name description strings, then concatenates them and stores the final string in a global variable for future reference."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_get_device_count "]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gamepad_get_guid"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1838"})