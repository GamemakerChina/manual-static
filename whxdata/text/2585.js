rh._.exports({"0":[[" ","window_handle"]],"1":[["window_handle"]],"2":[[" ","window_handle"]],"3":[[" ","With this function you can get the internal Windows id value (the HWND, a ","pointer","). This function is really only useful for extension writers who need the ","window handle"," to call Windows API's in DLL code (the returned pointer should be cast into a string and then in the C++ just cast it to an HWND). The table below shows the platforms supported along with what they return:"," ","Platform"," ","Returns"," ","Windows"," ","Window HWND"," ","macOS"," ","NSWindow class"," ","Ubuntu (Linux)"," ","XWindow handle"," ","HTML5"," ","Canvas ID"],[" ","window_handle();"],[" ","Pointer"],[" ","win_id = windows_handle();"," ","The above code will store the game window id in a variable."," ","Back: ","The Game Window"," ","Next: ","window_get_caption"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["window_handle"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2585"})