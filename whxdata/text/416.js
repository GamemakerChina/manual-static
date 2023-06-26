rh._.exports({"0":[[" ","phy_angular_damping"]],"1":[["phy_angular_damping"]],"2":[[" ","phy_angular_damping"]],"3":[[" ","This variable can be used to set the angular damping of the instance, or it can be used to get the current angular damping. The damping is the amount of \"resistance\" to angular rotation that the physics enabled instance has, with a lower value permitting the instance to rotate faster after a collision (for example) and a higher value making it require a more forceful push and rotate slower"],[" ","phy_angular_damping;"],[" ","Real"," (single precision floating point value, or ","undefined"," if the instance is not physics enabled)"],[" ","if place_meeting(phy_position_x, phy_position_y, obj_Water)","\n    {","\n        phy_angular_damping = 10;","\n    }","\n    else","\n    {","\n        phy_angular_damping = 3;","\n    }"," ","The above code will check for a collision between the calling instance and instances of \"obj_Water\" and change the angular damping accordingly."," ","Back: ","Physics Variables"," ","Next: ","phy_linear_velocity_x"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["phy_angular_damping"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"416"})