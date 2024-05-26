rh._.exports({"0":[[" ","file_text_close"]],"1":[["file_text_close"]],"2":[["file_text_close"]],"3":[[" ","file_text_close"]],"4":[[" ","Once you have finished working with a given file (whether reading from it or writing to it), you must close the file again, or else you risk losing the information contained within. This also prevents memory leaks and makes sure that you never go over the file limit by having more than 32 files open."," ","The function will return ","true"," if the operation was a success, however if there was a failure in closing the file or when the file was first ","opened",", this will return ","false","."],[" ","file_text_close(fileid);"," ","Argument"," ","Type"," ","Description"," ","fileid"," ","Text File ID"," ","The id of the file to close."],[" ","Boolean"],[" ","var file = file_text_open_write(working_directory + \"Game_Data.txt\");","\n    while (!file_text_eof(file))","\n    {","\n        file_text_readln(file);","\n    }","\n    file_text_write_string(file, level_data);","\n    file_text_close(file);"," ","The above code opens a file for writing then loops through the lines of text already written to the file until it reaches the end. At this point it writes a string and then closes the file again."," ","Back: ","Text Files"," ","Next: ","file_text_open_read"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1085"})