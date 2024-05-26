rh._.exports({"0":[[" ","while"]],"1":[["while"]],"2":[["while"]],"3":[[" ","while"]],"4":[[" ","The GameMaker Language has a number of ways that you can perform ","loops",", one of the most important is the ","while"," loop. This loop function has the form:"," ","while (<expression>)","\n    {","\n        <statement>;","\n        <statement>;","\n        ...","\n    }"," ","Here you have a ","statement"," that is iterated over again and again based on the results of the evaluation of an ","expression",", ie: with a ","while"," loop, as long as the expression evaluates to ","true",", the statement (which can also be a code block of multiple statements with curly brackets ","{}",") is executed. Below you can find an example of a typical way to use \"while\":"," ","while (place_meeting(x, y, obj_Wall))","\n    {","\n        x -= 1;","\n    }"," ","The above code is checking for a collision between the calling instance and a \"wall\" instance, and it will perform multiple ","iteration","s"," while one is occurring - moving the instance left by one pixel - until the instance is no longer in collision."," ","When should you use a ","while"," loop?"," It should be used any time you want to repeat one or more statements, but don't actually know - or care - how many times it has to repeat, keeping in mind that if the initial evaluation is ","false",", the statements may not even be run."," ","Please not that you should ","be very careful with your ","while"," loops","! You can easily make ","infinite"," loops, in which case your game will hang and not react to any user input anymore and need to be force closed. For example:"," ","while (!place_free(x, y))","\n    {","\n        x = random(room_width);","\n        y = random(room_height);","\n    }"," ","Now, the above code may work fine, but it may also cause an infinite loop if the instance is unable to find an empty position to move to, and this will cause the game to hang. If you find yourself in a position where this kind of thing is a possibility, then you should either use a different non-blocking loop kind, or use an additional variable check in the expression (you can use multiple expressions along with the ","and"," (&","&",")",", ","or"," (","||",")"," and ","xor"," (","^^",")"," ","operator","s"," for the check):"," ","var _check = 0;","\n    while ((!place_free(x, y)) && (_check < 100))","\n    {","\n        x = random(room_width);","\n        y = random(room_height);","\n        _check += 1;","\n    }","\n    if (_check >= 100) ","\n    {","\n        // code failed, so deal with it","\n    }"," ","Alternatively you can use the ","break"," statement to break out of the loop, for example, the following code will generate 100 random numbers then continue, even though the ","while"," evaluation is ","always"," going to be ","true",":"," ","var i = 0;","\n    while (true)","\n    {","\n        x[i] = random(room_width);","\n        y[i] = random(room_height);","\n        if ((i++) >= 100)","\n        {","\n            break;","\n        }","\n    }"," ","You may also use the ","continue"," statement in a ","while"," loop. Using this will end the current loop iteration and restart the loop again on a new iteration, for example:"," ","var file = file_text_open_read(\"Game_Data.txt\");","\n    var _num = 0;","\n    while (!file_text_eof(file))","\n    {","\n        var _s = file_text_readln(file);"," ","\n        if (_s == \"\")","\n        {","\n            continue;","\n        }"," ","\n        str[num++] = _s;","\n    }"," ","\n    file_text_close(file);\n  "," ","This code above will open a file and read a line from it each loop iteration until the end of the file contents are reached. If the line being read is an empty string, the current loop iteration is ended using the ","continue"," statement and a new iteration will be started, otherwise the string is added into an ","array"," and the array position incremented."," ","For more examples of loop functions please see the sections on ","repeat",", ","do... until",", and ","for","."," ","Back: ","Language Features"," ","Next: ","do / until"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2461"})