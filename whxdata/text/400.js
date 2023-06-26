rh._.exports({"0":[[" ","part_type_exists"]],"1":[["part_type_exists"]],"2":[[" ","part_type_exists"]],"3":[[" ","With this function you can check to see if the given particle type indexed exists in the game or not. Note that if the variable being checked is an uninitialised variable (that a particle type would otherwise have its index assigned to) this will throw an error."],[" ","part_type_exists(ind);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle Type ID"," ","The index of the particle type to check for."],[" ","Boolean"],[" ","if !part_type_exists(global.p1)","\n    {","\n        global.p1 = part_type_create();","\n    }"," ","The above code checks to see if the global variable \"p1\" stores the index of a particle type and if it does not it creates one."," ","Back: ","Particle Types"," ","Next: ","part_type_create"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["part_type_exists"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"400"})