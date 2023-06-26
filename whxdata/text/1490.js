rh._.exports({"0":[[" ","array_length_1d"]],"1":[["array_length_1d"]],"2":[[" ","array_length_1d ","DEPRECATED"]],"3":[[" ","WARNING!"," This function is deprecated (and replaced by ","array_length()",") as arrays are no longer limited to only 1 or 2 dimensions, and as such this function is only supplied for support of legacy projects. All new projects should use the current way of creating and accessing multi-dimension arrays (see ","here"," for more information)."," ","With this function you can get the length (number of entries) of a 1D array. For 2D arrays you should be using the ","array_height_2d"," and ","array_length_2d"," functions."," ","IMPORTANT!: ","If the array has over 32,000 entries this function will return an erroneous value and should not be used."],[" ","array_length_1d(array_index);"," ","Argument"," ","Type"," ","Description"," ","array_index"," ","Array"," ","The index of the array to check."],[" ","Real"],[" ","for (var i = array_length_1d(a) - 1; i > -1; i--;)","\n    {","\n        a[i] = -1;","\n    }"," ","The above code will loop through an array and set each entry to -1."," ","Back: ","Array Functions"," ","Next: ","array_length_2d"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_length_1d (Deprecated)"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1490"})