rh._.exports({"0":[[" ","view_get_surface_id"]],"1":[["view_get_surface_id"]],"2":[[" ","view_get_surface_id"]],"3":[[" ","This function can be used to retrieve the unique ID value for the surface assigned to the given view port (will return -1 if no surface has been assigned)."],[" ","view_get_surface_id(view_port)"," ","Argument","Type"," ","Description"," ","view_port","Real"," ","The view port to target (0 - 7)"],[" ","Surface ID"],[" ","if view_get_surface_id(0) == -1","\n    {","\n        view_set_surface_id(0, global.vSurf);","\n    }"," ","The above code will check to see if a surface has been assigned to the view port[0] and if it has not then one is assigned."," ","Back: ","Cameras And View Ports"," ","Next: ","view_set_camera"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["view_get_surface_id"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"300"})