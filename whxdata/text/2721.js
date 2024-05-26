rh._.exports({"0":[[" ","JSDoc Script Comments"]],"1":[["Code Editor - JSDoc Comments,JSDoc"]],"2":[["JSDoc,JSDoc Comments"]],"3":[[" ","JSDoc Script Comments"]],"4":[[" ","If you wish your custom functions to have code completion and to show the required arguments in a specific manner in the code editor, then you need to add some ","JSDoc style"," comments. These comments are used to tell the auto-complete feature how the function should be used and filled out in the ","script editor","."," ","TIP"," You can generate these comments automatically using ","Feather","'s ","Quick Fixes"," menu (press "," / "," + Q or click the "," icon). The option is visible when your text cursor is placed on a function header (i.e. the line where the function's name is defined)."," ","The format for a typical function header would be to have the function name, the description of the function, and then the list of the different arguments (parameters) that the function takes, making sure to start each line with a triple forward slash \"","///","\" as that tells ","GameMaker"," to parse the comment as being JSDoc style. You can alternatively wrap your JSDoc comments in ","/**"," ... ","*/",", with the ","/**"," being on its own line."," ","The comments themselves need to be given an identifier (preceded by \"","@","\") and content. The available identifiers are as follows: "," ","Identifier"," ","Content"," ","Syntax"," ","@function"," / ","@func"," ","The full function name including arguments"," ","@func my_func(args)"," ","@description"," / ","@desc"," ","A general description of what the function does"," ","@desc <Description goes>"," ","@param"," / ","@","parameter"," / ","@arg"," / ","@argument"," ","Information on an argument, with an optional ","type"," in ","{}"," (or multiple acceptable types separated by ",","," or ","|",")"," ","@param {type,type} name <Parameter description>"," ","@return / @returns"," ","Type"," of data the function returns"," ","@return {type,type} <Return description>"," ","Feather"," only"," ","@pure"," ","Marks the function as ","pure"," ","@pure"," ","@ignore"," ","Hides the function from Feather's autocomplete"," ","@ignore"," ","@deprecated"," ","Marks the function as deprecated"," ","@deprecated"," ","@context / @self"," ","Sets the context for the function, which Feather auto-complete uses to provide contextual information. Can be an object or a constructor."," ","@self <object>"," ","If you haven't specified a type for your arguments or return value, and you're using ","Feather",", it will assume a data type for them automatically, based on your function body."," ","See information on data types for ","@param"," and ","@return"," on ","Feather Data Types","."],[" ","To get an idea of how this would work when writing your own functions, let's take this basic example:"," ","function is_same_object(_id, _obj)","\n    {","\n        if (_id.object_index == _obj)","\n        {","\n            return true;","\n        }","\n        else return false;","\n    }"," ","All this script does is check to see if an instance has the same ","object_index"," as a given object and would be called simply as:"," ","if (is_same_object(id, obj_Player)) ","\n    {","\n        instance_destroy()","\n    }"," ","However, writing that into the code editor will show you the argument variable names directly (","_id"," and ","_obj",") which in most cases is not very descriptive. You can use JSDoc to define custom argument names and descriptions, along with information for the function as well:"," ","/// @function                is_same_object(inst_id, object_id)","\n    /// @description             Check if the given instance belongs to the given object.","\n    /// @param {Id.Instance}     inst_id    The unique instance ID value of the instance to check.","\n    /// @param {Asset.GMObject}  object_id  The object index to be checked against.","\n    /// @return {Bool}"," ","\n    function is_same_object(_inst_id, _object_id)","\n    {","\n        return _inst_id.object_index == _object_id;","\n    }\n  "," ","Now, when calling this function anywhere in your project, you will see the new argument names that were entered in the JSDoc comments:"," ","In the image above, the top part shows the function in the auto-complete and the bottom part shows how the argument helper at the bottom works. Note that both the optional \"type\" and the obligatory \"description\" parts of ","@param"," are not displayed by default in the IDE code complete, and to see them you must activate the options in the ","GML Preferences","."," ","When using ","Feather",", you will see detailed information on the function when you hover your mouse over it:"," ","You can wrap an argument name in ","[]"," brackets to indicate that it is optional. The code editor will then expect any number of arguments between the minimum required arguments and the total number of arguments."," ","For example, see the following function:"," ","/// @function    animate_position(end_x, end_y, start_x, start_y)","\n    /// @desc        Animates the instance to ending point, from optional starting point","\n    /// @arg end_x","\n    /// @arg end_y","\n    /// @arg [start_x]","\n    /// @arg [start_y]"," ","\n    function animate_position (x1, y1, x2, y2)","\n    {","\n        // Function code","\n    }\n  "," ","The ","start_x"," and ","start_y"," arguments are marked as optional, which means the code editor will now expect 2 to 4 arguments, as can be seen in the warning message:"," ","NOTE"," You will get the same behaviour if you use optional arguments in the function declaration. See ","script functions"," for more information."," ","Since scripts can have multiple functions in them, you can add JSDoc comments for each of them before its declaration:"," ","Back: ","The Script Editor"," ","Next: ","Feather Data Types"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"8":[[" ","Examples"]],"id":"2721"})