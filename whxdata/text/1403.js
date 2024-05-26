rh._.exports({"0":[[" ","skeleton_animation_set_frame"]],"1":[["skeleton_animation_set_frame"]],"2":[["skeleton_animation_set_frame"]],"3":[[" ","skeleton_animation_set_frame"]],"4":[[" ","This function will set the animation assigned to the given track to the frame you supply. The frame index should be an real value between 0 and the number of frames for the animation (which you can get using the function ","skeleton_animation_get_frames","). If you supply a value outside of this range, the animation will be looped to make up the difference, for example if the animation has 5 frames and you set the frame to 8, the actual frame shown will be 3."],[" ","skeleton_animation_set_frame","(track, index);"," ","Argument"," ","Type"," ","Description"," ","track"," ","Real"," ","The animation track to set the frame of."," ","index"," ","Real"," ","The new index for the animation frame."],[" ","N/A"],[" ","if (global.pause) ","\n    {"," ","skeleton_animation_set_frame","(0, -image_speed);","\n    }"," ","The above code will set the frame index for the animation in track 0 to the negative image speed when the global \"pause\" variable is ","true"," (essentially pausing the animation)."," ","Back: ","Animation"," ","Next: ","skeleton_animation_get_position"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1403"})