rh._.exports({"0":[[" ","part_type_sprite"]],"1":[["part_type_sprite"]],"2":[[" ","part_type_sprite"]],"3":[[" ","This function can be used to set a particle type to use a custom sprite from the game assets. You can select the sprite and then tell ","GameMaker"," to use the sprite and animate it or not, and if you choose animated, then you can also choose to have the sub-images changed at an interval such that the animation will begin and end at the beginning and end of the lifetime of each particle created (so that if you have a lifetime set to a 15 step minimum and a 30 step maximum, no matter what value the lifetime has the animation will be made to fit, with it running faster for the shorter lifetimes and slower for the longer). You can also select to choose a random sub-image so that if the sprite is not animated, a different image will be chosen at random to create the sprite, or if the particle is animated it will start the animation at a random point."],[" ","part_type_sprite(ind, sprite, animate, stretch, random);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle Type ID"," ","The index of the particle type to change."," ","sprite"," ","Sprite Asset"," ","The index of the sprite to set the particle type to."," ","animate"," ","Boolean"," ","Whether to follow the sprite's animation normally (true) or not (false)."," ","stretch"," ","Boolean"," ","Whether to stretch the sprite's animation to match the particle lifespan (true) or not (false)."," ","random"," ","Boolean"," ","Whether to choose a random sub-image (true) or not (false)."],[" ","N/A"],[" ","global.p1 = part_type_create();","\n    part_type_sprite(global.p1 , spr_Coins, 1, 0, 0);","\n    part_type_size(global.p1, 1, 3, 0, 0);","\n    part_type_scale(global.p1, 1, 1);","\n    part_type_colour1(global.p1, c_white);","\n    part_type_alpha2(global.p1, 1, 0);","\n    part_type_speed(global.p1, 2, 4, 0, 0);","\n    part_type_direction(global.p1, 0, 180, 0, 0);","\n    part_type_gravity(global.p1, 0.20, 270);","\n    part_type_orientation(global.p1, 0, 0, 0, 0, 1);","\n    part_type_blend(global.p1, 1);","\n    part_type_life(global.p1, 15, 60);"," ","The above code sets the particle type indexed in the global variable \"p1\" to the shape of the sprite indexed in \"spr_Coins\", and then sets various other particle properties."," ","Back: ","Particle Types"," ","Next: ","part_type_size"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["part_type_sprite"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2081"})