rh._.exports({"0":[[" ","matrix_build_projection_ortho"]],"1":[["matrix_build_projection_ortho"]],"2":[[" ","matrix_build_projection_ortho"]],"3":[[" ","This function builds an orthographic projection matrix based on the specified parameters listed below (this is the default projection method used when you create a room in ","GameMaker"," without changing anything). Sometimes you need to switch from a perspective projection to an orthographic projection which is what this function is for. It is typically used to draw an overlay, for example, to show the score or other aspects as this gives a \"flat\" view of the elements drawn (ie: no perspective) in a 3D game. See the image below to get an idea of the difference between orthographic and perspective views."," ","NOTE",": You may also need to temporarily switch off hidden surface removal if you want the information to be drawn regardless of the current depth value."],[" ","matrix_build_projection_ortho(width, height, znear, zfar);"," ","Argument","Type"," ","Description"," ","w","Real"," ","The width of the projection."," ","h","Real"," ","The height of the projection."," ","znear","Real"," ","The near clipping plane."," ","zfar","Real"," ","The far clipping plane."],[" ","Matrix Array"],[" ","viewmat = matrix_build_lookat(640, 240, -10, 640, 240, 0, 0, 1, 0);","\n    projmat = matrix_build_projection_ortho(640, 480, 1.0, 32000.0);","\n    camera_set_view_mat(view_camera[0], viewmat);","\n    camera_set_proj_mat(view_camera[0], projmat);"," ","The above code creates a new look-at matrix and orthographic matrix, stores their IDs in local variables and then uses them to set the view and projection matrices for the camera assigned to view port[0]."," ","Back: ","Matrix Functions"," ","Next: ","matrix_build_projection_perspective"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["matrix_build_projection_ortho"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1844"})