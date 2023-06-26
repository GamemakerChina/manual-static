rh._.exports({"0":[[" ","image_number"]],"1":[["image_number"]],"2":[[" ","image_number"]],"3":[[" ","This ","read only"," variable can be used to get the number of sub-images in a sprite that has been assigned to an instance (if you need the number of sub-images for a sprite other than the one assigned to the instance you should use ","sprite_get_number()","). Please note that when there is (for example) 1 sub-image this variable will return \"1\" but the image_index of that sub-image is 0."],[" ","image_number;"],[" ","Real"," (single precision floating point value)"],[" ","if image_speed > 0","\n    {","\n        if image_index > image_number - 1 instance_destroy();","\n    }"," ","The above code checks to see if the sprite is animating, and if it is it then checks to see if the current image_index is greater than the number of sub-images and if it is it destroys the instance."," ","Back: ","Sprite Instance Variables"," ","Next: ","image_speed"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["image_number"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"334"})