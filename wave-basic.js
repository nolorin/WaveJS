// System object for WaveJS
var wave = function( waveMerge ) {
	waveInit = {};
	waveInit.module : function() {
		init = {
			lib : {}
		}

		return init;
	};
	waveInit.event = function() {
		init = {
			open : {},
			dormant : {},
			template : {},
			actions : {},
			watch : {},			
		};
		init.set = function( name, action, activate ) {

		};
		init.add = function( name, action, activate ) {

		};
		init.remove = function( name ) {

		};
		init.activate = function( name ) {

		};
		init.deactivate = function( name ) {

		};
		return init;
	};
	waveInit.security = function() {
		init = {
			data : {},
			keys : {},			
		};
		init.nonce = function( name, nonce ) {

		};
		init.encrypt = function( data, encMethod, iv ) {

		};
		init.decrypt = function( data, encMethod, iv ) {

		};
		init.store = function( name, data, encMethod, iv ) {

		};
		init.retrieve = function( name, data, encMethod, iv ) {

		};
		return init;
	};
	waveInit.system : {
		addModule = function( name, mod, settings ) {

		},
		removeModule = function( name ) {

		}
	};
	return waveInit;
};
