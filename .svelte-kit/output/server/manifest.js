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
		client: {start:"_app/immutable/entry/start.9zxGZX5D.js",app:"_app/immutable/entry/app.DyuOk4rd.js",imports:["_app/immutable/entry/start.9zxGZX5D.js","_app/immutable/chunks/cT5QtBsT.js","_app/immutable/chunks/BdH9Np77.js","_app/immutable/chunks/D5woMDdv.js","_app/immutable/entry/app.DyuOk4rd.js","_app/immutable/chunks/BdH9Np77.js","_app/immutable/chunks/J1tPaT8w.js","_app/immutable/chunks/DQApGVqq.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D5woMDdv.js","_app/immutable/chunks/GSvHu1uO.js","_app/immutable/chunks/By6ru98u.js","_app/immutable/chunks/Av8rYVqQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/certificates",
				pattern: /^\/certificates\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/edge",
				pattern: /^\/edge\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/edge/[edgeId]/networks",
				pattern: /^\/edge\/([^/]+?)\/networks\/?$/,
				params: [{"name":"edgeId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/edge/[edgeId]/networks/[networkId]/hubs",
				pattern: /^\/edge\/([^/]+?)\/networks\/([^/]+?)\/hubs\/?$/,
				params: [{"name":"edgeId","optional":false,"rest":false,"chained":false},{"name":"networkId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/firmware",
				pattern: /^\/firmware\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/help",
				pattern: /^\/help\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/notifications",
				pattern: /^\/notifications\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
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
