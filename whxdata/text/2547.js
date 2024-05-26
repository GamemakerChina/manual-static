rh._.exports({"0":[[" ","Local Variables"]],"1":[["var,Local Variables"]],"2":[["local variables,local,var,local scope"]],"3":[[" ","Local Variables"]],"4":[[" ","A ","local"," variable is one that we create for a specific ","event"," or ","function"," ","only"," and then discard when the event or function has finished. If it is created in a custom function then the local variable is only available to the function and then discarded when the function has finished. Why would we need them? Well, variables take up space in memory and it may be that we are only going to use them for one operation or function in which case we only need to have it in memory for that short time that it's used. This keeps your code base clean and tidy as well as keeping memory space optimised for the things that really need it. To declare a local variable we use the ","var"," operator like this:"," ","var _i, _num, _str;","\n    _i = 0;","\n    _num = 24.5;","\n    _str = \"Hello World\";"," ","\n    // or"," ","\n    var _i = 0, _num = 24.5, _str = \"Hello World\";"," ","\n    // or"," ","\n    var _i = 0;","\n    var _num = 24.5;","\n    var _str = \"Hello World\";\n  "," ","All of the variables created in this way will be \"forgotten\" (ie: removed from memory) at the end of the event (or function) in which they were created. You should be careful that the name you give all ","var"," declared variables does not coincide with another instance variable within the object running the code, and also make sure that you have no intention of using the value stored in that variable outside of the event or function you declare it in (in the examples above, all the ","var"," declared variables have been defined with the underscore \"_\" preceding the variable name, but this is not required and is done simply to make it more obvious in the code that we are dealing with a local variable). That said, if you find yourself in a situation where you think a local variable ","should"," be the same as an instance variable, then you can use the ","self"," ","keyword"," to identify the instance variable as separate, for example:"," ","var hp = 10;","\n    with (obj_Enemy)","\n    {","\n        self.hp -= hp;","\n    }"," ","Local variables are used a lot in programs, especially in loops for counting ","iteration","s",", or when using a value several times in one operation that is not going to be repeated again. Here are another couple of examples:"," ","var _i = 0;","\n    repeat (10)","\n    {","\n        inventory[_i] = 0;","\n        _i += 1;","\n    }"," ","The above code creates a local variable called \"","_i","\" and sets it to 0, all in the same line. Note that in previous versions of ","GameMaker"," you had to declare your local variables first and ","then"," assign them values, but in this version you can declare ","and"," assign them a value at the same time. The above code then uses this variable to initialise an ","array",". As the variable \"","_i","\" is not going to be used for any further functions in the instance other than this, it can be local in scope. Here is one more example:"," ","var _x, _y;","\n    _x = x - 32 + irandom(64);","\n    _y = y - 32 + irandom(64);","\n    instance_create_layer(_x, _y, \"Effects\", obj_blood);"," ","Here we have used the local variables \"","_x","\" and \"","_y","\" to store some random coordinates that we then use to create an instance. In this example you can see that it is not strictly necessary that we use these variables but for the sake of readability and ease of use, we do. It is MUCH clearer and obvious what we are doing there than if we used this code:"," ","instance_create_layer(x - 32 + irandom(64), y - 32 + irandom(64), \"Effects\", obj_guts);"," ","You can also declare multiple variables in a single local variable statement and assign each of them a value at the same time: "," ","var a = 10, b = \"a text\", c = {index: 0, previous: -1};"," ","NOTE"," You can also use the above multiple variable initialisation in the ","<assignment>"," part of a ","for"," loop."," ","One final thing about ","var"," declared local variables should be noted... Since they are unique to the event or function that runs them, they can be used in any other instances through code too! This means that we can use these variables to set and change things in other instances using the \"","with()","\" construct (see the section on ","variable scope"," for more information). The actual code itself would look something like this:"," ","var num = instance_number(obj_Enemy);","\n    with (obj_Enemy)","\n    {","\n        if num>10 instance_destroy();","\n    }"," ","The above code works because the ","var"," declared variable is local to the ","event"," (or function) it is contained in, not the instance, nor the game world, and so can be used in any function in any object as long as it is in the same code block."," ","Back: ","Variables And Variables Scope"," ","Next: ","Instance Variables"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2547"})