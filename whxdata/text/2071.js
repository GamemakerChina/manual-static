rh._.exports({"0":[[" ","part_type_step"]],"1":[["part_type_step"]],"2":[[" ","part_type_step"]],"3":[[" ","This function can be used to make your particle type stream another type each step until the end of its lifetime. You can set a negative value for the step number and a particle will be emitted at a random interval based on that, so that, for example, a value of -3 will have a 1:3 chance of emitting a particle each step."," ","NOTE",": NEVER use the same particle type as this will cause an infinite loop and can crash the game in seconds! Also, be very careful when using this as it can greatly increase the number of particles on-screen at a time and cause your games to slow down noticeably."],[" ","part_type_step(ind, step_number, step_type);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle Type ID"," ","The index of the particle type to change."," ","step_number"," ","Real"," ","The quantity of the new particle to create per step."," ","step_type"," ","Particle Type ID"," ","The index of the particle type to create per step."],[" ","N/A"],[" ","particle2 = part_type_create();","\n    part_type_shape(particle2, pt_shape_smoke);","\n    part_type_size(particle2, 0.01, 0.01, 0.01, 0);","\n    part_type_scale(particle2, 1, 1);","\n    part_type_colour3(particle2, 4227327, 8454143, 4227327);","\n    part_type_alpha3(particle2,1, 0.50, 0.80);","\n    part_type_speed(particle2, 0, 0, 0, 0);","\n    part_type_direction(particle2, 0, 359, 0, 0);","\n    part_type_gravity(particle2, 0, 270);","\n    part_type_orientation(particle2, 0, 0, -2, 0, 1);","\n    part_type_blend(particle2, 1);","\n    part_type_life(particle2, 160, 160);","\n    particle3 = part_type_create();","\n    part_type_shape(particle3, pt_shape_flare);","\n    part_type_size(particle3, 0.20, 0.20, 0.02, 0);","\n    part_type_scale(particle3, 1, 1);","\n    part_type_colour3(particle3, 16777215, 8454143, 16777215);","\n    part_type_alpha3(particle3, 0, 0.50, 0);","\n    part_type_speed(particle3, 3, 3, -0.03, 0);","\n    part_type_direction(particle3, 0, 359, 0, 0);","\n    part_type_gravity(particle3, 0, 270);","\n    part_type_orientation(particle3, 0, 0, 0, 0, 1);","\n    part_type_blend(particle3, 1);","\n    part_type_life(particle3, 40, 80);","\n    part_type_step(particle2, 2, particle3);"," ","The above code creates and defines two particles and sets the particle indexed in the variable \"particle2\" to create 2 particles of \"particle3\" every step of its lifetime."," ","Back: ","Particle Types"," ","Next: ","part_type_death"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["part_type_step"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2071"})