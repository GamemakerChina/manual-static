rh._.exports({"0":[[" ","network_set_config"]],"1":[["network_set_config,network_config_connect_timeout,network_config_use_non_blocking_socket,network_config_enable_reliable_udp,network_config_disable_reliable_udp,network_config_avoid_time_wait,network_config_enable_multicast,network_config_disable_multicast "]],"2":[["network_set_config,network_config_connect_timeout,network_config_use_non_blocking_socket,network_config_enable_reliable_udp,network_config_disable_reliable_udp,network_config_avoid_time_wait,network_config_enable_multicast,network_config_disable_multicast "]],"3":[[" ","network_set_config"]],"4":[[" ","With this function you can set different network configurations."," ","NOTE"," This function will not work when used in a project running on the HTML5 target."," ","These configurations are given as ","constants"," and the setting will depend on the constant that you have chosen. The table below lists the available constants and their settings:"," ","Network Config Constant"," ","Constant"," ","Description"," ","Setting"," ","network_config_connect_timeout"," ","Set a connection timeout value"," ","A value in milliseconds"," ","network_config_use_non_blocking_socket"," ","Tell ","GameMaker"," not to block on connect."," ","0 = block, 1 = don't block"," ","network_config_enable_reliable_udp"," ","Enables the \"reliable UDP\" protocol for an existing UDP socket"," ","The socket ID to target"," ","network_config_disable_reliable_udp"," ","Disables the \"reliable UDP\" protocol for an existing UDP socked."," ","The socket ID to target"," ","network_config_avoid_time_wait"," ","Sets the ","SO_LINGER"," timeout value to 0 for an exisiting TCP socket"," ","The socket ID to target"," ","network_config_enable_multicast"," ","Enables multicast support for UDP"," ","The socket ID to target"," ","network_config_disable_multicast"," ","Disables multicast support for UDP"," ","The socket ID to target"],[" ","The first option (","network_config_connect_timeout",") simply sets the timeout for connecting to a server but doesn't change connection behaviour apart from the time you have to wait. It is recommended that you don't set this too low and keep it at about 1000 for a LAN only game or 4000 or so for internet, or the game may fail to connect randomly. If you wish to set a timeout value for sending/receiving packets then use the function ","network_set_timeout()","."],[" ","The second option (","network_config_use_non_blocking_socket",") means that the ","network_connect_*"," functions (non-async) will all return a ","socket_id"," instantly, ","but you can't send or receive on that socket until you've received an async network event",". The event triggered will have the \"type\" key set to ","network_type_non_blocking_connect"," (you can find further details from the page on the ","Networking Asynchronous Event","). This is a ","global"," setting as ","GameMaker"," does not support a mixture of blocking and non-blocking in one application."],[" ","The third and fourth options (","network_config_enable_reliable_udp",", ","network_config_disable_reliable_udp",") are for enabling or disabling the ","GameMaker"," reliable UDP protocol and as such, should ","only be used with UDP connections",". What \"reliable\" in this case this means is that, when enabled on ","both"," ends of a connection, ","GameMaker"," will attempt to check your packets have arrived correctly and re-send any that don't arrive (note, we do not guarantee in your packets will arrive in order of transmission). When using a reliable socket type, there will be a 12-byte header added to all udp packets which contains information needed by ","GameMaker"," to check the packet for errors and re-send missing packets. The following points are worth noting when using this option:"," ","The protocol should be enabled/disabled on both sides before sending your data, and any data sent or received before the option has been enabled/disabled will not be affected."," ","You can enable or disable the protocol for any given socket ID multiple times, as long as this is properly managed on both the server side and client side"," ","It is possible to have two separate UDP sockets, one with reliable UDP enabled for one with reliable UDP disabled for the other."],[" ","The option ","network_config_avoid_time_wait"," is for ","TCP connections only"," and can be used to set the ","SO_LINGER"," value to ","0"," to avoid large numbers of connections sitting in the ","TIME_WAIT"," state, tying up all the available resources on a server. This change is permanent while the socket is alive and cannot be undone."],[" ","The options ","network_config_enable_multicast"," and ","network_config_disable_multicast"," can be used to enable/disable multicast support on UDP. "," ","When multicast is enabled on a UDP socket, it will be joined to the all-hosts (FF02::1) multicast group on each network interface in the system, and calls to ","network_send_broadcast"," will transmit multicast packets on those groups in addition to IPv4 broadcasts."," ","In general, games doing LAN discovery using ","network_send_broadcast"," will want to turn this on, however the game must be written to handle receiving the same packet multiple times from multiple IPs -- i.e. the host's IPv4 and IPv6 address(es) and disambiguate these from other hosts (e.g. by embedding a unique value in the packet for each sender)."],[" ","network_set_config(config_value, setting);"," ","Argument"," ","Type"," ","Description"," ","config_value"," ","Network Config Constant"," ","The config constant to set (refer to the table at the top of this page)."," ","setting"," ","Any"," ","The setting value of the config."],[" ","String"],[" ","network_set_config(network_config_connect_timeout, 1000);","\n    network_set_config(network_config_use_non_blocking_socket, 1);"," ","The above code will set the timeout for the network connection to 1000ms and tell ","GameMaker"," not to block on connect."," ","Back: ","Networking"," ","Next: ","network_set_timeout"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"7":[[" ","Timeout"],[" ","Non Blocking Sockets"],[" ","Reliable UDP"],[" ","TCP Timeout"],[" ","Multicast"]],"id":"2712"})