rh._.exports({"0":[[" ","gpu_get_texrepeat_ext"]],"1":[["gpu_get_texrepeat_ext"]],"2":[[" ","gpu_get_texrepeat_ext"]],"3":[[" ","With this function you can check to see whether texture repeating is enabled (returns ","true",") or not (returns ","false",") for a given shader sampler texture."],[" ","gpu_get_texrepeat_ext(sampler_id);"," ","Argument","Type"," ","Description"," ","sampler_id","Shader Sampler Handle"," ","The sampler id from the shader."],[" ","Boolean"],[" ","var s_tex = shader_get_sampler_index(shader_glass, \"s_NoiseSampler\");","\n    if !gpu_get_texrepeat_ext(s_tex)","\n    {","\n        gpu_set_texrepeat_ext(s_tex, true);","\n    }"," ","The above code checks to see if texture filtering off for a specific sampler ID (stored in a local variable) and switches it on if it's not."," ","Back: ","GPU Control"," ","Next: ","gpu_set_blendenable"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_get_texrepeat_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"431"})