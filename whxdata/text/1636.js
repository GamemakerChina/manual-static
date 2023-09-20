rh._.exports({"0":[[" ","analytics_event_ext"]],"1":[["analytics_event_ext"]],"2":[[" ","analytics_event_ext ","OBSOLETE"]],"3":[[" ","This function will send the specified text to the analytics provider that you have set up through the ","HTML5 Game Options",". This function can be used to create a custom analytic to track something outside of the scope of the provider being used, and will also accept custom parameter/value pairs, where the parameter is a string and the value a real number. For Google Analytics, you can only add in one extra pair while Flurry will accept up to 7."],[" ","analytics_event_ext(string, string_param, value);"," ","Argument"," ","Type"," ","Description"," ","string"," ","String"," ","A string to send to the provider."," ","string_param[0 -9]"," ","String"," ","The parameter to send (a string)."," ","value[0 - 9]"," ","Real"," ","The value of the parameter (a real number)."],[" ","N/A"],[" ","var num, time;","\n    ini_open(\"Options.ini\");","\n    num = ini_read_real(\"Data\", \"Plays\", 0);","\n    num += 1;","\n    time = current_time;","\n    analytics_event_ext(GAME_NAME, \"Plays\", num, \"Time\", time);","\n    ini_write_real(\"Data\", \"Plays\", num);","\n    ini_close();"," ","The above code will get play information from an ini file as well as the current time and then send those details to the analytics provider."," ","Back: ","Web And HTML5"," ","Next: ","url_open"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["analytics_event_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1636"})