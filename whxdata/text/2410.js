rh._.exports({"0":[[" ","string_trim_start"]],"1":[["string_trim_start"]],"2":[["string_trim_start"]],"3":[[" ","string_trim_start"]],"4":[[" ","This function returns a new string with all leading white-space characters removed (i.e. on the left side of the string)."," ","Passing an array of strings as the second argument (","substr",") will make the function remove any of those substrings at the start of the string, instead of white-space. These substrings may be repeated at the start, in which case all continuous occurrences will be removed. See ","Example 3"," below."," ","NOTE"," The following characters are white-space characters: space (\" \"), tab (\"\\t\"), carriage return (\"\\r\"), newline (\"\\n\"), form feed (\"\\f\") and vertical tab (\"\\v\"). See ","White-space Characters"," for the full list, including Unicode characters."],[" ","string_trim_start","(str, [","substr","]);"," ","Argument"," ","Type"," ","Description"," ","str"," ","String"," ","The string to trim"," ","substr"," ","Array"," of ","String","s"," ","OPTIONAL"," An array containing strings to trim from the start of the string"],[" ","String"],[" ","var _string_with_a_bit_of_everything = \"     \\t\\t\\t\\tHello World\";","\n    var _trimmed_string = ","string_trim_start","(_string_with_a_bit_of_everything);","\n    show_debug_message(_trimmed_string);"," ","The above code first creates a temporary string named ","_string_with_a_bit_of_everything",". This string contains a couple of leading spaces and tabs before the actual text. It then trims all whitespace from the start of the string by calling ","string_trim_start"," and the result is stored in a new temporary variable ","_trimmed_string",". Finally this new string is shown in a debug message."],[" ","var _string = \"ThisThis is an object I love\"","\n    var _remove = [\"This\", \"is\", \"love\"]","\n    var _trimmed = ","string_trim_start","(_string, _remove);"," ","\n    show_debug_message(_trimmed) // Prints \" is an object I love\"\n  "," ","This removes the word ","\"This\""," from the start of the string. ","\"This\""," appears twice at the start and is removed both times. The word ","\"is\""," is not removed, because it's not at the very start of the string, and ","\"love\""," is not removed as it's at the ","end","."," ","Back: ","Strings"," ","Next: ","string_trim_end"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2 (Using An Array):"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2410"})