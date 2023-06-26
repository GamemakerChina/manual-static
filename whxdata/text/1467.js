rh._.exports({"0":[[" ","texture_is_ready"]],"1":[["texture_is_ready"]],"2":[[" ","texture_is_ready"]],"3":[[" ","This function can be used to check if a specific texture page has been unpacked and is ready for use, or if a group of texture pages have been unpacked and are ready for use. You supply the unique ","texture page ID"," (as returned by the ","texturegroup_*"," functions) or the texture group ID string (as defined in the Texture Group Editor), and the function will return ","true"," if they have been unpacked, or ","false"," otherwise."],[" ","texture_is_ready(tex_id);"," ","Argument"," ","Type"," ","Description"," ","tex_id"," ","Texture"," or ","String"," ","The texture page pointer ","or"," a texture group name (a string)"],[" ","Boolean"],[" ","var _tex_array = texturegroup_get_textures( \"MainMenu\");","\n    for (var i = 0; i < array_length(_tex_array); ++i;)","\n    {","\n        if !texture_is_ready(_tex_array[i])","\n        {","\n            texture_prefetch(_tex_array[i]);","\n        }","\n    }"," ","The above code will retrieve the texture page IDs for the texture group \"MainMenu\", then check to see if they are unpacked, and if they are not they are prefetched into ","VRAM","."," ","Back: ","Textures"," ","Next: ","texturegroup_get_textures"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["texture_is_ready"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1467"})