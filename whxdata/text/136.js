rh._.exports({"0":[[" ","view_enabled"]],"1":[["view_enabled"]],"2":[[" ","view_enabled"]],"3":[[" ","This variable controls whether any view ports that are visible within the room are enabled or not. If you have view ports set to visible and then disable this option, the whole room will be drawn to the screen scaled to the window size instead of the different cameras being drawn through the view ports."],[" ","view_enabled;"],[" ","Boolean"," (","true",": enabled, ","false",": disabled)"],[" ","if !view_enabled","\n    {","\n        view_visible[0] = true;","\n        view_enabled = true;","\n    }"," ","The above code checks to see if views are enabled for the room, and if they are not, it makes sure that view port[0] is visible and then enables views for the room."," ","Back: ","Cameras And View Ports"," ","Next: ","view_visible"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["view_enabled"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"136"})