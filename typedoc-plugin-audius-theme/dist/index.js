'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var typedoc = require('typedoc');

const layout = (context, page) => {
    var _a;
    const model = page.model;
    const project = page.project;
    const title = model.name === project.name
        ? project.name
        : `${model.name} | ${project.name}`;
    (_a = context.relativeURL("assets/oxide/logo.svg")) !== null && _a !== void 0 ? _a : "";
    return (typedoc.JSX.createElement("html", { class: "default" },
        typedoc.JSX.createElement("head", null,
            typedoc.JSX.createElement("meta", { charSet: "utf-8" }),
            context.hook("head.begin"),
            typedoc.JSX.createElement("meta", { "http-equiv": "x-ua-compatible", content: "IE=edge" }),
            typedoc.JSX.createElement("title", null, title),
            typedoc.JSX.createElement("meta", { name: "description", content: "Documentation for " + project.name }),
            typedoc.JSX.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" })),
        typedoc.JSX.createElement("body", null,
            typedoc.JSX.createElement("main", null,
                "HELLO",
                typedoc.JSX.createElement("section", { id: "main-content", class: "content" },
                    context.hook("content.begin"),
                    page.template(page),
                    context.hook("content.end")),
                typedoc.JSX.createElement("section", { id: "search", class: "content hidden" })),
            context.analytics(),
            context.hook("body.end"))));
};

function bindContext(template, context) {
    return (model) => template(context, model);
}

const getPlaylist = `
const playlist = await audiusSdk.playlists.getPlaylist({
    playlistId: "AxRP0",
});
`;
const getPlaylistTracks = `
const tracks = await audiusSdk.playlists.getPlaylistTracks({
    playlistId: "AxRP0",
});
`;
const getTrendingPlaylists = `
const playlists = await audiusSdk.playlists.getTrendingPlaylists();
`;
const searchPlaylists = `
const playlists = await audiusSdk.playlists.searchPlaylists({
    query: 'lo-fi',
});
`;

var playlists = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getPlaylist: getPlaylist,
    getPlaylistTracks: getPlaylistTracks,
    getTrendingPlaylists: getTrendingPlaylists,
    searchPlaylists: searchPlaylists
});

const resolve = `
const track = await audiusSdk.resolve.resolve<Track>({
  url: "https://audius.co/camouflybeats/hypermantra-86216",
});
`;

var resolve$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    resolve: resolve
});

const getBulkTracks = `
const tracks = await audiusSdk.tracks.getBulkTracks();
`;
const getTrack = `
const track = await audiusSdk.tracks.getTrack({
    trackId: "D7KyD",
});
`;
const getTrendingTracks = `
const tracks = await audiusSdk.tracks.getTrendingTracks();
`;
const searchTracks = `
const searchResult = await audiusSdk.tracks.searchTracks({
    query: "skrillex",
});
`;
const streamTrack = `
const url = await audiusSdk.tracks.streamTrack({
    trackId: "PjdWN",
});
const audio = new Audio(url);
audio.play();
`;

var tracks = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getBulkTracks: getBulkTracks,
    getTrack: getTrack,
    getTrendingTracks: getTrendingTracks,
    searchTracks: searchTracks,
    streamTrack: streamTrack
});

const getConnectedWallets = `
const wallets = await audiusSdk.users.getConnectedWallets({
    id: "eAZl3"
})
`;
const getFavorites = `
const favorites = await audiusSdk.users.getFavorites({
    id: "eAZl3"
})
`;
const getReposts = `
const reposts = await audiusSdk.users.getReposts({
    id: "eAZl3"
})
`;
const getSupporters = `
const supporters = await audiusSdk.users.getSupporters({
    id: "eAZl3"
})
`;
const getSupportings = `
const supportings = await audiusSdk.users.getSupportings({
    id: "eAZl3"
})
`;
const getTopTrackTags = `
const tags = await audiusSdk.users.getTopTrackTags({
    id: "eAZl3"
})
`;
const getTracksByUser = `
const tracks = await audiusSdk.users.getTracksByUser({
    id: "eAZl3"
})
`;
const getUser = `
const user = await audiusSdk.users.getUser({
    id: "eAZl3"
})
`;
const getUserIdFromWallet = `
const id = await audiusSdk.users.getUserIDFromWallet({
    associatedWallet: '0x10c16c7B8b1DDCFE65990ec822DE4379dd8a86dE'
})
`;
const searchUsers = `
const users = await audiusSdk.users.searchUsers({
    query: 'skrillex'
})
`;

var users = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getConnectedWallets: getConnectedWallets,
    getFavorites: getFavorites,
    getReposts: getReposts,
    getSupporters: getSupporters,
    getSupportings: getSupportings,
    getTopTrackTags: getTopTrackTags,
    getTracksByUser: getTracksByUser,
    getUser: getUser,
    getUserIdFromWallet: getUserIdFromWallet,
    searchUsers: searchUsers
});

var examples = /*#__PURE__*/Object.freeze({
    __proto__: null,
    playlists: playlists,
    resolve: resolve$1,
    tracks: tracks,
    users: users
});

class AudiusThemeRenderContext extends typedoc.DefaultThemeRenderContext {
    constructor(theme, options) {
        super(theme, options);
        // Layouts
        this.defaultLayout = bindContext(layout, this);
    }
}
class AudiusTheme extends typedoc.DefaultTheme {
    constructor(renderer) {
        super(renderer);
        this.context = new AudiusThemeRenderContext(this, this.application.options);
    }
    getRenderContext(_pageEvent) {
        return this.context;
    }
}
function load(app) {
    const onRenderBegin = (event) => {
        const reflections = event.project.getReflectionsByKind(typedoc.ReflectionKind.Class);
        // For each of the classes
        reflections.forEach((r) => {
            var _a, _b;
            // Remove the Hierarchy display
            delete r.typeHierarchy;
            // Map the names
            r.name = r.name.replace("Api", "");
            // Hide the Kind display
            r.kindString = "";
            // Delete everything but methods
            r.groups = (_a = r.groups) === null || _a === void 0 ? void 0 : _a.filter((g) => {
                const kindsToDelete = [
                    typedoc.ReflectionKind.Property,
                    typedoc.ReflectionKind.Constructor,
                ];
                const result = !kindsToDelete.includes(g.kind);
                return result;
            });
            //   TODO: Delete "inherited from" on TracksApi and ResolveApi
            (_b = r.children) === null || _b === void 0 ? void 0 : _b.forEach((c) => {
                var _a, _b;
                if (c.kind === typedoc.ReflectionKind.Method) {
                    // Find the corresponding example in the `examples` directory
                    const example = (_a = examples[r.name.toLowerCase()]) === null || _a === void 0 ? void 0 : _a[c.name];
                    // Add the example to the comment
                    if (((_b = c.signatures) === null || _b === void 0 ? void 0 : _b[0].comment) && example) {
                        c.signatures[0].comment.text = `Example:\n\n\`\`\`typescript\n${example}\n\`\`\``;
                    }
                }
            });
            // TODO: fix escaping of single quotes (user methods)
            // TODO: Expand parameters
        });
    };
    app.renderer.on(typedoc.RendererEvent.BEGIN, onRenderBegin);
}

exports.AudiusTheme = AudiusTheme;
exports.AudiusThemeRenderContext = AudiusThemeRenderContext;
exports.load = load;
//# sourceMappingURL=index.js.map
