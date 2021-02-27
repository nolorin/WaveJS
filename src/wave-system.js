// System object for WaveJS
export const WAVE_SYSTEM = {
	event : {
		open : {},
		dormant : {},
		template : {},
		actions : {},
		watch : {},
		set : function( name, action, activate ) {

		},
		add : function( name, action, activate ) {

		},
		remove : function( name ) {

		},
		activate : function( name ) {

		};
		deactivate : function( name ) {

		},
	},
	security : {
		data : {},
		keys : {},
		nonce : function( name, nonce ) {

		},
		encrypt : function( data, encMethod, iv ) {

		},
		decrypt : function( data, encMethod, iv ) {

		},
		store : function( name, data, encMethod, iv ) {

		},
		retrieve : function( name, data, encMethod, iv ) {

		},
	},
	module : {
		lib : {},
		add : function( name, mod, settings ) {

		},
		remove : function( name ) {

		}
	}
};

export const WAVE_SYSTEM_SETTINGS = {};
