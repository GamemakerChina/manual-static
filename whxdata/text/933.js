rh._.exports({"0":[[" ","physics_world_update_iterations"]],"1":[["physics_world_update_iterations"]],"2":[[" ","physics_world_update_iterations"]],"3":[[" ","Everything in ","GameMaker"," is based around steps and, normally, each event will only happen once per step. However, to get the necessary precision with the physics functions they are made to do several calculations each step which are called \"iterations\" the number of which are controlled by this function. The default number for the physics system is 10, but this can be changed to higher or lower depending how many times you want the physics to calculate each step, but it is recommended that you set this no lower than 5 and no higher than 30. You should also be aware that this function is dependent on the ","physics_world_update_speed()"," function."],[" ","physics_world_update_iterations(iterations)"," ","Argument"," ","Type"," ","Description"," ","y1"," ","Real"," ","The iterations (per step) that the physics system will perform"],[" ","N/A"],[" ","physics_world_update_iterations(20);"," ","The code above sets the physics world in the current room to perform calculations 20 times a step."," ","Back: ","The Physics World"," ","Next: ","physics_world_update_speed"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_world_update_iterations"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"933"})