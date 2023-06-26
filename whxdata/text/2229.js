rh._.exports({"0":[[" ","is_instanceof"]],"1":[["is_instanceof"]],"2":[[" ","is_instanceof"]],"3":[[" ","This function returns whether the given ","struct"," is an \"instance of\" the given ","constructor",". You can use this function to check if the constructor used to create your struct was the same one as you supplied in the second argument, or if it's a child constructor of your given constructor."," ","This means that if your struct was created from constructor ","B",", and constructor ","B"," is a child of constructor ","A",", calling ","is_instanceof(struct_of_B, A)"," will return ","true","."," ","This function works by checking the ","Static Chain"," of your given struct to see if your given constructor is included anywhere in that chain. See: ","Static Struct"," ","NOTE"," If you use ","static_set"," to replace the static chain of a struct, it will modify the behaviour of this function on that struct, as it checks the static chain to determine inheritance. Using ","static_set"," is not recommended aside from deserialisation cases where an anonymous struct is loaded back as part of a hierarchy."],[" ","is_instanceof","(struct, constructor_name);"," ","Argument"," ","Type"," ","Description"," ","struct"," ","Struct"," ","The struct to check (the \"instance\")"," ","constructor_name"," ","Function"," ","The constructor to check (is the struct an ","instance of"," this constructor?)"],[" ","Boolean"],[" ","function item() constructor {}"," ","\n    function potion() : item() constructor {}"," ","\n    function enemy() constructor {}"," ","\n    var _potion = new potion();"," ","\n    show_debug_message(is_instanceof(_potion, potion)); // true (1)","\n    show_debug_message(is_instanceof(_potion, item)); // true (1)","\n    show_debug_message(is_instanceof(_potion, enemy)); // false (0)\n  "," ","The above code shows three constructors: ","item",", ","potion"," which is a child of ","item",", and ","enemy",", which is a separate constructor."," ","It creates a struct from the ","potion"," constructor. Using ","is_instanceof()",", we can check that the new struct:"," ","is a ","potion"," ","is an ","item"," ","is not an ","enemy"," ","This way you can check whether a struct \"is\" something, as ","a potion is an item",", so it returns ","true"," for both constructors. However if wouldn't be true the other way around: ","an item is not a potion","."," ","Back: ","Variable Functions"," ","Next: ","typeof"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["is_instanceof"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2229"})