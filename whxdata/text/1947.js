rh._.exports({"0":[[" ","gpu_set_tex_mip_enable_ext"]],"1":[["gpu_set_tex_mip_enable_ext,mip_off,mip_on,mip_markedonly"]],"2":[[" ","gpu_set_tex_mip_enable_ext"]],"3":[[" ","With this function you can set whether mipmapping is switched off, switched on for everything or switched on only for texture groups selected in the ","Texture Group Manager"," on a shader sampler. You supply the index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",", and then one of the constants listed below."," ","Constant"," ","Description"," ","mip_off"," ","Mipmapping is disabled."," ","mip_on"," ","Mipmapping for all textures is enabled."," ","mip_markedonly"," ","Mipmapping is enabled for textures that have it enabled in the Texture Group options (default)."],[" ","gpu_set_tex_mip_enable_ext(sampler_index, setting);"," ","Argument"," ","Type"," ","Description"," ","sampler_index"," ","Shader Sampler Handle"," ","The index of the shader sampler to get"," ","setting"," ","Mipmapping Constant"," ","The mipmap setting (a constant, default: ","mip_markedonly",")"],[" ","N/A"],[" ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");","\n    var _spriteTex = sprite_get_texture(sprite_index, 0);","\n    shader_set(shd_Glass);","\n    if gpu_get_tex_mip_enable_ext(_sampleIndex) != mip_on","\n    {","\n        gpu_set_tex_mip_enable_ext(_sampleIndex, mip_on);","\n    }","\n    texture_set_stage(_sampleIndex , _spriteTex);","\n    shader_reset();"," ","The above code enables mipmapping for the given shader texture sampler if it has not already been enabled."," ","Back: ","Mipmapping"," ","Next: ","gpu_get_tex_mip_filter"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gpu_set_tex_mip_enable_ext,mip_off,mip_on,mip_markedonly"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1947"})