rh._.exports({"0":[[" ","file_bin_close"]],"1":[["file_bin_close"]],"2":[[" ","file_bin_close"]],"3":[[" ","Closes a previously opened binary file. You supply the file ID value, as returned by the function ","file_bin_open()","."," ","NOTE",": These functions ","do not"," work when the target module is HTML5."],[" ","file_bin_close(binfile);"," ","Argument","Type"," ","Description"," ","binfile","Binary File ID"," ","The ID of the file to close."],[" ","N/A"],[" ","file = file_bin_open(\"myfile.bin\", 2);"," file_bin_rewrite(file);\n    "," file_bin_close(file);\n  "," ","This would open a file from the same directory as the game, and assign its index to the variable \"file\". It would then re-write the file (clearing it of data), and close it again."," ","Back: ","Binary Files"," ","Next: ","file_bin_size"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["file_bin_close"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"343"})