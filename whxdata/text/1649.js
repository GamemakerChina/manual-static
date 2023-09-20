rh._.exports({"0":[[" ","Change Object Instance"]],"1":[["Change Object INdex"]],"2":[[" "," Change Object Instance"]],"3":[[" ","With this action you can change one instance into another instance. You need to specify the object that the instance it change into another instance of, and the action will change the instance, performing the Destroy Event and the Clean Up Event of\n    the initial instance and the Create Event of the new instance. Note that if you do not specify a direction or a speed etc... then the new instance will \"inherit\" these values. For example, if the initial instance has an ","image_angle"," (rotation)\n    of 180, travels at 2px per game tick and has an ","image_speed"," (animation speed) of 0.5, then the instance it changes into will maintain these values unless explicitly set in the Create event of the new instance."," ","It is worth noting that changing the instance means that you ","can perform no further actions with that instance until the next game tick",", in particular trying to access variables etc... as that will cause an error. Basically, you\n    change the instance but it is not actually available until the end of the current step, so to access any of the variables it contains directly (for example, calling ","inst_changed.x",") will not work."],[" ","Argument"," ","Description"," ","Object"," ","The name of the object to change to an instance of."],[" ","The above action block code checks for a mouse press and if one is detected\n    then it changes the instance into different one."," ","Back: ","Instance Actions"," ","Next: ","Set Alarm Countdown"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1649"})