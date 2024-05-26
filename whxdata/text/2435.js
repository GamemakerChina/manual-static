rh._.exports({"0":[[" ","skeleton_bone_state_get"]],"1":[["skeleton_bone_state_get"]],"2":[["skeleton_bone_state_get"]],"3":[[" ","skeleton_bone_state_get"]],"4":[[" ","Your skeletal animation is made up of a number of \"bones\", which you will have defined and given names to in your animation program, and this function can be used to get certain data for the named bone at any time. Note that this data refers to the ","current"," pose for the skeleton, depending on the animation set used, and the function requires a previously created ","DS map",", which will then have the following keys and their equivalent values after calling the function:"," ","\"x\":"," The local x position of the bone relative to the parent bone."," ","\"y\":"," The local y position of the bone relative to the parent bone."," ","\"angle\":"," The local rotation of the bone relative to the parent bone."," ","\"xscale\":"," The local horizontal scale of the bone, in reference to the parent bone."," ","\"yscale\":"," The local vertical scale of the bone, in reference to the parent bone."," ","\"worldScaleX\":"," The magnitude (always positive) of the world scale X (this is a ","read only"," value)."," ","\"worldScaleY\":"," The magnitude (always positive) of the world scale Y (this is a ","read only"," value)."," ","\"worldAngleX\":"," The world rotation for the X axis (this is a ","read only"," value)."," ","\"worldAngleY\":"," The world rotation for the Y axis (this is a ","read only"," value)."," ","\"worldX\":"," The world X position (this is a ","read only"," value)."," ","\"worldY\":"," The world Y position (this is a ","read only"," value)."," ","\"appliedAngle\":"," This is the local rotation used to pose the skeleton bones."," ","\"parent\":"," The name (a string) of the parent bone."," ","The map data returned is similar to that returned for the default pose when you use ","skeleton_bone_data_get()",", only now you have the extra \"world\" keys. These refer to the position of the bone relative to the ","root"," (origin) of the skeletal animation sprite, and the returned values do not take into consideration any scaling or rotation that has been done by setting the built-in sprite variables like ","image_xscale"," or ","image_angle",". The world values are ","read only"," and cannot be set."," ","This function is provided so that you can \"intercept\" animation data and modify it before it is drawn on the screen, and as such you would want to use it in the ","Other - Animation Update"," event, since this event is triggered just before the Draw Events."],[" ","skeleton_bone_state_get(bone, map);"," ","Argument"," ","Type"," ","Description"," ","bone"," ","String"," ","The name (as a string) of the bone."," ","map"," ","DS Map"," ","The (previously created) DS map that stores the bone data."],[" ","N/A"],[" ","var map = ds_map_create();","\n    skeleton_bone_state_get(\"head\", map);","\n    var xx = ds_map_find_value(map, \"worldX\");","\n    var yy = ds_map_find_value(map, \"worldY\");","\n    var deltax = mouse_x - (x + xx);","\n    var deltay = mouse_y - (y + yy);","\n    var angle = -radtodeg(arctan2(deltay, deltax));","\n    ds_map_replace(map, \"angle\", angle);","\n    skeleton_bone_state_set(\"head\", map);","\n    ds_map_destroy(map);"," ","The above code creates a DS map and then populates it with the data from the bone named \"head\". It then extracts the world position for the bone, and uses that data to set the \"angle\" of the bone to track the mouse position in the game."," ","Back: ","Bones"," ","Next: ","skeleton_bone_state_set"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2435"})