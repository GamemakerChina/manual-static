rh._.exports({"0":[[" ","view_set_xport"]],"1":[["view_set_xport"]],"2":[["view_set_xport"]],"3":[[" ","view_set_xport"]],"4":[[" ","This function can be used to set the x position of the given view port. You give the view port index (from 0 to 7) and the new position to place it at."],[" ","view_set_xport(view_port, x)"," ","Argument","Type"," ","Description"," ","view_port","Real"," ","The view port to target (0 - 7)"," ","x","Real"," ","The new x position"],[" ","N/A"],[" ","if view_get_xport(0) != (display_get_width() / 2) - (view_wport[0] / 2)","\n    {","\n        view_set_xport(0, (display_get_width() / 2) - (view_wport[0] / 2));","\n    }"," ","The above code will check the x position of the view port[0] and if it is not where it is required to be it is set to that position."," ","Back: ","Cameras And View Ports"," ","Next: ","view_set_yport"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"392"})