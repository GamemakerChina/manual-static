rh._.exports({"0":[[" ","game_change"]],"1":[["game_change"]],"2":[[" ","game_change"]],"3":[[" ","This function ends the current game and launches another game that's included in the ","Included Files","."," ","It allows you to have a main game from which you can launch other games that you keep in a different ","GameMaker"," project. The function can be called again in the launched game to return back to the main game."," ","The functi","on is supp","orted ","on the ","Wind","ows, macOS, PS4, PS5 and Switch ","platf","orms."," ","IMPORTANT"," This function only works in ","VM"," builds."," ","IMPORTANT"," ","GameMaker"," names the ",".win"," file differently depending on whether your game is running from the IDE or from the final executable (created using ","Create Executable"," in ","The Build Menu","). When running from the IDE the name will be ","$\"{game_project_name}.win\"",", if not it will be ","\"data.win\"",". You should always make sure to refer to the right name,"," e.g. by setting up a different ","configuration","."," "," Since the child games' external files are included in the main game's ","datafiles",", they can be accessed fr","om the main game as well. "],[" ","Each of the games to be launched by the main game should be included in a subdirectory of the ","Included Files",": the game's ","data.win"," file and other external included files should go into this folder. This folder structure could look as follows (essentially a copy of the contents in the final game's directory, without the executable file): \n      "," ","game1\n          "," ","game1.win"," ","bgm_groovy.ogg"," ","texgroup1_0.yytex"," ","options.ini"," ","game2\n          "," ","game2.win"," ","game_data.json"," ","options.ini"," ","..."," ","This function only works on certain platforms, and on some platforms it will only work in a packaged build."," ","All saves, achievements, etc. will be done under the title ID set by the launcher project."," ","As this functi","on ","ends the current game bef","ore launching the new ","one",", the ","Game End event"," is triggered for the current game and the ","Game Start event"," is triggered for the game that is being launched."," "," ","Argument Values Per Platform"," "," ","The table below provides an example of the working directory and launch parameters to be provided on each of the supported platforms: "," ","Platform"," ","Working Directory"," ","Launch Parameters"," ","Windows"," ","\"/game2\""," ","\"-game game2.win\""," ","macOS"," ","\"game2\""," ","\"\""," ","PS4/PS5"," ","\"\""," ","\"-game /app0/games/game2/game.win\""," ","Switch"," ","\"rom:/game2/\""," ","\"\""],[" ","game_change","(working_directory, launch_parameters);"," ","Argument"," ","Type"," ","Description"," ","working_directory"," ","String"," ","The working directory of the game to be launched"," ","launch_parameters"," ","String"," ","The command-line parameters to pass to the game to be launched"],[" ","N/A"],[" ","game_change","(\"/chapter3\", \"-game chapter3.win\");"," ","The above code runs from the launcher game and launches the \"Chapter 3\" game, which is stored in a subdirectory ","\"chapter3\"","  under ","Included Files","."],[" ","game_change","(\"/../\", \"-game main_game.win\");"," ","The code above runs from a game that was launched from the launcher game and returns to the main/launcher game. The double dots ",".."," indicate that the game's working directory is one above the current working directory."," ","Back: ","General Game Control"," ","Next: ","game_load"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["game_change"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1: Launching an Included Game (on Windows)"],[" ","Example 2: Returning to the Main/Launcher Game (on Windows)"]],"8":[[" ","Usage Notes"]],"id":"2646"})