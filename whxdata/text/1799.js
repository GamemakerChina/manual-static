rh._.exports({"0":[[" ","physics_joint_get_value"]],"1":[["physics_joint_get_value"]],"2":[[" ","physics_joint_get_value"]],"3":[[" ","By using a series of predefined constants, you can ask ","GameMaker"," to tell you a number of things about the state of any given joint. This is very useful as it gives you the ability to delete joints or change an instances behaviour depending on whatever your needs are at the time. There are a number of constants that can be used in this function and they can be found here: ","Physics Joint Constants",", but be aware that complex calculations are done when you call these, so they should be used with care and only when necessary and note that ","many are unique to a specific type of joint","."," ","If the property does not exist (if, for example, you check a pulley joint for prismatic translation) then 0 will be the return value."],[" ","physics_joint_get_value(joint, value)"," ","Argument"," ","Type"," ","Description"," ","joint"," ","Physics Joint ID"," ","The index of the joint that you wish to test"," ","value"," ","Physics Joint Constant"," ","The constant for the joint property that you wish to test"],[" ","Real"],[" ","if shipJoint","\n    {","\n        var reactionForceX = physics_joint_get_value(shipJoint, phy_joint_reaction_force_x);","\n        var reactionForceY = physics_joint_get_value(shipJoint, phy_joint_reaction_force_y);","\n        var reactionForce = point_distance(0, 0, reactionForceX, reactionForceY);","\n        if reactionForce > 2","\n        {","\n            physics_joint_delete(shipJoint);","\n            shipJoint = -1;","\n        }","\n    }"," ","The above code checks to see if the variable \"shipJoint\" holds a joint index and if it does, it then calculates the force being applied to that joint using the two constants. Finally, if the total force is greater than 2, the joint is deleted."," ","Back: ","Joints"," ","Next: ","physics_joint_set_value"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_joint_get_value"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1799"})