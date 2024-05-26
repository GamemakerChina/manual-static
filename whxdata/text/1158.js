rh._.exports({"0":[[" ","view_yport"]],"1":[["view_yport"]],"2":[["view_yport"]],"3":[[" ","view_yport"]],"4":[[" ","With this built in array you can get or set the y position of the given view port. The view port is the area on the screen where the view is drawn, and you can have up to 8 active at any one time (the array is values from 0 to 7 inclusive to give 8 ports). Now, the default for ","GameMaker"," is that the game window (or background canvas) is the same size as the room, however when you activate view ports and cameras, this behaviour changes and the ","total size of the bounding box for all view ports"," is used. So, if you have two different view ports at two different positions, the total area that they cover defines the size of the game window. The following image illustrates this:"," ","If you only have ","one"," view port setting the x or y value of the port can have some interesting effects but is not normally practical (see the image below) and so it is better to maintain the x and y position as (0,0)."],[" ","view_yport","[0 .. 7]"],[" ","Real"],[" ","view_xport[0] = 0;","\n    view_yport[0] = 0;"," ","The above code resets the position of view port[0] to the (0,0) position (top left hand corner) of the display."," ","Back: ","Cameras And View Ports"," ","Next: ","view_wport"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1158"})