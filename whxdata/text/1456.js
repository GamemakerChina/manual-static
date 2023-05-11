rh._.exports({"0":[[" ","draw_line_width"]],"1":[["draw_line_width"]],"2":[["draw_line_width"]],"3":[[" ","draw_line_width"]],"4":[[" ","With this function you can draw a line of a specified width between any two points in the game room. Please note that the line being drawn may need different values (+/-1 on the x, y) to be drawn with the desired dimensions due to differences across\n    the various supported platforms."," ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind."],[" ","draw_line_width(x1, y1, x2, y2, w);"," ","Argument","Type"," ","Description"," ","x1","Real"," ","The x coordinate of the start of the line."," ","y1","Real"," ","The y coordinate of the start of the line."," ","x2","Real"," ","The x coordinate of the end of the line."," ","y2","Real"," ","The y coordinate of the end of the line."," ","w","Real"," ","The width of the line in pixels."],[" ","N/A"],[" ","draw_set_colour(c_red);"," draw_line_width(100, 100, 200, 200, 6);"," ","This will draw a red diagonal line, 6 pixels wide, from point (100,100) to point (200,200)."," ","Back: ","Basic Forms"," ","Next: ","draw_line_width_colour"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1456"})