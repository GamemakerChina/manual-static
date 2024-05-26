rh._.exports({"0":[[" ","device_mouse_raw_x"]],"1":[["device_mouse_raw_x"]],"2":[["device_mouse_raw_x"]],"3":[[" ","device_mouse_raw_x"]],"4":[[" ","This function returns the raw x position of a touch on the device. What this means is that it returns the actual device definition of the x position that is being touched, ","not"," the ","GameMaker"," one, and as such will ignore things like view position and scaling. Note that the maximum number of touches that can be detected will depend very much on the device being used and the OS it runs"," ","NOTE",": This function is very much device dependent and you should experiment first with the desired target module and device to see what exactly is returned."],[" ","device_mouse_raw_x(device);"," ","Argument","Type"," ","Description"," ","device","Real"," ","The device (from 0 - ","n",") that is being checked."],[" ","Real"],[" ","if (device_mouse_check_button(0, mb_left) && device_mouse_check_button(1, mb_left)) ","\n    {","\n        x_av = mean(device_mouse_raw_x(0), device_mouse_raw_x(1));","\n        y_av = mean(device_mouse_raw_y(0), device_mouse_raw_y(1));","\n    }"," ","The above code checks to see if device1 and device2 are being pressed, and if they are it calculates the average position of the x/y coordinates between each press point."," ","Back: ","Device Input"," ","Next: ","device_mouse_raw_y"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1020"})