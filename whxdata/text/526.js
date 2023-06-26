rh._.exports({"0":[[" ","room_set_height"]],"1":[["room_set_height"]],"2":[[" ","room_set_height"]],"3":[[" ","With this function you can change (or set) the height of any room in your game ","except the current one","."],[" ","room_set_height(index, h);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Room Asset"," ","The index of the room to set the height of."," ","h"," ","Real"," ","The new height of the room in pixels."],[" ","N/A"],[" ","global.myroom = room_add();","\n    room_set_width(global.myroom, 640);","\n    room_set_height(global.myroom, 480);","\n    room_set_persistent(global.myroom, false);"," ","This will create a new room and store its index in the variable \"global.myroom\". It will then set its width to 640 pixels, its height to 480 pixels, its caption to 'Game Room' and its persistence to 'false'."," ","Back: ","Rooms"," ","Next: ","room_set_width"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["room_set_height"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"526"})