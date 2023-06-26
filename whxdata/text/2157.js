rh._.exports({"0":[[" ","shader_set_uniform_f"]],"1":[["shader_set_uniform_f"]],"2":[[" ","shader_set_uniform_f"]],"3":[[" ","With this function you can set the value (or values) of a shader constant. You must previously have gotten the \"handle\" of the constant using the function ","shader_get_uniform()",", and you will have to know what type of constant it is to pass the correct number of floating point values through to it, ie: if you have a ","vec2"," you will need to pass two values to the function."," ","An exception to the above rule is when dealing with 32bit colour values. You can pass into the shader up to eight 32bit colour values and they will automatically be converted for you into vec4 values of 0 - 1. However for this you ","must"," use the shader constant name ","in_Colour",", for a single colour, or ","in_Colour0",", ","in_Colour1",", etc... up to ","in_Colour7"," for multiple input values. The following to examples show how this would look in the shader itself:"," ","    //Single colour","\n        attribute vec2 in_Position;","\n        attribute vec4 in_Colour;","\n        attribute vec2 in_TextureCoord;"," ","\n        //Multiple colours","\n        attribute vec2 in_Position;","\n        attribute vec4 in_Colour0;","\n        attribute vec4 in_Colour1;","\n        attribute vec2 in_TextureCoord;\n  "," ","Note too that if you want to do compressed normals etc... using a 4 byte colour format, then you will also have to use the same \"in_Colour\" format as shown above too."," ","NOTE",": All uniforms must be set ","after"," calling the function ","shader_set()",", and before calling ","shader_reset()","."],[" ","shader_set_uniform_f(handle, value1 [, value2, value3, value4]);"," ","Argument"," ","Type"," ","Description"," ","handle"," ","Shader Uniform Handle"," ","The handle of the shader constant to set."," ","value1 ... value4"," ","Real"," ","The floating point value (or values) to set the shader constant to."],[" ","N/A"],[" ","shader_set(shader_Glass);","\n    shader_params = shader_get_uniform(shader_Glass, \"u_vParams\");","\n    shader_set_uniform_f(shader_params, 0.1, 0.8, 0.25);","\n    draw_self();","\n    shader_reset();"," ","The above code will get the handle of the shader constant \"u_vParams\" ( a ","vec3","), then set that constant to the given values."," ","Back: ","Shaders"," ","Next: ","shader_set_uniform_f_array"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["shader_set_uniform_f"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2157"})