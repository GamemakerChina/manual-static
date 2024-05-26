rh._.exports({"0":[[" ","part_system_get_layer"]],"1":[["part_system_get_layer"]],"2":[["part_system_get_layer"]],"3":[[" ","part_system_get_layer"]],"4":[[" ","This function can be used to retrieve the unique layer ID value for the given particle system. You supply the particle system ID value (as returned by the function ","part_system_create_layer()",") and the function will return the ID value of the layer."],[" ","part_system_get_layer(ind);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle System Instance"," ","The particle system ID value to get the layer ID of"],[" ","Layer"," or 0 (if the layer is an internally managed one)"],[" ","if (part_system_get_layer(global.p_sys) != \"effects_layer\")","\n    {","\n        part_system_layer(global.p_sys, \"effects_layer\";","\n    }"," ","The above code will check a particle system to see what layer it is on and if it is not on the given layer it will be changed."," ","Back: ","Particle Systems"," ","Next: ","part_system_layer"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"590"})