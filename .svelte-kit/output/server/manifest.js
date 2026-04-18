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
		client: {start:"_app/immutable/entry/start.DCyY_7lP.js",app:"_app/immutable/entry/app.BQ7a9TF4.js",imports:["_app/immutable/entry/start.DCyY_7lP.js","_app/immutable/chunks/DN9tqEBP.js","_app/immutable/chunks/B8ZP7Ac7.js","_app/immutable/chunks/DpUx3CMf.js","_app/immutable/entry/app.BQ7a9TF4.js","_app/immutable/chunks/B8ZP7Ac7.js","_app/immutable/chunks/BnTGt_Ps.js","_app/immutable/chunks/Dv2ePUNP.js","_app/immutable/chunks/DpUx3CMf.js","_app/immutable/chunks/BUxyAlc4.js","_app/immutable/chunks/CbxfY4u5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
