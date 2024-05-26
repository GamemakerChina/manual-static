rh._.exports({"0":[[" ","audio_sync_group_debug"]],"1":[["audio_sync_group_debug"]],"2":[["audio_sync_group_debug"]],"3":[[" ","audio_sync_group_debug"]],"4":[[" ","This function displays debug information about any given sync group (the group index is the value returned when the group was created using the function ","audio_create_sync_group","). You can call the function with a value of -1 to switch off the overlay."," ","When you are debugging the audio sync groups, the overlay will show:"," ","Which sync group is debugging"," ","How many channels are in it"," ","How many times the sync group has failed (this means it's tried to do too much work)"," ","A list of the channels\n      "," ","Red means this channel is not currently doing any work"," ","Yellow means the channel is in initial state (not yet decoding or playing)"," ","Green means the track is currently seeking/decoding"," ","Purple means the channel has run out of data"," ","A profiling bar that shows what work the decoding thread is doing\n      "," ","blue means a file is being read for the first time"," ","red means the thread is reading a file to find out where to read from"," ","green means the thread is decoding data"," ","purple means the thread is sleeping until it needs to work"," ","Note that for general debugging of audio, you also have the function ","audio_debug","."," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","audio_sync_group_debug","(group_index);"," ","Argument"," ","Type"," ","Description"," ","group_index"," ","Audio Sync Group ID"," ","The group index to debug, or -1 to switch off the debugging."],[" ","N/A"],[" ","if (debug_mode)","\n    {"," ","audio_sync_group_debug","(sg);","\n    }","\n    else","\n    {"," ","audio_sync_group_debug","(-1);","\n    }"," ","The above code will switch on or off the audio sync group debug overlay showing the sync group indexed in the variable ","sg"," depending on whether the game is run in debug mode or not."," ","Back: ","Audio Synchronisation"," ","Next: ","audio_sync_group_is_playing"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2172"})