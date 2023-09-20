rh._.exports({"0":[[" ","Gamepad Input"]],"1":[["Gamepad Input,gamepads,gp_face1,gp_face2,gp_face3,gp_face4,gp_shoulderl,gp_shoulderlb,gp_shoulderr,gp_shoulderrb,gp_select,gp_start,gp_stickl,gp_stickr,gp_padu,gp_padd,gp_padl,gp_padr,gp_axislh,gp_axislv,gp_axisrh,gp_axisrv,gp_axis_acceleration_x,gp_axis_acceleration_y,gp_axis_acceleration_z,gp_axis_angular_velocity_x,gp_axis_angular_velocity_y,gp_axis_angular_velocity_z,gp_axis_orientation_x,gp_axis_orientation_y,gp_axis_orientation_z,gp_axis_orientation_w"]],"2":[[" ","Gamepad Input"]],"3":[[" ","GameMaker"," has a number of dedicated functions that can be used to detect both analog and digital controls from multiple connected gamepads. These functions work similar to the ","Device Inputs",", in that you can detect up to four different XInput game pads that are connected (and up to 8 DirectInput gamepads) and deal with the input from each one using the same functions. Note that when a gamepad is plugged in to your device (or it is removed) then an asynchronous ","System Event"," is triggered where you can deal with the situation using the appropriate functions."," ","The gamepad \"slots\" are indexed from 0 upwards, and the actual slot that a gamepad assigned will depend on a variety of factors, not least of which is the OS that the project is running on. On the ","Windows"," target, slots 0 - 3 inclusive are ","only for Xinput gamepads",", ie: Xbox360 controllers and compatibles. However you can also check slots 4 - 11 inclusive for ","DirectInput"," gamepads, which means you can detect many other models of controller when connected through these slots. On other platforms, pads may be detected on ","any"," slot that the OS has assigned it, which could slot 3 or slot 20 or more. For example, ","Android"," devices will store bluetooth gamepads in a slot and then reserve that slot for that gamepad in the future, whether it is connected or not, so you ","cannot"," assume that a single connected gamepad is connected to slot 0, as this will probably not be the case."," ","It is worth noting that when using DirectInput gamepads on Windows, or generic gamepads on other platforms, the constants given below ","may not match exactly the buttons that you expect when they are pressed",", due to the fragmented and non-standardised way that the API is implemented by controller manufacturers. Because of this, it is recommend that you have some kind of gamepad setup screen in your games where people can redefine the gamepad buttons based on input from any connected device to mitigate any issues (there are gamepad \"mapping\" functions that can help with this on Windows Desktop, Ubuntu, macOS, and Android targets, while on all others you would need to do this yourself using code)."],[" ","When working with the gamepad functions, input can come from ","axes",", ","buttons"," or ","hats",", which ","GameMaker"," will assign to the following built-in constants (note that \"hats\" are generally only detected on non-standard controllers):"," ","Gamepad Button Constant"," ","Constant"," ","Description"," ","gp_face1"," ","Top button 1 (this maps to the ","\"A\""," on an Xbox 360 controller and the ","cross"," on a PS controller)"," ","gp_face2"," ","Top button 2 (this maps to the ","\"B\""," on an Xbox 360 controller and the ","circle"," on a PS controller)"," ","gp_face3"," ","Top button 3 (this maps to the ","\"X\""," on an Xbox 360 controller and the ","square"," on a PS controller)"," ","gp_face4"," ","Top button 4 (this maps to the ","\"Y\""," on an Xbox 360 controller and the ","triangle"," on a PS controller)"," ","gp_shoulderl"," ","Left shoulder button"," ","gp_shoulderlb"," ","Left shoulder trigger"," ","gp_shoulderr"," ","Right shoulder button"," ","gp_shoulderrb"," ","Right shoulder trigger"," ","gp_select"," ","The select button (on a DS4 controller, this triggers when you press the touchpad down)"," ","gp_start"," ","The start button (this is the \"options\" button on a PS4 controller)"," ","gp_stickl"," ","The left stick pressed (as a button)"," ","gp_stickr"," ","The right stick pressed (as a button)"," ","gp_padu"," ","D-pad up"," ","gp_padd"," ","D-pad down"," ","gp_padl"," ","D-pad left"," ","gp_padr"," ","D-pad right"," ","Gamepad Axis Constant"," ","Constant"," ","Description"," ","gp_axislh"," ","Left stick horizontal axis (analog)"," ","gp_axislv"," ","Left stick vertical axis (analog)"," ","gp_axisrh"," ","Right stick horizontal axis (analog)"," ","gp_axisrv"," ","Right stick vertical axis (analog)"," ","The constants below can only be used with the DualSense gamepad on a PS4 or PS5"," ","gp_axis_acceleration_x","*"," ","The gamepad's acceleration on the X axis"," ","gp_axis_acceleration_y","*"," ","The gamepad's acceleration on the Y axis"," ","gp_axis_acceleration_z","*"," ","The gamepad's acceleration on the Z axis"," ","gp_axis_angular_velocity_x","*"," ","The gamepad's angular velocity on the X axis"," ","gp_axis_angular_velocity_y","*"," ","The gamepad's angular velocity on the Y axis"," ","gp_axis_angular_velocity_z","*"," ","The gamepad's angular velocity on the Z axis"," ","gp_axis_orientation_x","*"," ","The gamepad's X orientation"," ","gp_axis_orientation_y","*"," ","The gamepad's Y orientation"," ","gp_axis_orientation_z","*"," ","The gamepad's Z orientation"," ","gp_axis_orientation_w","*"," ","The gamepad's W orientation"," ","NOTE"," The gamepad's ","orientation"," is a ","Quaternion",", which is why it has four values (X, Y, Z and W)."," ","\n    * These constants are only supported on PS4 and PS5, and when used on other platforms the input functions will return ","0",", even when using a DualSense gamepad.\n  "," ","To better understand exactly what part of the controller each constant represents, you can refer to the following image of a standard XInput gamepad:"],[" ","Below you can find a list of all the gamepad functions:"," ","gamepad_is_supported"," ","gamepad_is_connected"," ","gamepad_get_guid"," ","gamepad_get_device_count"," ","gamepad_get_description"," ","gamepad_get_button_threshold"," ","gamepad_get_axis_deadzone"," ","gamepad_get_option"," ","gamepad_set_button_threshold"," ","gamepad_set_axis_deadzone"," ","gamepad_set_vibration"," ","gamepad_set_colour"," ","gamepad_set_option"," ","gamepad_axis_count"," ","gamepad_axis_value"," ","gamepad_button_check"," ","gamepad_button_check_pressed"," ","gamepad_button_check_released"," ","gamepad_button_count"," ","gamepad_button_value"," ","gamepad_hat_count"," ","gamepad_hat_value"," ","The following gamepad functions also exist and are used for remapping the built in constants to the direct physical inputs of a given gamepad. These functions are only for the Windows Desktop, Ubuntu, macOS, and Android target platforms and on Windows, they will only be valid for Direct input devices. While ","GameMaker"," comes with mappings for a number of different gamepads based on ","SDL Gamepad Controller DB",", however due to the huge number of controller types and brands out there, it is impossible to map the GML constants to the correct inputs for every make and model, so with these functions you have the possibility to create your own custom mappings."," ","gamepad_get_mapping"," ","gamepad_test_mapping"," ","gamepad_remove_mapping"," ","It is worth noting that Direct Input gamepads are run in ","cooperative mode"," which means that your game only has access to them when it is the foreground application, which in turn will cause Direct Input controllers to be \"lost\" if the game loses focus and then \"found\" again when it comes back into focus (this can be detected in the System Event and dealt with). Similarly, no input from gamepads will be detected while the game is not in focus, and we recommend that you use the function ","os_is_paused()"," or ","window_has_focus()"," to detect this and pause the game or something similar as any button being held down at the time the game loses focus will maintain the held down state until the game regains focus."],[" ","The following list shows current compatibility across the platforms (note that this will change with future updates):"," ","Windows ","is fully supported with up to a maximum of 12 connected devices permitted at once (numbered from 0 to 11, with 0 - 3 being XInput devices and 4 - 11 being DirectInput). Remapping of controller constants is also permitted."," ","macOS ","is supported with up to a maximum of 4 connected devices permitted at once, and these devices can ONLY be of the type Playstation3 or Xbox 360. Please note that the \"Build for Mac AppStore\" option in Mac Game Options needs to be OFF for pad support to work. Remapping of controller constants is also permitted."," ","Ubuntu ","does also support Gamepad input, but you may need to install additional libraries from the Ubuntu repository. You can do this easily by opening a command line terminal and typing the following (this will install GUI support for the joystick/gamepad as well as the joystick/gamepad API itself - remapping of controller constants is ","not"," permitted):\n      ","sudo apt-get install jstest-gtk","\n        sudo apt-get install joystick."," ","HTML5 ","games using gamepads are supported by most major browsers, except ","Safari",". Remapping of controller constants is ","not"," permitted."," ","Web browsers will only detect gamepads when a button is pressed or an axis is moved, so they may not be available at the immediate start of the game. This applies to the ","GX.games"," and ","HTML ","target platforms."," ","Gamepad support also extends to ","iOS ","with the iCade cabinet. The left axis maps to the stick controller (although the input is digital, not analogue), the four \"face\" buttons map to the cabinet front buttons, and the four shoulder buttons map to those at the back of the cabinet."," ","Android ","(and ","Amazon Fire",") export supports NYKO controllers and generic Bluetooth controllers, but only when they are enabled, meaning that you will have to tick the iCade/Bluetooth option in the ","General"," section of the Android Game Options. They require API level 12 for them to work fully and it should be noted that ","GameMaker"," will register as connected any Bluetooth devices that your device is paired with, whether or not it's actually connected. Therefore this should be taken into account when assigning and checking \"slots\". Note that the remapping of controller constants is also permitted."," ","On ","PS4",", if you want to use the touch pad tracking you need to use the ","device_mouse_*"," buttons. Remapping of controller constants is ","not"," permitted."," ","On, ","Xbox One ","and ","Nintendo Switch"," targets, gamepads are fully supported, but remapping of controller constants is ","not"," permitted."," ","Ideally, on ","all"," target platforms, you want to enumerate a list of available gamepad \"slots\" and then check them to see if any devices are detected, something like this:"," ","var _maxpads = gamepad_get_device_count();"," ","\n    for (var i = 0; i < _maxpads; i++)","\n    {","\n        if (gamepad_is_connected(i))","\n        {","\n            // do stuff with pad \"i\"","\n        }","\n    }\n  "," ","Back: ","Game Input"," ","Next: ","Virtual Keys and Virtual Keyboards"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gp_face1,gp_face2,gp_face3,gp_face4,gp_shoulderl,gp_shoulderlb,gp_shoulderr,gp_shoulderrb,gp_select,gp_start,gp_stickl,gp_stickr,gp_padu,gp_padd,gp_padl,gp_padr,gp_axislh,gp_axislv,gp_axisrh,gp_axisrv,gp_axis_acceleration_x,gp_axis_acceleration_y,gp_axis_acceleration_z,gp_axis_angular_velocity_x,gp_axis_angular_velocity_y,gp_axis_angular_velocity_z,gp_axis_orientation_x,gp_axis_orientation_y,gp_axis_orientation_z,gp_axis_orientation_w"]],"7":[[" ","Input Constants"],[" ","Functions"],[" ","Compatibility"]],"id":"2756"})