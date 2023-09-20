rh._.exports({"0":[[" ","room_instance_clear"]],"1":[["room_instance_clear"]],"2":[[" ","room_instance_clear"]],"3":[[" ","This function will clear a room of all instances (no destroy events shall be called for the instances that are being removed). Note that calling this function on a room asset created in the Asset Browser ","will permanently clear the room of instances",",\n    and even calling ","game_restart()"," will not return the room to it's original state (only ending the game and opening it again will start with the room in its original state again)."],[" ","room_instance_clear(index);"," ","Argument","Type"," ","Description"," ","index","Room Asset"," ","The index of the room to clear all instances in."],[" ","N/A"],[" ","global.rm = room_add();"," room_assign(rm_Base, global.rm);"," room_instance_clear(global.rm);\n  "," ","The above code will add a new room to the game and then copy the contents of the room indexed as \"rm_Base\" into it. It will then clear all instances from this new room."," ","Back: ","Rooms"," ","Next: ","room_set_height"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["room_instance_clear"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"625"})