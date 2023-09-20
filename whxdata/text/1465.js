rh._.exports({"0":[[" ","struct_exists"]],"1":[["variable_struct_exists,struct_exists"]],"2":[[" ","struct_exists"]],"3":[[" ","This function checks whether a variable exists within the given struct or not. You supply the struct reference to use as well as the variable name to check for ","as a string"," (see example code below). The function will return ","true"," if a variable with the given name exists for the struct and ","false"," otherwise."],[" ","struct_exists","(struct, name);"," ","Argument"," ","Type"," ","Description"," ","struct"," ","Struct"," ","The struct reference to check"," ","name"," ","String"," ","The name of the struct variable to check for (as a string)"],[" ","Boolean"],[" ","if !","struct_exists","(mystruct, \"shields\")","\n    {","\n        mystruct.shields = 0;","\n    }"," ","The above code will check to see if the variable called \"shields\" exists in the given struct and if it does not then it is created and initialised to 0."," ","Back: ","Variable Functions"," ","Next: ","struct_get"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["variable_struct_exists,struct_exists"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1465"})