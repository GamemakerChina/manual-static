rh._.exports({"0":[[" ","texturegroup_get_status"]],"1":[["texturegroup_get_status"]],"2":[["texturegroup_get_status"]],"3":[[" ","texturegroup_get_status"]],"4":[[" ","This function returns the status of the given Dynamic Texture Group. The status will be one of the following constants:"," ","Texture Group Status Constant"," ","Constant"," ","Description"," ","Value"," ","texturegroup_status_unloaded"," ","The Texture Group is still on disk and not in memory"," ","0"," ","texturegroup_status_loading"," ","The Texture Group is currently being loaded from disk"," ","1"," ","texturegroup_status_loaded"," ","The Texture Group has been loaded into RAM"," ","2"," ","texturegroup_status_fetched"," ","The Texture Group has been loaded and fetched into VRAM, ready for use"," ","3"," ","For information on its use, see: ","Dynamic Textures"],[" ","texturegroup_get_status(groupname);"," ","Argument"," ","Type"," ","Description"," ","groupname"," ","String"," ","The name of the Texture Group as a string. These are defined in the ","Texture Groups"," window."],[" ","Texture Group Status Constant"],[" ","var _tg = \"tg_UI\";","\n    var _status = texturegroup_get_status(_tg);"," ","\n    if (_status == texturegroup_status_unloaded)","\n    {","\n        texturegroup_load(_tg);","\n    }\n  "," ","This gets the status of the \"","tg_UI","\" Texture Group, and if it's unloaded, it loads it."," ","Back: ","Textures"," ","Next: ","​texture_get_width"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2019"})