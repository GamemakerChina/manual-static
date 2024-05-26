rh._.exports({"0":[[" ","gpu_set_ztestenable"]],"1":[["gpu_set_ztestenable"]],"2":[["gpu_set_ztestenable"]],"3":[[" ","gpu_set_ztestenable"]],"4":[[" ","This function can be used to toggle z-buffer testing on or off, affecting how things will be drawn (in general only of use when working with 3D projects). Essentially, by default when z-testing is off and you have two objects drawing to the same space,\n    ","both"," objects will be rendered regardless of whether one will over-draw the other, resulting in unnecessary draw calls. If you switch this on then the z-buffer is tested to see whether an object will be \"visible\" and not drawn if it's\n    not. Note that this is the ","default"," behaviour, but you can change this by changing the type of comparison used for z-buffer testing (see the function ","gpu_set_zfunc()","."," ","By default z-buffer testing is off (","false",")."],[" ","gpu_set_ztestenable(enable);"," ","Argument","Type"," ","Description"," ","enable","Boolean"," ","Enable or disable z-buffer testing (","true"," or ","false",")."],[" ","N/A"],[" ","gpu_set_ztestenable(true);"," draw_sprite(spr_Background, 0, 0, 0);"," gpu_set_ztestenable(false);\n  "," ","The above code switches on z-buffer testing to draw a background sprite and then switches it back off again to continue drawing."," ","Back: ","GPU Control"," ","Next: ","gpu_set_zfunc"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1041"})