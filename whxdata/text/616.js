rh._.exports({"0":[[" ","path_get_precision"]],"1":[["path_get_precision"]],"2":[[" ","path_get_precision"]],"3":[[" ","This function returns with what precision the given path has been \"smoothed\", and will be an integer value from 1 to 8. Although you can get (and set) this value for a straight-line path it will have no influence over how an instance uses the path as it is only relevant when the path kind is set to \"smooth\"."],[" ","path_get_precision(index);"," ","Argument","Type"," ","Description"," ","index","Path Asset"," ","The index of the path to check."],[" ","Real"],[" ","if (path_get_kind(pth_Patrol))","\n    {","\n        if (path_get_precision(pth_Patrol)) != 8","\n        {","\n            path_set_precision(pth_Patrol, 8);","\n        }","\n    }"," ","The above code checks the path indexed in \"pth_Patrol\" to see what kind it is and if it is smooth, it then checks how precise the smoothing is. If it is less than 8, it is then set to a value of 8."," ","Back: ","Paths"," ","Next: ","path_get_speed"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["path_get_precision"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"616"})