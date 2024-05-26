rh._.exports({"0":[[" ","part_system_clear"]],"1":[["part_system_clear"]],"2":[["part_system_clear"]],"3":[[" ","part_system_clear"]],"4":[[" ","With this function you can clear the given particle system to its default state, removing all emitters and resetting the depth and position (if they had been changed). Be careful using this function as if you have any instance setting or bursting or any other action using an emitter associated with this system, you will get an error unless you are using the ","part_emitter_exists()"," function to check. There is also no need to call the ","part_emitter_destroy()"," function as this is taken care of automatically too."," ","NOTE",": this function will clear the visible particles in the room, but it does ","not"," clear the particle properties, nor does it remove them from memory. For that you should use the functions ","part_type_clear()"," and ","part_type_destroy()","."],[" ","part_system_clear(ind);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle System Instance"," ","The index of the particle system to clear."],[" ","N/A"],[" ","part_system_clear(global.Sname);"," ","The above code will clear the particle system indexed in the global variable \"Sname\" to its default state."," ","Back: ","Particle Systems"," ","Next: ","part_system_destroy"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1400"})