rh._.exports({"0":[[" ","buffer_md5"]],"1":[["buffer_md5"]],"2":[[" ","buffer_md5"]],"3":[[" ","In cryptography, MD5 (Message-Digest algorithm 5) is a widely used cryptographic ","hashing"," function with a 128-bit hash value and has been employed in a wide variety of security applications.\n    It is also commonly used to check the integrity of data. This function will take the input data from a given buffer (or part of the buffer) and return the 32-character hexadecimal MD5 hash that is unique to that data. In this way you can generate\n    a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example). When applying this to buffers using this function you must specify the buffer id of the buffer to\n    use, then an offset value (in bytes) for where to begin, and then a size (again in bytes) for the region to be hashed."," ","NOTE",": MD5 is not completely secure and can be broken. See ","this page"," for more info."],[" ","buffer_md5(buffer, offset, size);"," ","Argument","Type"," ","Description"," ","buffer","Buffer ID"," ","The index of the buffer to use."," ","offset","Real"," ","The data offset value."," ","size","Real"," ","The size of the buffer."],[" ","String"],[" ","check_string = buffer_md5(buff, 0, buffer_get_size(buff));"," ","The above code will create an md5 hash for the full data stored in the buffer indexed by the variable \"buff\", and store the returned hash in the variable \"check_string\"."," ","Back: ","Buffers"," ","Next: ","buffer_sha1"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["buffer_md5"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1449"})