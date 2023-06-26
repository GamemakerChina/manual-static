rh._.exports({"0":[[" ","audio_master_gain"]],"1":[["audio_master_gain"]],"2":[[" ","audio_master_gain"]],"3":[[" ","With this function you can set the absolute value for the global volume of all sounds and music."," ","It is based on a linear scale from 0 (silent) to any value greater than 0, although normally you'd consider the maximum volume as 1. Anything over 1 can be used but, depending on the sound used and the platform being compiled to, you may get distortion or clipping when the sound is played back. This function will affect the relative volume of all sounds and music played from within your game."," ","NOTE"," This function sets the master gain of the ","default"," listener. Use ","audio_set_master_gain"," to set the master gain for a specific listener."," ","NOTE"," Use ","db_to_lin"," and ","lin_to_db"," to convert back and forth between linear gains and gains expressed in decibels (dB)."],[" ","audio_master_gain","(gain);"," ","Argument"," ","Type"," ","Description"," ","gain"," ","Real"," ","Value for the global volume (0 to 1)"],[" ","N/A"],[" ","if keyboard_check(vk_up)","\n    {","\n        if vol < 1 vol += 0.05;"," ","audio_master_gain","(vol);","\n    }","\n    if keyboard_check(vk_down)","\n    {","\n        if vol > 0 vol -= 0.05;"," ","audio_master_gain","(vol);","\n    }"," ","The above code checks for key-presses of the up and down arrow keys, which then increase or decrease the variable \"vol\". This variable is then used to set the global gain of all sound and music in the game."," ","Back: ","Audio"," ","Next: ","audio_set_master_gain"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_master_gain"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1782"})