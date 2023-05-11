rh._.exports({"0":[[" ","audio_emitter_set_listener_mask"]],"1":[["audio_emitter_set_listener_mask"]],"2":[["audio_emitter_set_listener_mask"]],"3":[[" ","audio_emitter_set_listener_mask"]],"4":[[" ","This function can be used to set the bit-mask for an emitter so that all sounds played through the emitter will play only from those listeners specified. You can create a bit-mask by using the ","audio_get_listener_info()"," and then using the bitwise ","or"," (\"|\") to create a custom mask with those listeners that you require the sound to play from, and then apply this custom mask to the emitter. This mask will over-ride the default mask or that which you may have set using the function ","audio_set_listener_mask()","."],[" ","audio_emitter_set_listener_mask(emitterID, mask);"," ","Argument"," ","Type"," ","Description"," ","emitterID"," ","Audio Emitter ID"," ","The unique ID of the emitter to set the mask of"," ","mask"," ","Real"," ","The bitmask data to set for the sound"],[" ","N/A"],[" ","s_emit = audio_emitter_create();","\n    audio_emitter_set_listener_mask(snd, global.PlayerMask);"," ","The above code creates an audio emitter and then sets the listener(s) to play from using the mask data stored in a global variable."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_free"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1539"})