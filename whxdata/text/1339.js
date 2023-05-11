rh._.exports({"0":[[" ","ds_map_replace_list"]],"1":[["ds_map_replace_list"]],"2":[["ds_map_replace_list"]],"3":[[" ","ds_map_replace_list"]],"4":[[" ","With this function you can replace a ","DS list"," that has been stored in the given \"key\" with another list that has been created previously. This function is designed for creating JSON compatible maps which you would then encode using ","json_encode()"," and should only be used in conjunction with that functionality."],[" ","ds_map_replace_list(id, key, value)"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Map ID"," ","The id of the map to use."," ","key"," ","String"," ","The key to replace."," ","value"," ","DS List ID"," ","The id of the ds_list to use to replace the one previously stored in the given key."],[" ","N/A"],[" ","var j_list = ds_list_create();","\n    ds_list_add(j_list, health);","\n    ds_list_add(j_list, lives);","\n    ds_list_add(j_list, score);","\n    ds_map_replace_list(j_map, \"list\", j_list);","\n    var j = json_encode(j_map);","\n    ds_list_destroy(j_list);"," ","The above code will create a ","DS List"," and populate it with the values of various global variables before replacing a previously stored list in the ","DS Map"," \"j_map\"."," ","Back: ","DS Maps"," ","Next: ","ds_map_replace_map"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1339"})