rh._.exports({"0":[[" ","gpu_set_tex_max_aniso_ext"]],"1":[["gpu_set_tex_max_aniso_ext"]],"2":[[" ","gpu_set_tex_max_aniso_ext"]],"3":[[" ","With this function you can set the maximum level of anisotropy when using the ","tf_anisotropic"," filter mode (see ","gpu_get_tex_mip_filter()"," for more information) on a shader sampler. You supply the index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",", and then a value within the range of 1 and 16 to set the level."],[" ","gpu_set_tex_max_aniso_ext(sampler_index, maxaniso);"," ","Argument","Type"," ","Description"," ","sampler_index","Shader Sampler Handle"," ","The index of the shader sampler to get"," ","maxaniso","Real"," ","The maximum anisotropic level to use (default: 16)."],[" ","N/A"],[" ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");","\n    var _spriteTex = sprite_get_texture(sprite_index, 0);","\n    shader_set(shd_Glass);","\n    if gpu_get_tex_max_aniso_ext(_sampleIndex) != 8","\n    {","\n        gpu_set_tex_max_aniso_ext(_sampleIndex, 8);","\n    }","\n    texture_set_stage(_sampleIndex , _spriteTex);","\n    shader_reset();"," ","The above code sets the maximum level of anisotropy to 8 for the given shader texture sampler if it has not already been set to 8."," ","Back: ","Mipmapping"," ","Next: ","gpu_set_tex_mip_enable"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_set_tex_max_aniso_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1338"})