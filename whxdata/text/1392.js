rh._.exports({"0":[[" ","shader_set_uniform_i_array"]],"1":[["shader_set_uniform_i_array"]],"2":[[" ","shader_set_uniform_i_array"]],"3":[[" ","With this function you can set a shader constant to hold an array of values. You must previously have gotten the \"handle\" of the constant using the function ","shader_get_uniform()",", and you will have to have previously initialised the array."," ","NOTE",": All uniforms must be set ","after"," calling the function ","shader_set()",", and before calling ","shader_reset()","."],[" ","shader_set_uniform_i_array(handle, array);"," ","Argument"," ","Type"," ","Description"," ","handle"," ","Shader Uniform Handle"," ","The handle of the shader constant to set."," ","array"," ","Array"," ","A previously initialised array of integer values."],[" ","N/A"],[" ","shader_set(shader_Glass);","\n    col_array[0] = 255;","\n    col_array[2] = 255;","\n    col_array[3] = 64;","\n    col_array[4] = 128;","\n    shader_params = shader_get_uniform(shader_tint, \"cColourArray\");","\n    shader_set_uniform_i_array(shader_params, col_array);","\n    draw_self();","\n    shader_reset();"," ","The above code will get the handle of the shader constant \"cColourArray\" then set that constant to the given array."," ","Back: ","Shaders"," ","Next: ","shader_set_uniform_matrix"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["shader_set_uniform_i_array"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1392"})