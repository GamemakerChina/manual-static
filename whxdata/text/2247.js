rh._.exports({"0":[[" ","dbg_text"]],"1":[["dbg_text"]],"2":[["dbg_text"]],"3":[[" ","dbg_text"]],"4":[[" ","This function creates a read-only text label within the current debug section. You can use this to explain surrounding controls."," ","Both a ","String"," and a ","Reference"," to a variable containing a string can be passed to the function. The text can be multiline."," ","NOTE"," See ","dbg_text_input"," for a control that allows modifiable text."," ","NOTE"," This control takes up a single column and can be shown on the same line with another single-column control using ","dbg_same_line","."],[" ","dbg_text","(ref_or_string);"," ","Argument"," ","Type"," ","Description"," ","ref_or_string"," ","Reference"," or ","String"," ","A string or a reference to a variable that can be converted to string, returned by ","ref_create"],[" ","N/A"],[" ","Create Event"," ","text = \"text\";","\n    ref_to_text = ref_create(self, \"text\");"," ","dbg_text","(ref_to_text);"," ","dbg_text","(text);"," ","dbg_text","(\"More text\");\n  "," ","The above code assigns some text to an ","instance variable"," ","text",". It then creates a reference to that variable using ","ref_create"," and stores it in ","ref_to_text",". Next, it adds three text controls to a new debug view ","\"Default\""," that will be created, under a new section ","\"Default\"",". The three calls to ","dbg_text"," add a text entry in three different ways: the first provides the reference to the ","text"," variable, the second passes the variable ","text"," itself (which assigns the ","value"," the variable currently has) and the last passes a string directly."," ","Back: ","The Debug Overlay"," ","Next: ","dbg_text_input"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2247"})