// Module for easily setting key-listening events
export const WAVE_TALK = {
	threads : {
		cmd : null,
		keySet : {},
		actions : {},
	},
	setCommandKey : function( cmdKey ) {
		this.cmdKey = cmdKey;
	},
	clearCommandKey : function() {
		this.cmdKey = null;
	}
	addToKeySet : function( key ) {

	},
	removeFromKeySet : function( key ) {

	},
	addThread : function( name, key, action ) {

	},
	removeThread : function( name ) {

	},
	runThread : function( name ) {

	},

	dialogue : {
		cache : {},
		interval : {},
		daemons : {},
	},
	addDaemon : function( name, daemon ) {

	},
	removeDaemon : function( name ) {

	},
	runDaemon : function( name ) {

	},
	purgeCache : function() {

	}
};

export const WAVE_TALK_SETTINGS = {

};
