rh._.exports({"0":[[" ","buffer_load_async"]],"1":[["buffer_load_async"]],"2":[[" ","buffer_load_async"]],"3":[[" ","With this function you can load a file that you have created previously using the ","buffer_save()"," function (or any of the other functions for saving buffers) into a buffer. The \"offset\" defines the start position within the buffer for loading (in bytes), and the \"size\" is the size of the buffer area to be loaded from that offset onwards (also in bytes). You can supply a value of -1 for the size argument and the entire buffer will be loaded. Note that the function will load from a \"default\" folder, which does ","not"," need to be included as part of the file path you provide. This folder will be created if it doesn't exist or when you save a file using ","buffer_save_async()","."," ","The function returns a unique ID value which can then be used in the ","Save / Load Asynchronous event"," to check the ","async_load"," ID value, as shown in the extended example below. The ","async_load"," map in the event will have the following two key/value pairs:"," ","\"id\": ","the ID of the async function as returned by the save function."," ","\"status\": ","will return ","true"," if the data was saved/loaded correctly, and ","false"," otherwise."," ","NOTE"," On ","HTML5",", this is the preferred method for loading a file if you are loading from a server and not local storage, as loading synchronously has been deprecated on most browsers and will eventually be obsoleted."," ","Please read the ","buffer_load()"," page for platform-specific notes."],[" ","buffer_load_async(buffer, filename, offset, size);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to load."," ","filename","String"," ","The name of the file to load."," ","offset","Real"," ","The offset within the buffer to load to (in bytes)."," ","size","Real"," ","The size of the buffer area to load (in bytes)."],[" ","Async Request ID"],[" ","The ","buffer_load_async()"," function can be called from any event, and since it is asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:"," ","loadid = buffer_load_async(buff, \"Player_Save.sav\", 0, 16384);"," ","The above code loads the contents of the file \"","Player_Save.sav","\" to the given buffer, storing the ID of the function call in the variable \"","loadid","\". When the load is complete, the asynchronous Save/Load event will be triggered and you can parse the ","async_load"," map for the correct ID of the function, like this:"," ","if ds_map_find_value(async_load, \"id\") == loadid","\n    {","\n        if ds_map_find_value(async_load, \"status\") == false","\n        {","\n            show_debug_message(\"Load failed!\");","\n        }","\n    }"," ","The above code will first check the ID of the DS map that has been created, then check the status of the callback, posting a debug message if there has been any issues."," ","Back: ","Buffers"," ","Next: ","buffer_load_partial"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["buffer_load_async"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Extended Example:"]],"id":"2311"})