rh._.exports({"0":[[" ","window_mouse_get_delta_x"]],"1":[["window_mouse_get_delta_x"]],"2":[[" ","window_mouse_get_delta_x"]],"3":[[" ","This "," function returns the X movement delta of the mouse cursor."," ","This is the amount of pixels the cursor has moved on the X axis, between the previous and current step of the game."," ","NOTE"," This function"," returns the delta value both when the m","ouse is locked"," and when it's"," not"," (see ","window_mouse_get_locked",")."],[" ","window_mouse_get_delta_x","();"],[" ","Real"],[" "," Step Event"," ","if (window_mouse_get_locked())","\n    {","\n        x += window_mouse_get_delta_x();","\n        y += window_mouse_get_delta_y();","\n    }"," ","Global Left Pressed Event"," ","window_mouse_set_locked(true);"," ","Global Left Released Event"," ","window_mouse_set_locked(false);"," ","The above code adds the ","change"," in mouse position to the instance's position while the left mouse button is held down."," ","In the Gl","obal Left Pressed and Gl","obal Left Released events, the m","ouse is set t","o l","ocked and unl","ocked respectively, using ","window_mouse_set_locked","."," ","In the Step event, the l","ocked state ","of the mouse is checked using ","window_mouse_get_locked",". If it is l","ocked, the delta x (","window_mouse_get_delta_x",") and y (","window_mouse_get_delta_y",") are added t","o the instance's x and y."," ","Back: ","The Game Window"," ","Next: ","window_mouse_get_delta_y"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["window_mouse_get_delta_x"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2660"})