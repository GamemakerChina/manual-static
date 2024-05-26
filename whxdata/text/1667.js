rh._.exports({"0":[[" ","physics_particle_group_polygon"]],"1":[["physics_particle_group_polygon"]],"2":[["physics_particle_group_polygon"]],"3":[[" ","physics_particle_group_polygon"]],"4":[[" ","This function will set the shape of the particle group that is being created. You must first have begun the group definition using the function ","physics_particle_group_begin()",", and then you would\n    use this function to tell ","GameMaker"," that you are going to add in the approximate points that will be used to define the polygon shape - approximate because the exact shape will depend on the size of the base particles, as defined by\n    the ","physics_particle_set_radius()"," function, as the physics simulation tries to \"fit\" as many of the particles as possible into the defined shape."," ","You would then define the points of the polygon calling the function ","physics_particle_group_add_point()",", setting the x/y position in the room for each one (minimum of 3, maximum of 8, and they\n    can be defined as concave but the points inside the shape will be ignored). Finally you need to call ","physics_particle_group_end()"," to create the group of particles in the room."],[" ","physics_particle_group_polygon()"],[" ","N/A"],[" ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;"," var groupflags = phy_particle_group_flag_solid;"," physics_particle_group_begin(flags, groupflags, mouse_x, mouse_y, 0, 0, 0, 0, c_white, 1, 1, 2);","    physics_particle_group_polygon();\n    "," physics_particle_group_add_point(200, 200);"," physics_particle_group_add_point(300, 300);"," physics_particle_group_add_point(100, 300);"," mLastGroup = physics_particle_group_end();"," ","The above code stores the flags for the particle type and the particle group properties in variables then uses these to create a polygon particle group of three sides at the mouse position."," ","Back: ","Soft Body Particles"," ","Next: ","physics_particle_group_add_point"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1667"})