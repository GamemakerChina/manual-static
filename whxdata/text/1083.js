rh._.exports({"0":[[" ","skeleton_animation_get_frames"]],"1":[["skeleton_animation_get_frames"]],"2":[[" ","skeleton_animation_get_frames"]],"3":[[" ","This function can be used to retrieve the number of frames that any given skeleton animation has. You supply the skeleton animation name (as a string, as defined in the program used to make the animation, or as returned by using the function ","skeleton_animation_get()",") and the function returns the frames that it has as an integer value. The function will return 0 if the specified animation does not exist."],[" ","skeleton_animation_get_frames(anim_name);"," ","Argument"," ","Type"," ","Description"," ","anim_name"," ","String"," ","The animation name to get the frames of."],[" ","Real"],[" ","var num = skeleton_animation_get_frames(skeleton_animation_get());","\n    image_index = num -1;","\n    image_speed = 0;"," ","The above code will get the number of frames in the animation and then set the sprite to the last frame and stop animating."," ","Back: ","Animation"," ","Next: ","skeleton_animation_get_frame"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["skeleton_animation_get_frames"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1083"})