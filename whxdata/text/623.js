rh._.exports({"0":[[" ","room_duplicate"]],"1":[["room_duplicate"]],"2":[["room_duplicate"]],"3":[[" ","room_duplicate"]],"4":[[" ","This will duplicate a given room and return the duplicates index to be used in all further calls to reference the new room."," ","NOTE",": New rooms are not part of usual room ordering, so they do not have a \"previous\" or \"next\" room (meaning that the functions ","room_next()"," and ","room_previous()"," will not work). To jump from the added room to another, you must use the index of the room itself."],[" ","room_duplicate(index);"," ","Argument","Type"," ","Description"," ","index","Room Asset"," ","The index of the original room to be duplicated."],[" ","Room Asset"],[" ","global.myroom = room_duplicate(rm_level);"," ","This will duplicate the room indexed by \"rm_level\" and assign the room index of this new room to the variable \"global.myroom\"."," ","Back: ","Rooms"," ","Next: ","room_assign"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"623"})