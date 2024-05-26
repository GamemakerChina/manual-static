rh._.exports({"0":[[" ","file_bin_rewrite"]],"1":[["file_bin_rewrite"]],"2":[["file_bin_rewrite"]],"3":[[" ","file_bin_rewrite"]],"4":[[" ","This function takes the filename handle as returned by the function ","file_bin_open()"," and then rewrites the file, clearing it of all previous data to start writing from the beginning of the file."," ","NOTE",": These functions ","do not"," work when the target module is HTML5."],[" ","file_bin_rewrite(binfile);"," ","Argument","Type"," ","Description"," ","binfile","Binary File ID"," ","The ID of the file to rewrite."],[" ","N/A"],[" ","file = file_bin_open(\"myfile.bin\", 2);"," file_bin_rewrite(file);\n  "," ","This would open a file from the same directory as the game, and assign its index to the variable \"file\". It would then re-write the file (clearing it of data)."," ","Back: ","Binary Files"," ","Next: ","file_bin_close"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"360"})