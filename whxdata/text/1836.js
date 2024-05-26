rh._.exports({"0":[[" ","audio_play_in_sync_group"]],"1":[["audio_play_in_sync_group"]],"2":[["audio_play_in_sync_group"]],"3":[[" ","audio_play_in_sync_group"]],"4":[[" ","With this function you can assign a sound to a previously created sync group. The group index is the value returned when you created the group using the function ","audio_create_sync_group()",", and the sound index is the index of any ","compressed"," sound (","*.ogg"," or ","*.mp3",") from the Asset Browser. This function only adds the sound to the group, but it does not play the sound. The return value will be ",">= 0"," if it succeeds and ","-1"," if it fails, where a successful value indicates the sound's order in the sync group (so 0 would be the first sound added, 1 would be the second, etc...). "," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","audio_play_in_sync_group(group_index, sound_index);"," ","Argument"," ","Type"," ","Description"," ","group_index"," ","Audio Sync Group ID"," ","The group index to assign the sound to."," ","sound_index"," ","Sound Asset"," ","The sound index to be assigned to the group."],[" ","Real"],[" ","sg = audio_create_sync_group(true);","\n    audio_play_in_sync_group(sg, sound1);","\n    audio_play_in_sync_group(sg, sound2);","\n    audio_play_in_sync_group(sg, sound3);","\n    audio_play_in_sync_group(sg, sound4);","\n    audio_start_sync_group(sg);"," ","The above creates a new sync group and assigns the index of the group to the variable \"sg\". Four sounds are then added to the group, with the gain for three of them being set to 0. Finally the sync group is played."," ","Back: ","Audio Synchronisation"," ","Next: ","audio_start_sync_group"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1836"})