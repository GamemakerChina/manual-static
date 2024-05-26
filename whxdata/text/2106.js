rh._.exports({"0":[[" ","xboxlive_get_file_error"]],"1":[["xboxlive_get_file_error,xboxlive_fileerror_outoflocalstorage,xboxlive_fileerror_quotaexceeded,xboxlive_fileerror_noerror"]],"2":[["xboxlive_get_file_error,xboxlive_fileerror_outoflocalstorage,xboxlive_fileerror_quotaexceeded,xboxlive_fileerror_noerror"]],"3":[[" ","xboxlive_get_file_error"]],"4":[[" ","This function will return a constant (shown below) to help debug why a file function failed so that you can take appropriate action in your game code. When one of the file functions fails you can call the function to find out exactly what the error was."," ","NOTE",": When using the asynchronous ","save","/","load"," functions, the ","async_load"," map will have an extra key, \"","error","\" which will also contain one of the constants (shown below)."],[" ","xboxlive_get_file_error();"],[" ","Xbox File Error Constant"," ","Xbox File Error Constant"," ","Constant"," ","Description"," ","xboxlive_fileerror_outoflocalstorage"," ","If this occurs while saving this means that all available save game space has been used up, and the user has declined the offer (presented by the OS) of freeing up space. The game should confirm with the user that they intend to continue playing without saving. If they still want to be able to save, the game should retry the save operation."," ","xboxlive_fileerror_quotaexceeded"," ","If this occurs the game should notify the user that they can't save any more data until they free up some space, and then present them with a way of doing this."," ","xboxlive_fileerror_noerror"," ","The file save or load function was carried out without issues."],[" ","buffer_save(buff, \"SaveGame.bin\");","\n    if (xboxlive_get_file_error() != xboxlive_fileerror_noerror)","\n    {","\n        show_debug_message(\"Save failed. Error code = \" + string(xboxlive_get_file_error()));","\n    }"," ","The above code checks to see if there was an error with saving and if so the error code is printed out to the console."," ","Back: ","Saving Data"," ","Next: ","xboxlive_set_savedata_user"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2106"})