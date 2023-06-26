rh._.exports({"0":[[" ","sequence_keyframedata_new"]],"1":[["sequence_keyframedata_new,seqtracktype_graphic,seqtracktype_audio,seqtracktype_instance,seqtracktype_sequence,seqtracktype_clipmask,seqtracktype_clipmask_mask,seqtracktype_clipmask_subject,seqtracktype_group,seqtracktype_colour,seqtracktype_real,seqtracktype_message,seqtracktype_moment,seqtracktype_bool,seqtracktype_string,seqtracktype_spriteframes,seqtracktype_empty"]],"2":[[" ","sequence_keyframedata_new"]],"3":[[" ","With this function you can create a new keyframe data ","struct",", supplying the type of track that the keyframe data will be applied to. The ","type"," argument can be any one of the ","Sequence Track Type Constant","s ","listed on this page","."," ","The function will return a track ","keyframe data struct"," which can then have values added to it before being assigned to a ","keyframe struct","."],[" ","sequence_keyframedata_new(type);"," ","Argument"," ","Type"," ","Description"," ","type"," ","Sequence Track Type Constant"," ","The type of keyframe data to create."],[" ","Sequence Keyframe Data Struct"],[" ","myseq = sequence_create();","\n    var mytracks = array_create(1);","\n    mytracks[0] = sequence_track_new(seqtracktype_graphic);","\n    var graphickeys = array_create(1);","\n    graphickeys[0] = sequence_keyframe_new(seqtracktype_graphic);","\n    graphickeys[0].frame = 0;","\n    graphickeys[0].length = 1;","\n    graphickeys[0].stretch = true;","\n    graphickeys[0].disabled = false;","\n    var graphickeydata = array_create(1);","\n    graphickeydata[0] = sequence_keyframedata_new(seqtracktype_graphic);","\n    graphickeydata[0].spriteIndex = spr_Platform;","\n    graphickeydata[0].channel = 0;","\n    graphickeys[0].channels = graphickeydata;","\n    mytracks[0].name = \"TestGraphicTrack\";","\n    mytracks[0].keyframes = graphickeys;","\n    myseq.tracks = mytracks;"," ","The above code creates a new sequence and then creates a graphic asset track and sets some keyframe data on the track. This track is then assigned to the instance."," ","Back: ","Sequences"," ","Next: ","sequence_get_objects"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["sequence_keyframedata_new"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2088"})