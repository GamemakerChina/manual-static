rh._.exports({"0":[[" ","audio_sound_is_playable"]],"1":[["audio_sound_is_playable"]],"2":[[" ","audio_sound_is_playable"]],"3":[[" ","This function can be used to check if the given sound index can be played currently. This is needed due to the different ways streamed and unstreamed sound playback is handled on the ","HTML5"," target platform, and will return ","true"," if the sound can be played and ","false"," if it can't. Note that on all other platforms other than HTML5, the function will always return ","true","."],[" ","audio_sound_is_playable","(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," ","The index of the sound to check."],[" ","Boolean"],[" ","if ","audio_sound_is_playable","(snd_Shot)","\n    {","\n        audio_play_sound(snd_Shot, 10, false);","\n    }"," ","The above code will play the sound \"snd_Shot\" if it is playable."," ","Back: ","Audio"," ","Next: ","audio_play_sound"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_sound_is_playable"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1207"})