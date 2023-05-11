rh._.exports({"0":[[" ","uwp_check_privilege"]],"1":[["uwp_check_privilege,uwp_privilege_result_no_issue,uwp_privilege_result_purchase_required,uwp_privilege_result_aborted,uwp_privilege_result_banned,uwp_privilege_result_restricted,uwp_privilege_internet_browsing,uwp_privilege_social_network_sharing,uwp_privilege_share_kinect_content,uwp_privilege_video_communications,uwp_privilege_communications,uwp_privilege_user_created_content,uwp_privilege_multiplayer_sessions,uwp_privilege_sessions,uwp_privilege_fitness_upload"]],"2":[["uwp_check_privilege,uwp_privilege_result_no_issue,uwp_privilege_result_purchase_required,uwp_privilege_result_aborted,uwp_privilege_result_banned,uwp_privilege_result_restricted,uwp_privilege_internet_browsing,uwp_privilege_social_network_sharing,uwp_privilege_share_kinect_content,uwp_privilege_video_communications,uwp_privilege_communications,uwp_privilege_user_created_content,uwp_privilege_multiplayer_sessions,uwp_privilege_sessions,uwp_privilege_fitness_upload"]],"3":[[" ","uwp_check_privilege ","OBSOLETE"]],"4":[[" ","With this function you can check that a given user has a chosen privilege. The function will return true or false in the System Asynchronous Event depending on whether the privilege is enabled or not, and if you set the attempt_resolution argument to true and the privilege isn't enabled, it will also open a system dialog (suspending the game) to prompt the user to upgrade the account or whatever is required to get the privilege. If the user then enables the required option, the function will return true."," ","The function requires that you use one of the following ","UWP Privilege Constant","s for the privilege request:"," ","UWP Privilege Constant"," ","Constant"," ","Description"," ","uwp_privilege_internet_browsing"," ","Check to see if internet browsing is permitted"," ","uwp_privilege_social_network_sharing"," ","Check to see if sharing to social networks is permitted"," ","uwp_privilege_share_kinect_content"," ","Check whether sharing the Kinect controller is permitted"," ","uwp_privilege_video_communications"," ","Check to see if video communication is permitted"," ","uwp_privilege_communications"," ","Check to see if internet communication is permitted"," ","uwp_privilege_user_created_content"," ","Check if access to user created content is permitted"," ","uwp_privilege_multiplayer_sessions"," ","Check to see if online multiplayer sessions are permitted"," ","uwp_privilege_sessions"," ","Check to see if online sessions are permitted"," ","uwp_privilege_fitness_upload"," ","Check to see if fitness data uploading is permitted"," ","Once the function has been called, on XBox One it will trigger an ","Asynchronous System event"," when the callback result has been received, which will have the special DS map ","async_load",". This map should then be parsed for the following key:"," ","\"","event_type","\" - should hold the value ","\"check_privilege_result\""," if the event was triggered by this function"," ","If the event type relates to this function, then there will also be the following additional keys when the function is called on XBox:"," ","\"","result","\" - Will be one or more of the following ","UWP Privilege Result Constant","s (combined values):\n      "," ","UWP Privilege Result Constant"," ","Constant"," ","Description"," ","Value"," ","uwp_privilege_result_no_issue"," ","There are no privilege issues with the user"," ","0"," ","uwp_privilege_result_purchase_required"," ","The user must purchase something additional, usually a subscription, for access"," ","1"," ","uwp_privilege_result_aborted"," ","The check was aborted"," ","2"," ","uwp_privilege_result_banned"," ","The user is banned"," ","4"," ","uwp_privilege_result_restricted"," ","The user is restricted from access, usually through parental controls"," ","8"," ","\"","privilege","\" - will be one of the constants listed above for use in the function, so you can check which privilege you have requested in the case of multiple checks."," ","If the project is run on a UWP platform that is not XBox One, then the Async Event will ","not"," be triggered, and instead the function will immediately return wither -1, 0, or 1 where:"," ","-1 means -1 the user doesn't have the privilege"," ","0 means the function hasn't been able to query the user"," ","1 means the user has the privilege."],[" ","uwp_check_privilege(user_id, privilege, attempt_resolution);"," ","Argument"," ","Type"," ","Description"," ","user_id"," ","Xbox User ID"," ","The User ID pointer to check."," ","privilege"," ","UWP Privilege Constant"," ","The privilege constant to check (see description, above)."," ","attempt_resolution"," ","Boolean"," ","Enable attempting a resolution if set to ","true",", or ignore if set to ","false","."],[" ","Real"],[" ","var user_one = xboxlive_get_user(0);","\n    if (xboxlive_user_is_signed_in(user_one))","\n    {","\n        uwp_check_privilege(user_one, xboxlive_privilege_multiplayer_sessions, true);","\n    }"," ","The above checks to see if the user is signed in and if they are it checks the multiplayer sessions permission."," ","Back: ","UWP And XBox Live"," ","Next: ","uwp_suspend"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2746"})