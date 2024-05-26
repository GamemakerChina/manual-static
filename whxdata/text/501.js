rh._.exports({"0":[[" ","video_pause"]],"1":[["video_pause"]],"2":[["video_pause, pause video"]],"3":[[" ","video_pause"]],"4":[[" ","This function pauses the video file that is currently loaded. You can resume it by calling ","video_resume()"," any time after this function."],[" ","video_pause();"],[" ","N/A"],[" ","var _status = video_get_status();"," ","\n    if (keyboard_check_pressed(vk_space))","\n    {","\n        if (_status == video_status_playing)","\n        {","\n            video_pause();","\n        }","\n        else if (status == video_status_paused)","\n        {","\n            video_resume();","\n        }","\n    }\n  "," ","The above code gets the status of the video and then checks if the player has pressed Space. In that case it pauses the video if it's playing, and resumes it if it's paused."," ","Back: ","Video Playback"," ","Next: ","video_resume"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"501"})