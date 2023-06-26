rh._.exports({"0":[[" ","Audio Buffers"]],"1":[["Audio Buffers"]],"2":[[" ","Audio Buffers"]],"3":[[" ","You can use ","audio buffers"," to load, save and manipulate audio files within your games. These buffers are created beforehand using the appropriate ","buffer functions"," and then you can use the following functions to create a sound to use in your project:"," ","audio_create_buffer_sound"," ","audio_free_buffer_sound"," ","Note that once you have created a sound from an audio buffer, you are ","not"," creating a new sound in memory, but rather pointing to the position within the buffer where the sound is stored. You should not change this buffer after a sound has been associated with it otherwise you will get unexpected results, and you cannot delete the buffer while a sound is associated with it. Instead, free the sound (or sounds) first then delete the buffer. Once you have created your new audio resource from a buffer, you can use its index value in any of the regular audio functions to play it, change its gain or pitch, pause it, etc. Note that the buffer used to load the audio ","can only support PCM sounds",", so formats like OGG will not be supported."," ","Another feature of buffered audio is that you can use a buffer to create a queue of audio which can then be streamed to the device running your project. An audio queue takes a regular buffer which you have previously filled with audio data, and enables you to \"point\" to parts of it and tell ","GameMaker"," to stream the audio in a given order from that buffer. The available functions for audio queues are:"," ","audio_create_play_queue"," ","audio_free_play_queue"," ","audio_queue_sound"," ","Once a queue has been created, you can then use the returned queue index just as you would the sound index for any normal sound to play it, pause it, restart it, or change it's gain and pitch. The only thing you cannot do is get the track length or set the track position, but other than that, an audio queue can be used just like any other sound. You should also note that some of the audio queue functions will also trigger an ","Audio Playback Asynchronous Event","."," ","Audio buffers will also permit you to record sound from any of the available sources (like microphones or the OS), which can then be queued and streamed using the above functions (for example). Recording audio will trigger an ","Audio Recording Asynchronous Event"," which will contain specific information about what is being recorded."," ","\n    For recording audio, the following functions are available:\n  "," ","audio_start_recording"," ","audio_stop_recording"," ","audio_get_recorder_count"," ","audio_get_recorder_info"," ","NOTE"," ","Most platforms ","except HTML5"," support recording audio in some form, but that does not mean that all devices will permit it, even if the platform does, so you should always check that the ","audio_get_recorder_count()"," function returns a value greater than 0 to verify that recording devices are available before using the rest of the recording functions."," ","Back: ","Audio"," ","Next: ","Audio Synchronisation"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2379"})