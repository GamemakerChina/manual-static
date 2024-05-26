rh._.exports({"0":[[" ","network_send_raw"]],"1":[["network_send_raw,network_send_binary,network_send_text"]],"2":[["network_send_raw,text WebSockets,network_send_binary,network_send_text"]],"3":[[" ","network_send_raw"]],"4":[[" ","This function sends a \"raw\" data packet through the network."," ","The function takes the ","Network Socket ID"," to connect through and then you must supply the ","Buffer"," which contains the data to be sent (for more information on buffers see ","Reference - Buffers",") and finally the size (in bytes) of the data packet."," ","The data sent is not formatted by ","GameMaker"," in any way and the receiving devices will get the data as a stream which means you will have to handle it yourself. See: ","Packet Separation"," ","The function will return the number of bytes of data sent, or a number less than 0 if the send has failed."," ","WARNING"," ","You must not mix the use of regular and raw functions in your game, as doing so will cause issues. This means for a connection made with ","network_connect",", you must use ","network_send_packet",", and for ","network_connect_raw",", use ","network_send_raw","."," ","NOTE"," This function uses a TCP-like socket (i.e. ","network_socket_tcp","). It may work with other socket types as well, but this isn't guaranteed."],[" ","The last argument is optional, and is only used with WebSockets. It allows you to choose between sending binary or text data. Either of these constants can be specified in this argument:"," ","Network Send Type Constant"," ","Constant"," ","Description"," ","network_send_binary"," ","Send a binary message"," ","network_send_text"," ","Send a text message"," ","The APIs for some platforms only accept text messages when using WebSockets (e.g. Twitch), so the ","network_send_text"," constant can be used in such cases. If this argument is not specified, binary data is sent by default."],[" ","network_send_raw","(socket, bufferid, size, [options]);"," ","Argument"," ","Type"," ","Description"," ","socket"," ","Network Socket ID"," ","The id of the socket to use."," ","bufferid"," ","Buffer"," ","The buffer to get the data from."," ","size"," ","Real"," ","The size (in bytes) of the data."," ","options"," ","Network Send Type Constant"," ","OPTIONAL"," Used for WebSockets to choose between text and binary data; if not specified, binary data is sent."],[" ","Real"],[" ","buff = buffer_load(\"player_save.dat\");","\n    network_send_raw(sock, buff, buffer_get_size(buff));"," ","The above information loads previously saved data into a buffer in memory and stores the buffer in the variable ","buff",". This complete buffer is then send as a raw data packet over the network using the socket identified by the variable ","sock","."," ","Back: ","Networking"," ","Next: ","network_send_udp"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"8":[[" ","Options Argument"]],"id":"2498"})