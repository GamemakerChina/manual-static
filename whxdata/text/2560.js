rh._.exports({"0":[[" ","part_emitter_enable"]],"3":[[" ","part_emitter_enable"]],"4":[[" ","This function enables or disables the given particle emitter."],[" ","The particles created by a disabled emitter become invisible and aren't updated."," ","Timers related to the emitter delay (","part_emitter_delay",") or interval (","part_emitter_interval",") are paused."," ","A disabled emitter doesn't create new particles when it is in stream mode. It will also not create any particles after calls to ","part_emitter_burst","."," ","The function ","part_particles_burst"," doesn't create particles for any disabled emitters in the ","Particle System Asset","."],[" ","part_emitter_enable","(ps, ind, enable);"," ","Argument"," ","Type"," ","Description"," ","ps"," ","Particle System Instance"," ","The index of the particle system the emitter's in"," ","ind"," ","Particle Emitter ID"," ","The index of the emitter to change"," ","enable"," ","Boolean"," ","Whether to enable the emitter or not"],[" ","N/A"],[" ","Create Event"," ","ps = part_system_create();"," ","\n    pe1 = part_emitter_create(ps);","\n    part_emitter_region(ps, pe1, 100, 200, 100, 200, ps_shape_rectangle, ps_distr_gaussian);","\n    part_emitter_enable(ps, pe1, false);","\n    pe2 = part_emitter_create(ps);","\n    part_emitter_region(ps, pe2, 200, 300, 100, 200, ps_shape_rectangle, ps_distr_gaussian);"," ","\n    pt = part_type_create();","\n    part_type_speed(pt, 2, 2, 0, 0);","\n    part_type_direction(pt, 90, 90, 0, .2);"," ","\n    part_emitter_stream(ps, pe1, pt, 2);","\n    part_emitter_stream(ps, pe2, pt, 2);\n  "," ","Cleanup Event"," ","part_emitter_destroy(ps, pe1);","\n      part_emitter_destroy(ps, pe2);","\n          part_system_destroy(ps);","\n              part_type_destroy(pt);"," ","The above code creates a particle system ","ps"," in the Create event and adds two emitters to it: ","pe1"," and ","pe2",". The emitters are each configured to emit particles in a rectangular region of 100x100 pixels, using a gaussian distribution (i.e. more particles in the center). Emitter ","pe1"," is set to disabled using ","part_emitter_enable"," ","The two emitters are then \"turned on\" using ","part_emitter_stream",": each of them is configured to create two particles per step. Since ","pe1"," was set to disabled, it will not emit any particles. ","pe2"," is enabled and emits particles normally."," ","Finally, since they're dynamic resources, the particle emitters, the system and the type are all destroyed in the Cleanup event."," ","Back: ","Particle Emitters"," ","Next: ","part_emitter_delay"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"7":[[" ","Usage Notes"]],"id":"2560"})