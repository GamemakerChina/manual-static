rh._.exports({"0":[[" ","file_text_open_from_string"]],"1":[["file_text_open_from_string"]],"2":[["file_text_open_from_string"]],"3":[[" ","file_text_open_from_string"]],"4":[[" ","This function will create a text file from a string and open it for reading, returning the file \"handle\" that should be used in all further file function calls to read from this file. Note that this file is temporary and ","read only",", and as such it will be removed from memory the moment it is closed."," ","In the case of an error, the function will return -1. However, in some cases where the file could not be loaded (like an invalid filename being passed), the function may still return a file ID, in which case the return value of the ","file closing"," function will be ","false","."," ","NOTE"," ","You can only have a maximum of 32 files open at any one time. You should also ","always"," close files when finished as this writes the information and frees the memory associated with the file."," ","WARNING"," ","This may not work as you expect due to ","GameMaker"," being sandboxed! Please see the section on ","The File System"," for more information."],[" ","file_text_open_from_string(string);"," ","Argument"," ","Type"," ","Description"," ","string"," ","String"," ","The string to create the file from."],[" ","Text File ID"," or -1"],[" ","file = file_text_open_from_string(reset_str);"," ","The above code takes the string stored in the variable \"reset_str\" and uses it to create a read-only text file. The \"handle\" for this file is then stored in the variable \"file\" for all further file functions to use."," ","Back: ","Text Files"," ","Next: ","file_text_read_real"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1440"})