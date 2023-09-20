rh._.exports({"0":[[" ","network_connect_raw"]],"1":[["network_connect_raw"]],"2":[[" ","network_connect_raw"]],"3":[[" ","This function sends a request to connect to a server."," ","It takes the ","socket id"," to connect through (see ","network_create_socket",") and requires you to give the IP address to connect to (a string, can be IPv4 or IPv6) as well as the port to connect through. If the connection fails a value of less than 0 will be returned."," ","The difference between this function and ","network_connect"," is that this function can connect to any server and does nothing to the raw data, so you have to implement the protocols yourself at the server end."," ","Note that by default the function is synchronous, so your game may appear to \"hang\" as the connection is made. You can set a timeout value for connection, or alternatively make the creation asynchronous, using the function ","network_set_config",", or alternatively use the function ","network_connect_raw_async"," instead."," ","NOTE"," You cannot use this function on HTML5. For WebSockets, use the ","Async function","."," ","NOTE"," This function uses a TCP-like socket (i.e. ","network_socket_tcp","). It may work with other socket types as well, but this isn't guaranteed."],[" ","network_connect_raw(socket, url, port);"," ","Argument"," ","Type"," ","Description"," ","socket"," ","Network Socket ID"," ","The id of the socket to use."," ","url"," ","String"," ","The URL or IP to connect to (a string)."," ","port"," ","Real"," ","The port to connect to."],[" ","Real"," or ","Network Socket ID"],[" ","client = network_create_socket(network_socket_tcp);","\n    network_connect_raw(client, \"www.macsweeneygames.com\", 6510);"," ","The above code will create a new TCP socket then attempt to create a \"raw\" connection through that to the given URL on port 6510."," ","Back: ","Networking"," ","Next: ","network_connect_raw_async"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["network_connect_raw"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2194"})