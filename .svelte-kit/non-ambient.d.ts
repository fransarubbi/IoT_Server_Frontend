
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/(auth)" | "/(app)" | "/" | "/(app)/certificates" | "/(app)/edge" | "/(app)/edge/[edgeId]" | "/(app)/edge/[edgeId]/networks" | "/(app)/edge/[edgeId]/networks/[networkId]" | "/(app)/edge/[edgeId]/networks/[networkId]/hubs" | "/(app)/firmware" | "/(auth)/login" | "/(app)/notifications";
		RouteParams(): {
			"/(app)/edge/[edgeId]": { edgeId: string };
			"/(app)/edge/[edgeId]/networks": { edgeId: string };
			"/(app)/edge/[edgeId]/networks/[networkId]": { edgeId: string; networkId: string };
			"/(app)/edge/[edgeId]/networks/[networkId]/hubs": { edgeId: string; networkId: string }
		};
		LayoutParams(): {
			"/(auth)": Record<string, never>;
			"/(app)": { edgeId?: string; networkId?: string };
			"/": { edgeId?: string; networkId?: string };
			"/(app)/certificates": Record<string, never>;
			"/(app)/edge": { edgeId?: string; networkId?: string };
			"/(app)/edge/[edgeId]": { edgeId: string; networkId?: string };
			"/(app)/edge/[edgeId]/networks": { edgeId: string; networkId?: string };
			"/(app)/edge/[edgeId]/networks/[networkId]": { edgeId: string; networkId: string };
			"/(app)/edge/[edgeId]/networks/[networkId]/hubs": { edgeId: string; networkId: string };
			"/(app)/firmware": Record<string, never>;
			"/(auth)/login": Record<string, never>;
			"/(app)/notifications": Record<string, never>
		};
		Pathname(): "/" | "/certificates" | "/edge" | `/edge/${string}/networks` & {} | `/edge/${string}/networks/${string}/hubs` & {} | "/firmware" | "/login" | "/notifications";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}