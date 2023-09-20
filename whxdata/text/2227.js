rh._.exports({"0":[[" ","string_concat_ext"]],"1":[["string_concat_ext"]],"2":[[" ","string_concat_ext"]],"3":[[" ","This function concatenates (joins together) the string representations of all elements in the given array, and returns the result as a new string."," ","Values that are not strings will have the ","string()"," function run on them implicitly. See ","Conversion From Non-String Types"," for information on how those data types are converted."],[" ","string_concat_ext","(values_array, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","values_array"," ","Array"," ","The array of values to concatenate"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array to start concatenating elements. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of array elements to concatenate, starting at the offset. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","String"],[" ","var _some_letters = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];","\n    var _concat = ","string_concat_ext","(_some_letters, -5, -3);"," ","The above code first creates an array with the first ten letters of the alphabet and stores it in a temporary variable ","_some_letters",". It then calls ","string_concat_ext"," on this array with an offset (starting position) of -5 (at the position of the letter \"f\") and a length of -3 (3 elements going from right to left)."," ","Back: ","Strings"," ","Next: ","string_width"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["string_concat_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2227"})