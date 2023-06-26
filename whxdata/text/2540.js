rh._.exports({"0":[[" ","Buffers"]],"1":[["Buffers"]],"2":[[" ","Buffers"]],"3":[[" ","A buffer is a region of physical memory used to temporarily hold data while it is being moved from one place to another or manipulated in some way, for example you can use a buffer to hold packet data awaiting transmission over a network or for storing a packet that has been received over a network. ","GameMaker"," has a number of specific functions related to creating, modifying and loading/saving buffers, but before using them please note the following points:"," ","When a buffer is created, it is automatically cleared and filled to 0."," ","The \"size\" argument of the buffer functions always refers to the size ","in bytes"," of the buffer."," ","The \"Alignment\" argument refers to how data is stored within a buffer. If your alignment is set to say, 4, and you write a single piece of data which is 1 byte in size then do a ","buffer_tell",", you'll get an offset of 1. However, if you write another piece of data, also 1 byte in size, then do a ","buffer_tell",", you'll get an offset of 5 as the alignment has \"padded\" the data to that size. Alignment only affects ","where"," things are written to, so if you do a ","buffer_tell"," after you write something, it'll return the current write position which immediately follows the data you've written. Note, however, that if you then write another piece of data, internally the buffer will move the write position along to the next multiple of the alignment size before actually writing the piece of data."," ","When dealing with \"offset\", this is the value ","in bytes"," to offset the data by within the given buffer. So if your buffer is 2 byte aligned and you want to skip the first 4 aligned places, you would have an offset of ","2 * 4 bytes","."," ","Some of the buffer functions also create a new buffer (like ","buffer_load"," for example). Remember that these buffers will also need to be removed from memory when not in use using the ","buffer_delete"," function."," ","The memory used for creating buffers is ","system memory"," so even when the game doesn't have focus, any data stored in a buffer should be safe, however if the app is closed or re-started then it will be lost."," ","The following pages explain how buffers work within the context of ","GameMaker"," and contain a couple of code examples for those users that are unsure of how to use them:"," ","Using Buffers"," ","IMPORTANT"," When you create a buffer, the index value used to identify it is an integer value starting at 0. These indices are re-used by ","GameMaker",", so a destroyed buffer index value may be used by a newly created one afterwards, and we recommend that you set any variable that holds a buffer index to -1 after having destroyed the buffer."," ","The following functions exist for you to use with binary buffers in your games:"," ","buffer_exists"," ","buffer_create"," ","buffer_create_from_vertex_buffer"," ","buffer_create_from_vertex_buffer_ext"," ","buffer_delete"," ","buffer_read"," ","buffer_write"," ","buffer_fill"," ","buffer_seek"," ","buffer_tell"," ","buffer_peek"," ","buffer_poke"," ","buffer_save"," ","buffer_save_ext"," ","buffer_save_async"," ","buffer_load"," ","buffer_load_ext"," ","buffer_load_async"," ","buffer_load_partial"," ","buffer_compress"," ","buffer_decompress"," ","buffer_async_group_begin"," ","buffer_async_group_option"," ","buffer_async_group_end"," ","buffer_copy"," ","buffer_copy_from_vertex_buffer"," ","buffer_get_type"," ","buffer_get_alignment"," ","buffer_get_address"," ","buffer_get_size"," ","buffer_get_surface"," ","buffer_set_surface"," ","buffer_resize"," ","buffer_sizeof"," ","buffer_md5"," ","buffer_sha1"," ","buffer_crc32"," ","buffer_base64_encode"," ","buffer_base64_decode"," ","buffer_base64_decode_ext"," ","buffer_set_used_size"," ","There are also two extra functions related to buffers that can be used to save and load game states (note that they require a buffer to have been created previously):"," ","game_load_buffer"," ","game_save_buffer"," ","Finally, you can also use special ","Vertex Buffers"," to create your own custom primitives or models, etc... You can find out more about these from the following section of the manual:"," ","Primitive Building"," ","Back: ","GML Reference"," ","Next: ","OS And Compiler"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2540"})