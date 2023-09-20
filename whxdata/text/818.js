rh._.exports({"0":[[" ","audio_emitter_exists"]],"1":[["audio_emitter_exists"]],"2":[[" ","audio_emitter_exists"]],"3":[[" ","This function returns whether an audio emitter exists (","true",") or not (","false","). Note that if the index you search for has not been initialised previously, this function will cause an error as it is searching for non-existent indices."],[" ","audio_emitter_exists(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Audio Emitter ID"," ","The index of the emitter to check the existence of."],[" ","Boolean"],[" ","if audio_emitter_exists(s_emit)","\n    {","\n        audio_play_sound_on(s_emit, snd_Explode, false, 1);","\n    }","\n    else","\n    {","\n        s_emit = audio_emitter_create();","\n        audio_play_sound_on(s_emit, snd_Explode, false, 1);","\n    }"," ","The above code checks to see if an emitter exists, indexed in the (previously initialised) variable \"s_emit\". If it does then a sound is played through it, but if it does not, it is created and then the sound is played."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_position"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_emitter_exists"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"818"})