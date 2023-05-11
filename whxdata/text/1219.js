rh._.exports({"0":[[" ","audio_start_sync_group"]],"1":[["audio_start_sync_group"]],"2":[["audio_start_sync_group"]],"3":[[" ","audio_start_sync_group"]],"4":[[" ","With this function you can start playing a previously created sync group. You need to supply the ","group index"," which is the value returned when you created the group using the function ","audio_create_sync_group()","."," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","audio_start_sync_group(group_index);"," ","Argument"," ","Type"," ","Description"," ","group_index"," ","Audio Sync Group ID"," ","The group index to play."],[" ","N/A"],[" ","sg = audio_create_sync_group(true);","\n    audio_play_in_sync_group(sg, sound1);","\n    audio_play_in_sync_group(sg, sound2);","\n    audio_sound_gain(sound2, 0, 0);","\n    audio_play_in_sync_group(sg, sound3);","\n    audio_sound_gain(sound3, 0, 0);","\n    audio_play_in_sync_group(sg, sound4);","\n    audio_sound_gain(sound4, 0, 0);","\n    audio_start_sync_group(sg);"," ","The above creates a new sync group and assigns the index of the group to the variable \"sg\". Four sounds are then added to the group, with the gain for three of them set to 0. Finally the sync group is played."," ","Back: ","Audio Synchronisation"," ","Next: ","audio_stop_sync_group"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1219"})