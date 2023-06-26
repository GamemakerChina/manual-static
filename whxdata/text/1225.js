rh._.exports({"0":[[" ","Delete File"]],"1":[["Delete File"]],"2":[[" "," Delete File"]],"3":[[" ","With this action you can delete a file that has been created previously. You supply the file name (as a string) of the file to be deleted. Note that you ","cannot"," delete any files that are included in the game bundle, only those that have been created\n    using the ","Close Ini"," or ","Save Buffer"," actions (see the section on ","The File System"," for more information)."],[" ","Argument"," ","Description"," ","Filename"," ","The name (as a string) of the file to delete"],[" ","The above action block code will check to see if the file \"checkpoint.sav\" exists, and if\n    it does it then checks to see if the file \"checkpoint_OLD.sav\" exists. If that file exists as well, then it is deleted, and then the original \"checkpoint.sav\" file is renamed to \"checkpoint_OLD.sav\". Finally a buffer\n    is saved as \"checkpoint.sav\" (essentially we are backing up a saved buffer file each time we save it, so that there is always a \"current\" save and an \"old\" save file)."," ","Back: ","File Actions"," ","Next: ","Open Ini File"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Delete File"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1225"})