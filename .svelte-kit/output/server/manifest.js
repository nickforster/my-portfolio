export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["arg/abflug.jpg","arg/buenos-aires-nacht.jpeg","arg/gastfamilie.jpg","earth-night-texture.jpg","earth-texture.jpg","favicon.png","icons/angular.svg","icons/bash.svg","icons/css.svg","icons/figma.svg","icons/github.svg","icons/go.svg","icons/html.svg","icons/java.svg","icons/javascript.svg","icons/jetbrains.svg","icons/mysql.svg","icons/nodejs.svg","icons/notion.svg","icons/php.svg","icons/postman.svg","icons/svelte.svg","icons/typescript.svg","icons/vscode.svg","images/cursor-polygon.svg","images/europe.svg","images/github.svg","images/logo.png","images/logo.svg","images/polygon.svg","images/svelte-logo.svg","images/svelte-welcome.png","images/svelte-welcome.webp","images/svg-2.svg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.2786c44a.js","app":"_app/immutable/entry/app.c3070370.js","imports":["_app/immutable/entry/start.2786c44a.js","_app/immutable/chunks/index.8f9a2a83.js","_app/immutable/chunks/singletons.efc329a6.js","_app/immutable/entry/app.c3070370.js","_app/immutable/chunks/index.8f9a2a83.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/tech",
				pattern: /^\/tech\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
