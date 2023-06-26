rh._.exports({"0":[[" ","physics_particle_create"]],"1":[["physics_particle_create,phy_particle_flag_water,phy_particle_flag_zombie,phy_particle_flag_wall,phy_particle_flag_spring,phy_particle_flag_elastic,phy_particle_flag_viscous,phy_particle_flag_powder,phy_particle_flag_tensile,phy_particle_flag_colourmixing,phy_particle_flag_colormixing"]],"2":[[" ","physics_particle_create"]],"3":[[" ","With this function you can create a single particle anywhere within your game room, setting certain flags and properties. The \"flags\" are the return value of a combination of the following ","constants",":"," ","Physics Particle Flag Constant"," ","Constant"," ","Description"," ","phy_particle_flag_water"," ","The default properties for a soft body particle."," ","phy_particle_flag_zombie"," ","A zombie particle is one that will be destroyed after a single step with all others flagged in this way."," ","phy_particle_flag_wall"," ","This defines the particle as ","static",", essentially creating it as an immovable object in the physics simulation, as they will remain in a fixed position no matter what collides with them. You should use this flag rather than set the density to 0."," ","phy_particle_flag_spring"," ","Spring particles produce the effect of being attached to one another, as if by a spring. Particles created with this flag are \"connected\" in pairs, with each particle being connected to the one that was closest to it at the time of creation. Once paired, particles do not change \"partners\" , and the farther an external force pulls them from one another, the greater the power with which they will collide when that external force is removed. Note that no matter how far paired particles get from each another, the connection between them will not snap."," ","phy_particle_flag_elastic"," ","Elastic particles deform and may also bounce when they collide with other rigid bodies in the physics simulation."," ","phy_particle_flag_viscous"," ","A viscous particle is one that exhibits \"clinginess\" or \"stickiness\", like oil. Viscous particles will clump and stick together more."," ","phy_particle_flag_powder"," ","Powder particles produce a scattering effect such as you might see with sand or dust."," ","phy_particle_flag_tensile"," ","Tensile particles are used to produce the effect of surface tension, or the taut curvature on the surface of a body of liquid. They might be used, for example, to create the surface tension you would see on a drop of water. Once the tension is broken, the particles bounce as if they were elastic, but also continue to attract each other. As a result, particles tend to form clusters as they bounce."," ","phy_particle_flag_colourmixing"," ","Colour-mixing particles take on some of the colour of other particles with which they collide. Note that if only one of the two colliding particles is a colour-mixing one, the other particle retains its pre-collision colour."," ","These flags use bit-masking to create a final output value that is then checked to set the different basic properties of the particle (with the base property always being that of ","phy_particle_flag_water","). For example, if you want to simulate a viscous liquid with surface tension you would use the ","bitwise ","or"," \"|\" to flag the appropriate bits as shown in the example below. In this way you can set different properties (other than the global properties) for each individual particle created."," ","Other than the flags, you can also set the position in the room to create the particle at, the initial horizontal and vertical velocity, the initial colour and alpha, as well as the user ","category",". The colour and alpha values are only used when drawing the particle using the function ","physics_particle_draw()",", but the category value is used in multiple other functions. This value is an arbitrary integer value that you give each particle that you want to have similar properties, and it can be used to set flags later for that specific category as well as a number of other things. For example, if you have defined a \"water\" and an \"oil\" particle, you would give all those particles flagged as \"water\" the user category of 1 and all those particles created as \"oil\" the user category of 2, permitting you to later target a single category to change it's flags or get specific data."," ","NOTE",": You can use any integer value for the category ","except 0"," which is reserved by the simulation and is used to select all categories in other functions (like for drawing)."," ","The function returns a unique index (or ID) value for the particle which can be stored in a variable to be used in other functions that reference the particle directly."],[" ","physics_particle_create(flags, x, y, xv, yv, col, alpha, category)"," ","Argument"," ","Type"," ","Description"," ","flags"," ","Physics Particle Flag Constant","(s)"," ","The flags to set on the particle."," ","x"," ","Real"," ","The x position to create the particle at."," ","y"," ","Real"," ","The y position to create the particle at."," ","xv"," ","Real"," ","The initial horizontal velocity."," ","yv"," ","Real"," ","The initial vertical velocity."," ","col"," ","Colour"," ","The base colour to use for the particle."," ","alpha"," ","Real"," ","The base alpha to use for the particle."," ","category"," ","Real"," ","The user defined category to which the particle belongs."],[" ","Physics Particle ID"],[" ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;","\n    var x_vel = lengthdir_x(5, image_angle);","\n    var y_vel = lengthdir_y(5, image_angle);","\n    var p = physics_particle_create(flags, x, y, x_vel, y_vel, c_white, 1, 1);"," ","The above code will create variables to set the particle type and it's initial velocity, then use these to create a particle at the instances x/y position."," ","Back: ","Soft Body Particles"," ","Next: ","physics_particle_group_begin"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_particle_create,phy_particle_flag_water,phy_particle_flag_zombie,phy_particle_flag_wall,phy_particle_flag_spring,phy_particle_flag_elastic,phy_particle_flag_viscous,phy_particle_flag_powder,phy_particle_flag_tensile,phy_particle_flag_colourmixing,phy_particle_flag_colormixing"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2604"})