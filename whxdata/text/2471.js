rh._.exports({"0":[[" ","File Actions"]],"1":[["File Actions"]],"2":[[" ","Files Action Library"]],"3":[[" ","The ","File Actions"," deal with two different file types - Buffer files and Ini files - and also have certain generic file actions to rename or copy existing files."," ","Buffer files"," are created by saving out the data from a buffer that you have previously created and this data can then be loaded into a buffer again at any time in the future. You can find out more information about buffers here: ","Buffer Actions","."," ","Ini files"," are small, lightweight files which are compatible with most platforms. They are ideal for storing small pieces of information, like interface preferences, local high scores, level data etc... and are very easy to use. Ini files don't\n    have to have been created previously to use these actions, and you can read from a non-existent Ini file and you'll simply get a ","default"," return value (which you specify), however we recommend that you create at least a \"base\"\n    ini file for opening and modifying before using the actions. This base ini file can be created by simply calling the ","Open Ini File"," action followed by the ","Close Ini File",", since closing\n    the file will write it to the disk, or you can include one in the ","Included Files"," of the Asset Browser. If you are using a file included in the Asset Browser as your base Ini, you should also read\n    the section of the manual about ","how the File System works","."," ","NOTE",": For games with localizations it is very important that accented letters can be read from external files. This means that you should create the ini file in ","UTF8 format"," first and then add it into ","GameMaker"," as an included file\n    so that it is exported on running the game and used instead of the default ANSI format ini file that is created by the ini functions when none has been previously supplied. In this way, you can read and write to it correctly with all accents and non-roman\n    letters being maintained."," ","The following actions exist for working with files:"," ","Load Buffer"," ","Save Buffer"," ","Rename File"," ","Copy File"," ","Delete File"," ","Open Ini File"," ","Close Ini File"," ","Write To Ini File"," ","Read Ini File"," ","If File Exists"," ","Back: ","Index"," ","Next: ","Data Type Actions"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Overview - File Actions Library"]],"id":"2471"})