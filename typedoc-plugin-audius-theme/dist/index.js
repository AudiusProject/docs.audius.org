'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var typedoc = require('typedoc');

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
const track = await audiusSdk.resolve<Track>({
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

function load(app) {
    const onRenderBegin = (event) => {
        // For each of the classes
        const classes = event.project.getReflectionsByKind(typedoc.ReflectionKind.Class);
        classes.forEach((r) => {
            var _a, _b;
            // Remove the Hierarchy display
            delete r.typeHierarchy;
            // Update the name
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
            (_b = r.children) === null || _b === void 0 ? void 0 : _b.forEach((c) => {
                var _a, _b, _c, _d, _e, _f;
                delete r.parent;
                if (c.kind === typedoc.ReflectionKind.Method) {
                    // Find the corresponding example in the `examples` directory
                    const example = (_a = examples[r.name.toLowerCase()]) === null || _a === void 0 ? void 0 : _a[c.name];
                    // Add the example to the comment
                    if (((_b = c.signatures) === null || _b === void 0 ? void 0 : _b[0].comment) && example) {
                        c.signatures[0].comment.text = `Example:\n\n\`\`\`typescript\n${example}\n\`\`\``;
                    }
                    // Fix escaping of single quotes in short text description
                    if ((_d = (_c = c.signatures) === null || _c === void 0 ? void 0 : _c[0].comment) === null || _d === void 0 ? void 0 : _d.shortText) {
                        c.signatures[0].comment.shortText =
                            (_f = (_e = c.signatures) === null || _e === void 0 ? void 0 : _e[0].comment) === null || _f === void 0 ? void 0 : _f.shortText.replace("\\'", "'");
                    }
                }
            });
        });
    };
    const onConverterEnd = (context) => {
        const reflections = context.project.getReflectionsByKind(typedoc.ReflectionKind.All);
        reflections.forEach((r) => {
            // Remove full namespace entirely
            if (r.getFullName().startsWith('full.')) {
                context.project.removeReflection(r);
            }
        });
    };
    app.renderer.on(typedoc.RendererEvent.BEGIN, onRenderBegin);
    app.converter.on(typedoc.Converter.EVENT_END, onConverterEnd);
}

exports.load = load;
//# sourceMappingURL=index.js.map
