rh._.exports({"0":[[" ","mp_linear_path"]],"1":[["mp_linear_path"]],"2":[["mp_linear_path"]],"3":[[" ","mp_linear_path"]],"4":[[" ","This function computes a straight line path from the current instance position to the point specified by the \"xgoal\" and \"ygoal\" values. It uses the indicated step size, the same as in the function ","mp_linear_step()",". The indicated path must already exist and will be overwritten by the new path and the function will return if a complete path was found (true) or not (false). If false is returned then a path is still generated, but it will only run up to the position where the path was blocked."," ","NOTE",": This function does not move the instance. It sets a path only, and you must use the ","Path"," functions for movement."],[" ","mp_linear_path(path, xgoal, ygoal, stepsize, checkall);"," ","Argument","Type"," ","Description"," ","path","Path Asset"," ","The index of the path to be used."," ","xgoal","Real"," ","The target x position."," ","ygoal","Real"," ","The target y position."," ","stepsize","Real"," ","The speed the instance moves in pixels per step."," ","checkall","Boolean"," ","Whether to check for collisions with all instances (true) or just solid ones (false)."],[" ","Boolean"],[" ","if mp_linear_path(path, obj_Player.x, obj_Player.y, 2, 0)","\n    {","\n        path_start(path, 2, 0, 0);","\n    }"," ","This gets the object to check and see if there is a linear path from its current position to the position of \"obj_Player\". If there is then it starts the path."," ","Back: ","Motion Planning"," ","Next: ","mp_linear_path_object"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1683"})