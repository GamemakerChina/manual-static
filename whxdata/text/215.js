rh._.exports({"0":[[" ","gpu_set_tex_min_mip"]],"1":[["gpu_set_tex_min_mip"]],"2":[["gpu_set_tex_min_mip"]],"3":[[" ","gpu_set_tex_min_mip"]],"4":[[" ","With this function you can set the minimum mipmap level which is currently used, where a value of 0 is the highest resolution, 1 is to use the first mipmap, 2 is the second etc..."],[" ","gpu_set_tex_min_mip(minmip);"," ","Argument","Type"," ","Description"," ","minmip","Real"," ","The minimum mipmap level to use"],[" ","N/A"],[" ","if (gpu_get_tex_min_mip() != 0) ","\n    {","\n        gpu_set_tex_min_mip(0);","\n    }"," ","The above code will check the current minimum mipmap level and if it is not 0 it is set to 0."," ","Back: ","Mipmapping"," ","Next: ","gpu_set_tex_min_mip_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"215"})