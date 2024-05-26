rh._.exports({"0":[[" ","buffer_seek"]],"1":[["buffer_seek,buffer_seek_start,buffer_seek_relative,buffer_seek_end"]],"2":[["buffer_seek,buffer_seek_start,buffer_seek_relative,buffer_seek_end"]],"3":[[" ","buffer_seek"]],"4":[[" ","This function moves the seek position of a buffer, setting it relative to the start, end or current seek position (that which was last used when reading or writing data)."," ","The seek position is the offset (in bytes) from the start of the buffer where new values are ","written",", and from where values are ","read",". It also moves automatically when you read from or write to a buffer."],[" ","The \"offset\" value is the offset (in bytes) to add to the given seek position, for example, if the base is relative and the offset is 4, then the buffer position will move along 4 bytes from its current position. Please note the following:\n      "," ","You can use negative values for the offset to seek back through the buffer as well as positive values."," ","If the buffer is of the \"wrap\" type and you offset past the end of the buffer, the seek position will also wrap."," ","If the buffer is not of the \"wrap\" type, the seek will clamp to the beginning or end of the buffer, even when the offset would take the seek outside of the buffer limits."," ","The following constants are accepted as the \"base\" argument for seeking to:"," ","Buffer Seek Constant"," ","Constant"," ","Description"," ","buffer_seek_start"," ","The start of the buffer"," ","buffer_seek_relative"," ","A position relative to the current read/write position"," ","buffer_seek_end"," ","The end of the buffer"],[" ","buffer_seek","(buffer, base, offset);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Buffer"," ","The buffer to use."," ","base"," ","Real"," ","The base position to seek."," ","offset"," ","Real"," ","The data offset value."],[" ","Real"," (the new seek position)"],[" ","buffer_seek","(buff, buffer_seek_start, 0);","\n    buffer_write(buff, buffer_s16, 0);","\n    buffer_write(buff, buffer_s16, x);","\n    buffer_write(buff, buffer_s16, y);"," ","The above code finds the start of the buffer stored in the variable ","buff"," then writes a series of signed 16bit integer values to it."," ","Back: ","Buffers"," ","Next: ","buffer_tell"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"7":[[" ","Usage Notes"]],"id":"2367"})