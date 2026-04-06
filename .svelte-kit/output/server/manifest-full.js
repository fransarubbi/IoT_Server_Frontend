export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.Bay7PlRV.js",app:"_app/immutable/entry/app.XCtCAA-8.js",imports:["_app/immutable/entry/start.Bay7PlRV.js","_app/immutable/chunks/CMqlJn-_.js","_app/immutable/chunks/BaYS1Q-7.js","_app/immutable/chunks/D3gsBw3Q.js","_app/immutable/chunks/BjVJcEem.js","_app/immutable/entry/app.XCtCAA-8.js","_app/immutable/chunks/BaYS1Q-7.js","_app/immutable/chunks/Bd_NQpCK.js","_app/immutable/chunks/BUxwiXb0.js","_app/immutable/chunks/BjVJcEem.js","_app/immutable/chunks/D65f326i.js","_app/immutable/chunks/B9WGdIwm.js","_app/immutable/chunks/D3gsBw3Q.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
