rh._.exports({"0":[[" ","physics_set_friction"]],"1":[["physics_set_friction"]],"2":[[" ","physics_set_friction"]],"3":[[" ","When you bind a fixture to an instance using ","physics_set_friction"," this returns an \"id\" for the bound fixture. You can use this id to set the friction value of the bound fixture, ","not"," the \"base\" fixture, at any time using this function. Note that the friction is usually set to a value between 0 and 1, but you can use any non-negative value if required."," ","NOTE"," To make the physics engine use the new value in all cases, you'll need to deactivate and reactivate the physics instance using ","phy_active",". See ","Updating Existing Contacts","."],[" ","physics_set_friction(fixture, friction)"," ","Argument"," ","Type"," ","Description"," ","fixture"," ","Physics Fixture ID"," ","the id of the bound fixture"," ","friction"," ","Real"," ","the new friction value to apply"],[" ","N/A"],[" ","var fric = physics_get_friction(fix_id);","\n    physics_set_friction(fix_id, fric + 0.1);"," ","The code above gets the current friction value for the bound physics properties of the instance and then sets them to a different value."," ","Back: ","Fixtures"," ","Next: ","physics_set_density"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_set_friction"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1266"})