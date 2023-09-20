rh._.exports({"0":[[" ","audio_bus_create"]],"1":[["audio_bus_create"]],"2":[[" ","audio_bus_create"]],"3":[[" ","This function creates a new audio bus and returns an ","AudioBus Struct"," through which you can access and modify it."," ","NOTE"," A user-created audio bus will be garbage collected when it's unreferenced and any linked emitters are destroyed, and as such there is no \"destroy\" or \"free\" function for audio buses."],[" ","audio_bus_create","();"],[" ","AudioBus Struct"],[" ","emitter1 = audio_emitter_create();","\n    emitter1_bus = audio_bus_create();","\n    audio_emitter_bus(emitter1, emitter1_bus);","\n    audio_play_sound_on(emitter1, snd_Ambience, true, 100);"," ","The above code first creates a new audio emitter and a new audio bus. It then assigns the emitter to the bus, and plays a sound on the emitter."," ","The sound will have any effects from ","emitter1_bus"," applied first and then the ones from","audio_bus_main","."," ","Back: ","Audio Effects"," ","Next: ","audio_bus_main"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_bus_create"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"996"})