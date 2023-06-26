rh._.exports({"0":[[" ","draw_get_alpha"]],"1":[["draw_get_alpha"]],"2":[[" ","draw_get_alpha"]],"3":[[" ","This function returns the current value of the draw alpha, which will range between 0 (fully transparent) and 1 (fully opaque). The draw alpha affects the transparency of all draw functions, and can be set with the ","draw_set_alpha()"," function."],[" ","draw_get_alpha()"],[" ","Real"],[" ","var _cur_alpha = draw_get_alpha();","\n    draw_set_alpha(text_alpha);","\n    draw_text(x, y, text);","\n    draw_set_alpha(_cur_alpha);"," ","The above code stores the current draw alpha into a local variable, and changes the draw alpha based on an instance variable. After drawing some text, it resets the alpha back to the value stored in the local variable."," ","Back: ","Colour And Alpha"," ","Next: ","make_colour_hsv"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_get_alpha"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"167"})