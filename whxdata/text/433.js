rh._.exports({"0":[[" ","gpu_set_tex_max_aniso"]],"1":[["gpu_set_tex_max_aniso"]],"2":[["gpu_set_tex_max_aniso"]],"3":[[" ","gpu_set_tex_max_aniso"]],"4":[[" ","With this function you can set the current maximum level of anisotropy when using the ","tf_anisotropic"," filter mode (see ","gpu_get_tex_mip_filter()"," for more information). The input value must range between 1 and 16."],[" ","gpu_set_tex_max_aniso(maxaniso);"," ","Argument","Type"," ","Description"," ","maxaniso","Real"," ","The maximum level for anisotropic filtering (default: 16)"],[" ","N/A"],[" ","if gpu_get_tex_max_aniso() != 8","\n    {","\n        gpu_set_tex_max_aniso(8);","\n    }"," ","The above code will check the current maximum anisotropic filtering level and if it is not 8 it is set to 8."," ","Back: ","Mipmapping"," ","Next: ","gpu_set_tex_max_aniso_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"433"})