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
		client: {start:"_app/immutable/entry/start.BPr9cHCy.js",app:"_app/immutable/entry/app.rSyvWLzy.js",imports:["_app/immutable/entry/start.BPr9cHCy.js","_app/immutable/chunks/B9IiNUDu.js","_app/immutable/chunks/BgrHX3Wc.js","_app/immutable/chunks/gbR4OEiL.js","_app/immutable/chunks/B3JQEAAX.js","_app/immutable/entry/app.rSyvWLzy.js","_app/immutable/chunks/BgrHX3Wc.js","_app/immutable/chunks/CC7nf23R.js","_app/immutable/chunks/fK-2FC3I.js","_app/immutable/chunks/B3JQEAAX.js","_app/immutable/chunks/WGLkpA89.js","_app/immutable/chunks/DrS18PpH.js","_app/immutable/chunks/gbR4OEiL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
