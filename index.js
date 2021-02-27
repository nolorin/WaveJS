// System file imports
import { WAVE_SYSTEM, WAVE_SYSTEM_SETTINGS } from "src/wave-system.js";
import {
	WAVE_CONFIG_CHAR_SET,
} from "config.js";

// Important core modules
import { WAVE_TALK, WAVE_TALK_SETTINGS } from "src/wave-talk.js";
import { WAVE_SELECT, WAVE_SELECT_SETTINGS } from "src/wave-select.js";
import { WAVE_CONNECT, WAVE_CONNECT_SETTINGS } from "src/wave-connect.js";

// System object initializatoin
var wave = waveInit( waveSystem );

// Add Modules
wave.modules.add( "talk", WAVE_TALK, WAVE_TALK_SETTINGS );
wave.modules.add( "select", WAVE_SELECT, WAVE_SELECT_SETTINGS );
wave.modules.add( "connect", WAVE_CONNECT, WAVE_CONNECT_SETTINGS );
