rh._.exports({"0":[[" ","skeleton_get_bounds"]],"1":[["skeleton_get_bounds"]],"2":[["skeleton_get_bounds"]],"3":[[" ","skeleton_get_bounds"]],"4":[[" ","This function will return an array of values associated with any given bounding box for the currently assigned skeleton animation sprite. You supply the index number for the bounding box to get the details of (you can retrieve the total number of bounding boxes for the sprite using the function ","skeleton_get_num_bounds()",") and the function will return an array with the following elements:"," ","[0] - the number of points on the bounding box (a real)"," ","[1] - the name of the bounding box (a string)"," ","[2] - the x position of the first point"," ","[3] - the y position of the first point"," ","[etc...] - further x/y position data up to the number of points on the bounding box"," ","NOTE"," The bounding box of a Spine sprite is set up in Spine itself, not in ","GameMaker","."],[" ","skeleton_get_bounds(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Real"," ","The bounding box index to get the values of."],[" ","Array"," (minimum 2 elements: numPoints, name [, xPos, yPos, etc...])"],[" ","var num = skeleton_get_num_bounds();","\n    var yy = 60;","\n    for(var i = 0; i < num; i++)","\n    {","\n        var b_info = skeleton_get_bounds(i);","\n        if b_info[0] > 0","\n        {","\n            var data = b_info[1] + \":\";","\n            for(var j = 0; j < b_info[0]; j++)","\n            {","\n                data += \" (\" + string(b_info[(j * 2) + 2]) + \", \" + string(b_info[(j * 2) + 2 + 1]) + \")\";","\n            }","\n            draw_text(20, yy, data);","\n            yy += 20;","\n        }","\n    }"," ","The above code will loop through each of the bounding boxes associated with the currently assigned sprite and then draw that data as a string to the screen."," ","Back: ","Drawing And Miscellaneous"," ","Next: ","skeleton_collision_draw_set"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1817"})