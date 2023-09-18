globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "baseUrl": "https://glosense.in/api/v1"
  },
  "axios": {
    "proxy": true,
    "credentials": true
  },
  "proxy": {
    "/laravel": {
      "target": "https://laravel-auth.nuxtjs.app",
      "pathRewrite": {
        "^/laravel": "/"
      }
    }
  },
  "auth": {
    "strategies": {
      "laravelSanctum": {
        "provider": "laravel/sanctum",
        "url": "http://localhost:3000"
      }
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-06-10T17:06:57.000Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_redirects": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"17-XhAJEZACACf1E4TpyZvGieSw1AY\"",
    "mtime": "2023-08-23T12:39:35.316Z",
    "size": 23,
    "path": "../public/_redirects"
  },
  "/bkp-images/Asset 11@4x.png": {
    "type": "image/png",
    "etag": "\"1c67e-UfxZtFdQfeLpJ+iFyF+YcCVxvi4\"",
    "mtime": "2023-06-26T05:33:34.000Z",
    "size": 116350,
    "path": "../public/bkp-images/Asset 11@4x.png"
  },
  "/bkp-images/Asset 12@4x.png": {
    "type": "image/png",
    "etag": "\"6176-iUEhXQ53bGKY2tEMKV7YNjkuCAc\"",
    "mtime": "2023-06-26T05:33:34.000Z",
    "size": 24950,
    "path": "../public/bkp-images/Asset 12@4x.png"
  },
  "/bkp-images/Asset 13@4x.png": {
    "type": "image/png",
    "etag": "\"e1e9-KdcxyOjnPM7mby01PtzHC5FJLtA\"",
    "mtime": "2023-06-26T05:33:34.000Z",
    "size": 57833,
    "path": "../public/bkp-images/Asset 13@4x.png"
  },
  "/bkp-images/Asset 15@4x.png": {
    "type": "image/png",
    "etag": "\"59dc-T4f18IInu6d8oQGG1uCmENHyayM\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 23004,
    "path": "../public/bkp-images/Asset 15@4x.png"
  },
  "/bkp-images/Asset 16@4x.png": {
    "type": "image/png",
    "etag": "\"1c66d-8zlXCzs975/0nlnYocqfjFpg3do\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 116333,
    "path": "../public/bkp-images/Asset 16@4x.png"
  },
  "/bkp-images/Asset 17@4x.png": {
    "type": "image/png",
    "etag": "\"5d5e-TglQR+VglL1LzZhMHNE6bp34xYI\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 23902,
    "path": "../public/bkp-images/Asset 17@4x.png"
  },
  "/bkp-images/Asset 18@4x.png": {
    "type": "image/png",
    "etag": "\"659f-uSWdqCA2zSi5e7ksiTldLcdo7FM\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 26015,
    "path": "../public/bkp-images/Asset 18@4x.png"
  },
  "/bkp-images/Asset 19@4x.png": {
    "type": "image/png",
    "etag": "\"5839-wh5tfj3rDRh0T4Xuzg5wBuqZR8w\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 22585,
    "path": "../public/bkp-images/Asset 19@4x.png"
  },
  "/bkp-images/Asset 20@4x.png": {
    "type": "image/png",
    "etag": "\"63f1-BsCHuYGwN258kak3xAFFVdmjQ0g\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 25585,
    "path": "../public/bkp-images/Asset 20@4x.png"
  },
  "/bkp-images/Asset 21@4x.png": {
    "type": "image/png",
    "etag": "\"5ab4-CsUtK9llteD4cDRN01+JLPIiCmg\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 23220,
    "path": "../public/bkp-images/Asset 21@4x.png"
  },
  "/bkp-images/Asset 22@4x.png": {
    "type": "image/png",
    "etag": "\"6627-GnFR7T8WhHW9TBauOhhcTpu7XTA\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 26151,
    "path": "../public/bkp-images/Asset 22@4x.png"
  },
  "/bkp-images/Asset 23@4x.png": {
    "type": "image/png",
    "etag": "\"17e41-op/79/TPyF0NRn2QGvLVXdYSLLk\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 97857,
    "path": "../public/bkp-images/Asset 23@4x.png"
  },
  "/bkp-images/Asset 24@4x.png": {
    "type": "image/png",
    "etag": "\"499c-cJPRzY9+uvzW5PD4PgnUCvcwfB8\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 18844,
    "path": "../public/bkp-images/Asset 24@4x.png"
  },
  "/bkp-images/Asset 25@4x.png": {
    "type": "image/png",
    "etag": "\"596b-gCB0XAQfCfqWvBcUoCkho8F/QdQ\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 22891,
    "path": "../public/bkp-images/Asset 25@4x.png"
  },
  "/bkp-images/Asset 26@4x.png": {
    "type": "image/png",
    "etag": "\"dd04-IqewT5T7jaEp9nJuWR50A/DnYEE\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 56580,
    "path": "../public/bkp-images/Asset 26@4x.png"
  },
  "/bkp-images/Asset 27@4x.png": {
    "type": "image/png",
    "etag": "\"35ac-iJHMzEZMS55ZSgvELv+j1bK3Rqg\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 13740,
    "path": "../public/bkp-images/Asset 27@4x.png"
  },
  "/bkp-images/Asset 28@4x.png": {
    "type": "image/png",
    "etag": "\"d3c-PF79YdNhvLElWR8aCL3qTOvI67g\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 3388,
    "path": "../public/bkp-images/Asset 28@4x.png"
  },
  "/bkp-images/Asset 29@4x.png": {
    "type": "image/png",
    "etag": "\"830-eBQf2Mr1+U+DlRlwEWo+1RpI2YY\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 2096,
    "path": "../public/bkp-images/Asset 29@4x.png"
  },
  "/bkp-images/Asset 30@4x.png": {
    "type": "image/png",
    "etag": "\"92f-yoD+0v6eM5mexMZlRPcbnA8kYCU\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 2351,
    "path": "../public/bkp-images/Asset 30@4x.png"
  },
  "/bkp-images/Asset 31@4x.png": {
    "type": "image/png",
    "etag": "\"d80-QXPLWRb8c2ziNGq83oj0HGE5b4g\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 3456,
    "path": "../public/bkp-images/Asset 31@4x.png"
  },
  "/bkp-images/Asset 32@4x.png": {
    "type": "image/png",
    "etag": "\"e110-VZPPsJLdl5UQMexKYx89tHADRGI\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 57616,
    "path": "../public/bkp-images/Asset 32@4x.png"
  },
  "/bkp-images/Asset 33@4x.png": {
    "type": "image/png",
    "etag": "\"e090-YQmE6FJ888vHQzW7Bsykmd74258\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 57488,
    "path": "../public/bkp-images/Asset 33@4x.png"
  },
  "/bkp-images/Asset 34@4x.png": {
    "type": "image/png",
    "etag": "\"e038-VPLcmFxTh5aVaddejm37lhBEcWM\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 57400,
    "path": "../public/bkp-images/Asset 34@4x.png"
  },
  "/bkp-images/Asset 35@4x.png": {
    "type": "image/png",
    "etag": "\"7244-QvGMKs3auC1W9jA+ZdojMO+81Go\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 29252,
    "path": "../public/bkp-images/Asset 35@4x.png"
  },
  "/bkp-images/Asset 36@4x.png": {
    "type": "image/png",
    "etag": "\"2ef7-1O5+gPGVXROFOQv3nwNplb6LjjU\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 12023,
    "path": "../public/bkp-images/Asset 36@4x.png"
  },
  "/bkp-images/background.jpg": {
    "type": "image/jpeg",
    "etag": "\"67bc-zKNYh5c4v65WofLPtzQMWAXCN40\"",
    "mtime": "2023-06-19T06:30:17.111Z",
    "size": 26556,
    "path": "../public/bkp-images/background.jpg"
  },
  "/bkp-images/bg.png": {
    "type": "image/png",
    "etag": "\"6f45a-eMbUhdEnaIVeTYChUebs9LHUJ/s\"",
    "mtime": "2023-06-27T08:07:51.179Z",
    "size": 455770,
    "path": "../public/bkp-images/bg.png"
  },
  "/bkp-images/cloud-0.webp": {
    "type": "image/webp",
    "etag": "\"19858-2hoCQ7OnLrHyIS6o/JUD3wJR698\"",
    "mtime": "2023-06-05T08:26:22.000Z",
    "size": 104536,
    "path": "../public/bkp-images/cloud-0.webp"
  },
  "/bkp-images/cloud-1.webp": {
    "type": "image/webp",
    "etag": "\"19858-2hoCQ7OnLrHyIS6o/JUD3wJR698\"",
    "mtime": "2023-06-05T11:35:40.191Z",
    "size": 104536,
    "path": "../public/bkp-images/cloud-1.webp"
  },
  "/bkp-images/cloud-2.webp": {
    "type": "image/webp",
    "etag": "\"4590c-F+auPsnwkbPv/9ib9tOv101XX4A\"",
    "mtime": "2023-06-05T11:38:45.062Z",
    "size": 284940,
    "path": "../public/bkp-images/cloud-2.webp"
  },
  "/bkp-images/cloud-3.webp": {
    "type": "image/webp",
    "etag": "\"4590c-F+auPsnwkbPv/9ib9tOv101XX4A\"",
    "mtime": "2023-06-05T11:37:50.395Z",
    "size": 284940,
    "path": "../public/bkp-images/cloud-3.webp"
  },
  "/bkp-images/cloud-4.webp": {
    "type": "image/webp",
    "etag": "\"4590c-F+auPsnwkbPv/9ib9tOv101XX4A\"",
    "mtime": "2023-06-05T11:39:19.524Z",
    "size": 284940,
    "path": "../public/bkp-images/cloud-4.webp"
  },
  "/bkp-images/coaster.png": {
    "type": "image/png",
    "etag": "\"613d-vDkn/yKciTTi6f2L8202JZyDgI0\"",
    "mtime": "2023-06-19T06:43:42.103Z",
    "size": 24893,
    "path": "../public/bkp-images/coaster.png"
  },
  "/bkp-images/glob-bl.png": {
    "type": "image/png",
    "etag": "\"fa60-E71HvirOBLcQKU9RzKvvvmpjmok\"",
    "mtime": "2023-06-26T05:33:34.000Z",
    "size": 64096,
    "path": "../public/bkp-images/glob-bl.png"
  },
  "/bkp-images/glob-br.png": {
    "type": "image/png",
    "etag": "\"17d55-nKUkmlBiCPq7tTPdsdFoWOTkpwI\"",
    "mtime": "2023-06-26T05:33:34.000Z",
    "size": 97621,
    "path": "../public/bkp-images/glob-br.png"
  },
  "/bkp-images/glob-tl.png": {
    "type": "image/png",
    "etag": "\"7bfc-gSSa8dwZ4Yn/q8uqOYNNklUxrc0\"",
    "mtime": "2023-06-26T05:33:34.000Z",
    "size": 31740,
    "path": "../public/bkp-images/glob-tl.png"
  },
  "/bkp-images/green-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"943aa-dRiOsNArA+UJy5ioPJKTz9eanUo\"",
    "mtime": "2023-06-19T06:54:18.960Z",
    "size": 607146,
    "path": "../public/bkp-images/green-bg.jpg"
  },
  "/bkp-images/hero-image.png": {
    "type": "image/png",
    "etag": "\"24d5f-yADyNoJn3LQDLMhg58ozu+Iq7Po\"",
    "mtime": "2023-06-07T06:42:48.087Z",
    "size": 150879,
    "path": "../public/bkp-images/hero-image.png"
  },
  "/bkp-images/jar.png": {
    "type": "image/png",
    "etag": "\"47f1d-DZf6cpmv5GirzZwrmbazZwZSRgE\"",
    "mtime": "2023-06-07T08:08:14.745Z",
    "size": 294685,
    "path": "../public/bkp-images/jar.png"
  },
  "/bkp-images/landscape-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"a6277-/T+NFxv4WkMyRryQaRtO40oRfGw\"",
    "mtime": "2023-06-15T10:01:41.778Z",
    "size": 680567,
    "path": "../public/bkp-images/landscape-2.jpg"
  },
  "/bkp-images/landscape-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"13740f-p6NfVnlQkH2t6B721B4Fw2BOuDo\"",
    "mtime": "2023-06-15T12:06:28.748Z",
    "size": 1274895,
    "path": "../public/bkp-images/landscape-3.jpg"
  },
  "/bkp-images/landscape.webp": {
    "type": "image/webp",
    "etag": "\"771a-E7c1rFbDsTlzH3C3ow67mEnIjio\"",
    "mtime": "2023-06-05T08:26:22.000Z",
    "size": 30490,
    "path": "../public/bkp-images/landscape.webp"
  },
  "/bkp-images/leave-bl.png": {
    "type": "image/png",
    "etag": "\"23c02-C7MZzJ4VayVSQq2RAZr4+VYzrPc\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 146434,
    "path": "../public/bkp-images/leave-bl.png"
  },
  "/bkp-images/leaves.webp": {
    "type": "image/webp",
    "etag": "\"cb48-375gny80IsljWyUzg66l+EUiaRY\"",
    "mtime": "2023-06-05T11:19:48.648Z",
    "size": 52040,
    "path": "../public/bkp-images/leaves.webp"
  },
  "/bkp-images/logo.png": {
    "type": "image/png",
    "etag": "\"10f73-M5EHuryFoVTaJnFDAbN7fXq8KR4\"",
    "mtime": "2023-06-27T06:37:33.959Z",
    "size": 69491,
    "path": "../public/bkp-images/logo.png"
  },
  "/bkp-images/nature.gif": {
    "type": "image/gif",
    "etag": "\"164eaf-XBVFnSZA9yOsKb1VJSNL0aSOMAU\"",
    "mtime": "2023-06-19T07:03:35.963Z",
    "size": 1461935,
    "path": "../public/bkp-images/nature.gif"
  },
  "/bkp-images/pattern.png": {
    "type": "image/png",
    "etag": "\"b722-Vwdmc7t36enhUykMaW44qADHvKE\"",
    "mtime": "2023-06-19T07:38:30.667Z",
    "size": 46882,
    "path": "../public/bkp-images/pattern.png"
  },
  "/bkp-images/raiyan-slider.jpg": {
    "type": "image/jpeg",
    "etag": "\"49c34-DXewa9gryLs3Cq/yDoy5G4OOmqs\"",
    "mtime": "2023-08-23T11:04:02.514Z",
    "size": 302132,
    "path": "../public/bkp-images/raiyan-slider.jpg"
  },
  "/bkp-images/rl-small.png": {
    "type": "image/png",
    "etag": "\"8df-tYV6YEEigjVdmCTZH7TNuMWQf3g\"",
    "mtime": "2023-06-27T08:24:15.572Z",
    "size": 2271,
    "path": "../public/bkp-images/rl-small.png"
  },
  "/bkp-images/splash.png": {
    "type": "image/png",
    "etag": "\"510cb-TWm3UTb7maasdkJFJAgi5sfhZrc\"",
    "mtime": "2023-06-19T12:08:41.224Z",
    "size": 331979,
    "path": "../public/bkp-images/splash.png"
  },
  "/bkp-images/star-1.png": {
    "type": "image/png",
    "etag": "\"4409-1hg4brN5wAQeHZSKqMUXp9ICvmc\"",
    "mtime": "2023-06-27T06:38:30.000Z",
    "size": 17417,
    "path": "../public/bkp-images/star-1.png"
  },
  "/bkp-images/star-2.png": {
    "type": "image/png",
    "etag": "\"42ea-d9eWTb9x8td4Qusxtur/6CwTLB0\"",
    "mtime": "2023-06-27T06:38:30.000Z",
    "size": 17130,
    "path": "../public/bkp-images/star-2.png"
  },
  "/bkp-images/waves.gif": {
    "type": "image/gif",
    "etag": "\"171be-rwNkDEJDDqnJR/EOOA0R8cwFvD4\"",
    "mtime": "2023-06-19T07:02:19.629Z",
    "size": 94654,
    "path": "../public/bkp-images/waves.gif"
  },
  "/fonts/Quicksand-VariableFont_wght.ttf": {
    "type": "font/ttf",
    "etag": "\"1e524-ccGT94NfLXvM6NbUydYFaW12sUo\"",
    "mtime": "2022-09-22T05:27:10.000Z",
    "size": 124196,
    "path": "../public/fonts/Quicksand-VariableFont_wght.ttf"
  },
  "/images/about-us-banner.webp": {
    "type": "image/webp",
    "etag": "\"1fef6-XJXrp7ik25LcCLF7Q7VxUEK/6fQ\"",
    "mtime": "2023-09-15T08:48:01.280Z",
    "size": 130806,
    "path": "../public/images/about-us-banner.webp"
  },
  "/images/Asset-11-4x.png": {
    "type": "image/png",
    "etag": "\"c607-2PkCf1duNOU3wg1MGzL0N6AQkvg\"",
    "mtime": "2023-08-07T12:53:24.739Z",
    "size": 50695,
    "path": "../public/images/Asset-11-4x.png"
  },
  "/images/Asset-12-4x.png": {
    "type": "image/png",
    "etag": "\"6176-iUEhXQ53bGKY2tEMKV7YNjkuCAc\"",
    "mtime": "2023-06-26T05:33:34.000Z",
    "size": 24950,
    "path": "../public/images/Asset-12-4x.png"
  },
  "/images/Asset-13-4x.png": {
    "type": "image/png",
    "etag": "\"696e-u//ZMRQXnuwWnCWAvNlHy0JaPHE\"",
    "mtime": "2023-08-07T12:53:24.741Z",
    "size": 26990,
    "path": "../public/images/Asset-13-4x.png"
  },
  "/images/Asset-15-4x.png": {
    "type": "image/png",
    "etag": "\"2f94-fg73ZjBsWURnVz7U/HJB2RLlEw0\"",
    "mtime": "2023-08-07T12:53:24.743Z",
    "size": 12180,
    "path": "../public/images/Asset-15-4x.png"
  },
  "/images/Asset-16-4x.png": {
    "type": "image/png",
    "etag": "\"df97-66zlTf0djtLl4UMEm0kQyjRDZa8\"",
    "mtime": "2023-08-07T12:53:24.745Z",
    "size": 57239,
    "path": "../public/images/Asset-16-4x.png"
  },
  "/images/Asset-17-4x.png": {
    "type": "image/png",
    "etag": "\"5d5e-TglQR+VglL1LzZhMHNE6bp34xYI\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 23902,
    "path": "../public/images/Asset-17-4x.png"
  },
  "/images/Asset-18-4x.png": {
    "type": "image/png",
    "etag": "\"3632-QOT1IUjGrAKQVE2TrWZEeR3hABE\"",
    "mtime": "2023-08-07T12:53:24.746Z",
    "size": 13874,
    "path": "../public/images/Asset-18-4x.png"
  },
  "/images/Asset-19-4x.png": {
    "type": "image/png",
    "etag": "\"371e-0Og6ASIhNLF4ByizsErzk3eHyeo\"",
    "mtime": "2023-08-07T12:53:24.747Z",
    "size": 14110,
    "path": "../public/images/Asset-19-4x.png"
  },
  "/images/Asset-19-4x.svg": {
    "type": "image/svg+xml",
    "etag": "\"c69-Oj3ugauI/FDZ33AFm0EKWO2n4mw\"",
    "mtime": "2023-07-19T07:31:17.089Z",
    "size": 3177,
    "path": "../public/images/Asset-19-4x.svg"
  },
  "/images/Asset-1@4x.png": {
    "type": "image/png",
    "etag": "\"203ff-qd9cdfdNYlDjY29vkcvsxrLavsM\"",
    "mtime": "2023-09-15T08:48:01.264Z",
    "size": 132095,
    "path": "../public/images/Asset-1@4x.png"
  },
  "/images/Asset-20-4x.png": {
    "type": "image/png",
    "etag": "\"63f1-BsCHuYGwN258kak3xAFFVdmjQ0g\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 25585,
    "path": "../public/images/Asset-20-4x.png"
  },
  "/images/Asset-21-4x.png": {
    "type": "image/png",
    "etag": "\"341c-WTfrgw1yMyrekMqxVtnZ7w1Qyds\"",
    "mtime": "2023-08-07T12:53:24.748Z",
    "size": 13340,
    "path": "../public/images/Asset-21-4x.png"
  },
  "/images/Asset-22-4x.png": {
    "type": "image/png",
    "etag": "\"381a-OANrMm5calwdLN9G9mfBv/SbmbA\"",
    "mtime": "2023-08-07T12:53:24.749Z",
    "size": 14362,
    "path": "../public/images/Asset-22-4x.png"
  },
  "/images/Asset-23-4x.png": {
    "type": "image/png",
    "etag": "\"a4e4-1DO9tABltSlNu3ZoEDYmi9lAxPA\"",
    "mtime": "2023-08-07T12:53:24.751Z",
    "size": 42212,
    "path": "../public/images/Asset-23-4x.png"
  },
  "/images/Asset-24-4x.png": {
    "type": "image/png",
    "etag": "\"2707-CDoN6Kq24FiCmI3QzoOBxlnux0k\"",
    "mtime": "2023-08-07T12:53:24.752Z",
    "size": 9991,
    "path": "../public/images/Asset-24-4x.png"
  },
  "/images/Asset-25-4x.png": {
    "type": "image/png",
    "etag": "\"2fd0-3SQhJdMT8kKJPOgkLehLHx+3Ky4\"",
    "mtime": "2023-08-07T12:53:24.753Z",
    "size": 12240,
    "path": "../public/images/Asset-25-4x.png"
  },
  "/images/Asset-26-4x-01.svg": {
    "type": "image/svg+xml",
    "etag": "\"741-cZPEKzUXqzfKuo0srza2aSF6grA\"",
    "mtime": "2023-07-19T07:30:21.393Z",
    "size": 1857,
    "path": "../public/images/Asset-26-4x-01.svg"
  },
  "/images/Asset-26-4x.png": {
    "type": "image/png",
    "etag": "\"74f0-tyORCXp/6skH73hIPo6I6rJ5jFQ\"",
    "mtime": "2023-08-07T12:53:24.754Z",
    "size": 29936,
    "path": "../public/images/Asset-26-4x.png"
  },
  "/images/Asset-27-4x.png": {
    "type": "image/png",
    "etag": "\"35ac-iJHMzEZMS55ZSgvELv+j1bK3Rqg\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 13740,
    "path": "../public/images/Asset-27-4x.png"
  },
  "/images/Asset-28-4x.png": {
    "type": "image/png",
    "etag": "\"d3c-PF79YdNhvLElWR8aCL3qTOvI67g\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 3388,
    "path": "../public/images/Asset-28-4x.png"
  },
  "/images/Asset-29-4x.png": {
    "type": "image/png",
    "etag": "\"830-eBQf2Mr1+U+DlRlwEWo+1RpI2YY\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 2096,
    "path": "../public/images/Asset-29-4x.png"
  },
  "/images/Asset-2@4x.png": {
    "type": "image/png",
    "etag": "\"13f22-PzZnFFKTCLTheCk4Wj0pYzA+/+Y\"",
    "mtime": "2023-09-15T08:48:01.266Z",
    "size": 81698,
    "path": "../public/images/Asset-2@4x.png"
  },
  "/images/Asset-30-4x.png": {
    "type": "image/png",
    "etag": "\"92f-yoD+0v6eM5mexMZlRPcbnA8kYCU\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 2351,
    "path": "../public/images/Asset-30-4x.png"
  },
  "/images/Asset-31-4x.png": {
    "type": "image/png",
    "etag": "\"d80-QXPLWRb8c2ziNGq83oj0HGE5b4g\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 3456,
    "path": "../public/images/Asset-31-4x.png"
  },
  "/images/Asset-32-4x.png": {
    "type": "image/png",
    "etag": "\"e110-VZPPsJLdl5UQMexKYx89tHADRGI\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 57616,
    "path": "../public/images/Asset-32-4x.png"
  },
  "/images/Asset-33-4x.png": {
    "type": "image/png",
    "etag": "\"e090-YQmE6FJ888vHQzW7Bsykmd74258\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 57488,
    "path": "../public/images/Asset-33-4x.png"
  },
  "/images/Asset-34-4x.png": {
    "type": "image/png",
    "etag": "\"e038-VPLcmFxTh5aVaddejm37lhBEcWM\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 57400,
    "path": "../public/images/Asset-34-4x.png"
  },
  "/images/Asset-35-4x.png": {
    "type": "image/png",
    "etag": "\"7244-QvGMKs3auC1W9jA+ZdojMO+81Go\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 29252,
    "path": "../public/images/Asset-35-4x.png"
  },
  "/images/Asset-36-4x.png": {
    "type": "image/png",
    "etag": "\"2ef7-1O5+gPGVXROFOQv3nwNplb6LjjU\"",
    "mtime": "2023-06-26T05:33:36.000Z",
    "size": 12023,
    "path": "../public/images/Asset-36-4x.png"
  },
  "/images/Asset-3@4x.png": {
    "type": "image/png",
    "etag": "\"21b3a-U7wHEL1M/oz/IbDdHTN6qTo7gIY\"",
    "mtime": "2023-09-15T08:48:01.268Z",
    "size": 138042,
    "path": "../public/images/Asset-3@4x.png"
  },
  "/images/background.jpg": {
    "type": "image/jpeg",
    "etag": "\"67bc-zKNYh5c4v65WofLPtzQMWAXCN40\"",
    "mtime": "2023-06-19T06:30:17.111Z",
    "size": 26556,
    "path": "../public/images/background.jpg"
  },
  "/images/Banner-desktop-view.jpg": {
    "type": "image/jpeg",
    "etag": "\"13a355-QRAbED5kqSil3qhgI6Sg7hu0gpk\"",
    "mtime": "2023-09-15T08:48:01.279Z",
    "size": 1286997,
    "path": "../public/images/Banner-desktop-view.jpg"
  },
  "/images/bg.png": {
    "type": "image/png",
    "etag": "\"30f71-+FHETHDDi7KvLo/koxXG/L2nu+0\"",
    "mtime": "2023-08-05T12:33:28.000Z",
    "size": 200561,
    "path": "../public/images/bg.png"
  },
  "/images/blob-bl.png": {
    "type": "image/png",
    "etag": "\"f104-z9CSTXobXiZokvejExd3equGmZc\"",
    "mtime": "2023-08-05T12:36:12.000Z",
    "size": 61700,
    "path": "../public/images/blob-bl.png"
  },
  "/images/blog.png": {
    "type": "image/png",
    "etag": "\"361f-mGhxoUVE0Aqe3oPZDJ+KOOItAMc\"",
    "mtime": "2023-09-15T08:48:01.281Z",
    "size": 13855,
    "path": "../public/images/blog.png"
  },
  "/images/cloud-0.webp": {
    "type": "image/webp",
    "etag": "\"19858-2hoCQ7OnLrHyIS6o/JUD3wJR698\"",
    "mtime": "2023-06-05T08:26:22.000Z",
    "size": 104536,
    "path": "../public/images/cloud-0.webp"
  },
  "/images/cloud-1.webp": {
    "type": "image/webp",
    "etag": "\"19858-2hoCQ7OnLrHyIS6o/JUD3wJR698\"",
    "mtime": "2023-06-05T11:35:40.191Z",
    "size": 104536,
    "path": "../public/images/cloud-1.webp"
  },
  "/images/cloud-2.webp": {
    "type": "image/webp",
    "etag": "\"4590c-F+auPsnwkbPv/9ib9tOv101XX4A\"",
    "mtime": "2023-06-05T11:38:45.062Z",
    "size": 284940,
    "path": "../public/images/cloud-2.webp"
  },
  "/images/cloud-3.webp": {
    "type": "image/webp",
    "etag": "\"4590c-F+auPsnwkbPv/9ib9tOv101XX4A\"",
    "mtime": "2023-06-05T11:37:50.395Z",
    "size": 284940,
    "path": "../public/images/cloud-3.webp"
  },
  "/images/cloud-4.webp": {
    "type": "image/webp",
    "etag": "\"4590c-F+auPsnwkbPv/9ib9tOv101XX4A\"",
    "mtime": "2023-06-05T11:39:19.524Z",
    "size": 284940,
    "path": "../public/images/cloud-4.webp"
  },
  "/images/coaster.png": {
    "type": "image/png",
    "etag": "\"613d-vDkn/yKciTTi6f2L8202JZyDgI0\"",
    "mtime": "2023-06-19T06:43:42.103Z",
    "size": 24893,
    "path": "../public/images/coaster.png"
  },
  "/images/facebook.png": {
    "type": "image/png",
    "etag": "\"720-uAPuIH9fPbRlIUbk8QzAxuZedQ4\"",
    "mtime": "2023-08-31T06:31:24.843Z",
    "size": 1824,
    "path": "../public/images/facebook.png"
  },
  "/images/founder-image.png": {
    "type": "image/png",
    "etag": "\"115b45-s74VRDIzryEw/6tZHGhDsevANBE\"",
    "mtime": "2023-09-01T05:13:06.857Z",
    "size": 1137477,
    "path": "../public/images/founder-image.png"
  },
  "/images/fssai.png": {
    "type": "image/png",
    "etag": "\"19661-QYGqcOjhy04ecIs409u5PmdVDH4\"",
    "mtime": "2023-07-18T12:42:51.256Z",
    "size": 104033,
    "path": "../public/images/fssai.png"
  },
  "/images/glob-bl.png": {
    "type": "image/png",
    "etag": "\"f104-z9CSTXobXiZokvejExd3equGmZc\"",
    "mtime": "2023-08-05T12:36:12.000Z",
    "size": 61700,
    "path": "../public/images/glob-bl.png"
  },
  "/images/glob-br.png": {
    "type": "image/png",
    "etag": "\"16114-GaAV0NI1V1kMf7C3z0aQ1T19Eeg\"",
    "mtime": "2023-08-05T12:36:12.000Z",
    "size": 90388,
    "path": "../public/images/glob-br.png"
  },
  "/images/glob-tl.png": {
    "type": "image/png",
    "etag": "\"7280-ELztI/uwrnRfMB8UjBhmLhr6fN8\"",
    "mtime": "2023-08-05T12:36:12.000Z",
    "size": 29312,
    "path": "../public/images/glob-tl.png"
  },
  "/images/glowsense-contact-page.png": {
    "type": "image/png",
    "etag": "\"1507f-gQqjBYraU8j5AsmKEvX3YqrctDg\"",
    "mtime": "2023-08-31T08:32:09.983Z",
    "size": 86143,
    "path": "../public/images/glowsense-contact-page.png"
  },
  "/images/green-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"943aa-dRiOsNArA+UJy5ioPJKTz9eanUo\"",
    "mtime": "2023-06-19T06:54:18.960Z",
    "size": 607146,
    "path": "../public/images/green-bg.jpg"
  },
  "/images/hero-image.png": {
    "type": "image/png",
    "etag": "\"24d5f-yADyNoJn3LQDLMhg58ozu+Iq7Po\"",
    "mtime": "2023-06-07T06:42:48.087Z",
    "size": 150879,
    "path": "../public/images/hero-image.png"
  },
  "/images/Ingradients-02.png": {
    "type": "image/png",
    "etag": "\"6595-FQQzsP+yUqikqTwZYkWymj0rz/A\"",
    "mtime": "2023-08-31T12:13:58.000Z",
    "size": 26005,
    "path": "../public/images/Ingradients-02.png"
  },
  "/images/Ingradients-03.png": {
    "type": "image/png",
    "etag": "\"e526-jTZzWg1E247mZQ2VB5OhqsAJRmQ\"",
    "mtime": "2023-08-31T12:13:58.000Z",
    "size": 58662,
    "path": "../public/images/Ingradients-03.png"
  },
  "/images/Ingradients-04.png": {
    "type": "image/png",
    "etag": "\"6e46-7Jiz81gwwgYKSafB+gb8JR3uey4\"",
    "mtime": "2023-08-31T12:13:58.000Z",
    "size": 28230,
    "path": "../public/images/Ingradients-04.png"
  },
  "/images/Ingradients-07.png": {
    "type": "image/png",
    "etag": "\"6428-3B2NItlLbgPBhiYh1qKuYBxvk/o\"",
    "mtime": "2023-08-31T12:13:58.000Z",
    "size": 25640,
    "path": "../public/images/Ingradients-07.png"
  },
  "/images/Ingradients-09.png": {
    "type": "image/png",
    "etag": "\"4fb2-mX6usZRv00nVbXXXZbK2yRJpKRs\"",
    "mtime": "2023-08-31T12:13:58.000Z",
    "size": 20402,
    "path": "../public/images/Ingradients-09.png"
  },
  "/images/Ingradients-10.png": {
    "type": "image/png",
    "etag": "\"7712-N0VqeQ5O6GDPFN5nIFKieHnWduw\"",
    "mtime": "2023-08-31T12:13:58.000Z",
    "size": 30482,
    "path": "../public/images/Ingradients-10.png"
  },
  "/images/instagram.png": {
    "type": "image/png",
    "etag": "\"2b97-3yBszeiHe83bYuFree/V4FE+UyU\"",
    "mtime": "2023-08-31T06:41:19.586Z",
    "size": 11159,
    "path": "../public/images/instagram.png"
  },
  "/images/jar.png": {
    "type": "image/png",
    "etag": "\"47f1d-DZf6cpmv5GirzZwrmbazZwZSRgE\"",
    "mtime": "2023-06-07T08:08:14.745Z",
    "size": 294685,
    "path": "../public/images/jar.png"
  },
  "/images/jar2.png": {
    "type": "image/png",
    "etag": "\"aa313-RpmEdlBJZEost6p2e6boDQYm9jY\"",
    "mtime": "2023-09-14T09:50:36.000Z",
    "size": 697107,
    "path": "../public/images/jar2.png"
  },
  "/images/landscape-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"a6277-/T+NFxv4WkMyRryQaRtO40oRfGw\"",
    "mtime": "2023-06-15T10:01:41.778Z",
    "size": 680567,
    "path": "../public/images/landscape-2.jpg"
  },
  "/images/landscape-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"13740f-p6NfVnlQkH2t6B721B4Fw2BOuDo\"",
    "mtime": "2023-06-15T12:06:28.748Z",
    "size": 1274895,
    "path": "../public/images/landscape-3.jpg"
  },
  "/images/landscape.webp": {
    "type": "image/webp",
    "etag": "\"771a-E7c1rFbDsTlzH3C3ow67mEnIjio\"",
    "mtime": "2023-06-05T08:26:22.000Z",
    "size": 30490,
    "path": "../public/images/landscape.webp"
  },
  "/images/last-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ec64-lxXNy6yNljjzLekGLje76Ed3ivQ\"",
    "mtime": "2023-09-15T08:48:01.282Z",
    "size": 126052,
    "path": "../public/images/last-image.jpg"
  },
  "/images/leave-bl.png": {
    "type": "image/png",
    "etag": "\"1173b-MJrJJLlFY/jw5LzUmnwrQ6GBaHQ\"",
    "mtime": "2023-08-07T12:53:24.755Z",
    "size": 71483,
    "path": "../public/images/leave-bl.png"
  },
  "/images/leaves.webp": {
    "type": "image/webp",
    "etag": "\"cb48-375gny80IsljWyUzg66l+EUiaRY\"",
    "mtime": "2023-06-05T11:19:48.648Z",
    "size": 52040,
    "path": "../public/images/leaves.webp"
  },
  "/images/logo.png": {
    "type": "image/png",
    "etag": "\"10f73-M5EHuryFoVTaJnFDAbN7fXq8KR4\"",
    "mtime": "2023-06-27T06:37:33.959Z",
    "size": 69491,
    "path": "../public/images/logo.png"
  },
  "/images/nature.gif": {
    "type": "image/gif",
    "etag": "\"164eaf-XBVFnSZA9yOsKb1VJSNL0aSOMAU\"",
    "mtime": "2023-06-19T07:03:35.963Z",
    "size": 1461935,
    "path": "../public/images/nature.gif"
  },
  "/images/pattern.png": {
    "type": "image/png",
    "etag": "\"b722-Vwdmc7t36enhUykMaW44qADHvKE\"",
    "mtime": "2023-06-19T07:38:30.667Z",
    "size": 46882,
    "path": "../public/images/pattern.png"
  },
  "/images/product-details-2.png": {
    "type": "image/png",
    "etag": "\"debbd-YGejK4kHY/iGNPP0F2rCp40yIQk\"",
    "mtime": "2023-09-05T11:31:05.405Z",
    "size": 912317,
    "path": "../public/images/product-details-2.png"
  },
  "/images/product-details-3.png": {
    "type": "image/png",
    "etag": "\"d7e7e-8HkeGSt5fRDoGQ6Y6iWOyqXjxks\"",
    "mtime": "2023-09-05T11:39:13.310Z",
    "size": 884350,
    "path": "../public/images/product-details-3.png"
  },
  "/images/product-details-4.png": {
    "type": "image/png",
    "etag": "\"d5c91-a3Vbcv8p+/l4kCZdYjSuldeeFRM\"",
    "mtime": "2023-09-05T11:41:01.777Z",
    "size": 875665,
    "path": "../public/images/product-details-4.png"
  },
  "/images/product-details-5.png": {
    "type": "image/png",
    "etag": "\"dc93d-H/VO9wVYO14MO1FFyucBTMAU47E\"",
    "mtime": "2023-09-05T11:45:27.605Z",
    "size": 903485,
    "path": "../public/images/product-details-5.png"
  },
  "/images/Product-page-top-image.png": {
    "type": "image/png",
    "etag": "\"29e54d-/+6eB+K1+Nf8raqrubpaFc3YXa4\"",
    "mtime": "2023-09-05T10:20:00.544Z",
    "size": 2745677,
    "path": "../public/images/Product-page-top-image.png"
  },
  "/images/product-review-1.png": {
    "type": "image/png",
    "etag": "\"1c064e-RfbCiaTImejaB6Akk8hq2yEgeIU\"",
    "mtime": "2023-09-05T12:03:25.549Z",
    "size": 1836622,
    "path": "../public/images/product-review-1.png"
  },
  "/images/raiyan-slider.jpg": {
    "type": "image/jpeg",
    "etag": "\"49c34-DXewa9gryLs3Cq/yDoy5G4OOmqs\"",
    "mtime": "2023-08-23T11:04:02.514Z",
    "size": 302132,
    "path": "../public/images/raiyan-slider.jpg"
  },
  "/images/recipes.png": {
    "type": "image/png",
    "etag": "\"6c39-1youGeIvZ8bldYXl7BRNObsMNYE\"",
    "mtime": "2023-09-15T08:48:01.283Z",
    "size": 27705,
    "path": "../public/images/recipes.png"
  },
  "/images/rename.bat": {
    "type": "application/x-msdownload",
    "etag": "\"14c-MfyP63/D5W2/heEBImYurcEV3iQ\"",
    "mtime": "2023-06-27T12:21:06.481Z",
    "size": 332,
    "path": "../public/images/rename.bat"
  },
  "/images/rl-small.png": {
    "type": "image/png",
    "etag": "\"8df-tYV6YEEigjVdmCTZH7TNuMWQf3g\"",
    "mtime": "2023-06-27T08:24:15.572Z",
    "size": 2271,
    "path": "../public/images/rl-small.png"
  },
  "/images/shop-all.png": {
    "type": "image/png",
    "etag": "\"329d-dQ2UlPTBR/RmguVgzcRd2M4YvQg\"",
    "mtime": "2023-09-15T08:48:01.284Z",
    "size": 12957,
    "path": "../public/images/shop-all.png"
  },
  "/images/splash.png": {
    "type": "image/png",
    "etag": "\"510cb-TWm3UTb7maasdkJFJAgi5sfhZrc\"",
    "mtime": "2023-06-19T12:08:41.224Z",
    "size": 331979,
    "path": "../public/images/splash.png"
  },
  "/images/star-1.png": {
    "type": "image/png",
    "etag": "\"4409-1hg4brN5wAQeHZSKqMUXp9ICvmc\"",
    "mtime": "2023-06-27T06:38:30.000Z",
    "size": 17417,
    "path": "../public/images/star-1.png"
  },
  "/images/star-2.png": {
    "type": "image/png",
    "etag": "\"42ea-d9eWTb9x8td4Qusxtur/6CwTLB0\"",
    "mtime": "2023-06-27T06:38:30.000Z",
    "size": 17130,
    "path": "../public/images/star-2.png"
  },
  "/images/trearing-primary.svg": {
    "type": "image/svg+xml",
    "etag": "\"d34-G2dVrHbEJsvBGlma+mUAVyTuSfk\"",
    "mtime": "2023-07-11T09:04:10.263Z",
    "size": 3380,
    "path": "../public/images/trearing-primary.svg"
  },
  "/images/twitter.png": {
    "type": "image/png",
    "etag": "\"b1b-ODs85q160Hk/6+IPe4TuD9I3y90\"",
    "mtime": "2023-08-31T06:37:32.689Z",
    "size": 2843,
    "path": "../public/images/twitter.png"
  },
  "/images/waves.gif": {
    "type": "image/gif",
    "etag": "\"171be-rwNkDEJDDqnJR/EOOA0R8cwFvD4\"",
    "mtime": "2023-06-19T07:02:19.629Z",
    "size": 94654,
    "path": "../public/images/waves.gif"
  },
  "/images/website-banner-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"28c181-zx0VTYG5mql92SBLzG1CYKRT4Es\"",
    "mtime": "2023-09-15T08:48:01.307Z",
    "size": 2670977,
    "path": "../public/images/website-banner-01.jpg"
  },
  "/_nuxt/about-us-dummpy.9288371c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3adf-1wcQw9vLqGGIfmUAdLSO2oB7Rq0\"",
    "mtime": "2023-09-18T12:38:37.223Z",
    "size": 15071,
    "path": "../public/_nuxt/about-us-dummpy.9288371c.css"
  },
  "/_nuxt/about-us-dummpy.e7704e3d.js": {
    "type": "application/javascript",
    "etag": "\"1b900-YzfOxVNSgvYlWYfRCSuR88cYeJA\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 112896,
    "path": "../public/_nuxt/about-us-dummpy.e7704e3d.js"
  },
  "/_nuxt/about.5c90df8c.js": {
    "type": "application/javascript",
    "etag": "\"13d8-9KzkKEpC68t7H5zGTR/6EjReTVI\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 5080,
    "path": "../public/_nuxt/about.5c90df8c.js"
  },
  "/_nuxt/Asset-23-4x.739f5292.js": {
    "type": "application/javascript",
    "etag": "\"137-aTfDHLi/QXHR7T2Giww0byl2tdY\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 311,
    "path": "../public/_nuxt/Asset-23-4x.739f5292.js"
  },
  "/_nuxt/billing-details.7609ac4d.js": {
    "type": "application/javascript",
    "etag": "\"f34-c9JF1nE5/hirZ9fjId/uTcek5eI\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 3892,
    "path": "../public/_nuxt/billing-details.7609ac4d.js"
  },
  "/_nuxt/blogs.491233c6.js": {
    "type": "application/javascript",
    "etag": "\"19d-HI2mjBpQMmrDVeGj63KxmKrOi2E\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 413,
    "path": "../public/_nuxt/blogs.491233c6.js"
  },
  "/_nuxt/contact.bb56cffd.js": {
    "type": "application/javascript",
    "etag": "\"f50-ex51Oq45+Y5Y96BO1Ve+S6X+OfQ\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 3920,
    "path": "../public/_nuxt/contact.bb56cffd.js"
  },
  "/_nuxt/default.06a45d6e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6f-W1XRySURSdx55oYociam4ZXy4Qs\"",
    "mtime": "2023-09-18T12:38:37.222Z",
    "size": 111,
    "path": "../public/_nuxt/default.06a45d6e.css"
  },
  "/_nuxt/default.9e28a4b7.js": {
    "type": "application/javascript",
    "etag": "\"1a1e-yI9VbBiVUnRipUDVdxB5K3XMPi0\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 6686,
    "path": "../public/_nuxt/default.9e28a4b7.js"
  },
  "/_nuxt/entry.30b56e85.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7c83-+KaRwWRKML4aW1y9KGkTWzRRUio\"",
    "mtime": "2023-09-18T12:38:37.217Z",
    "size": 31875,
    "path": "../public/_nuxt/entry.30b56e85.css"
  },
  "/_nuxt/entry.4c1a212c.js": {
    "type": "application/javascript",
    "etag": "\"39321-o5veFRDTiV4SAr2Em+BwbypUz/w\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 234273,
    "path": "../public/_nuxt/entry.4c1a212c.js"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-404.9a9f444c.js": {
    "type": "application/javascript",
    "etag": "\"8d2-sQ9ClBUxZd//xRi1TRWCEYdWyOs\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 2258,
    "path": "../public/_nuxt/error-404.9a9f444c.js"
  },
  "/_nuxt/error-500.8bca73e2.js": {
    "type": "application/javascript",
    "etag": "\"756-Ks90hUHIjE6OYX3Xg89A1MuXeyI\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.8bca73e2.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/error-component.8bb59b0f.js": {
    "type": "application/javascript",
    "etag": "\"478-hz8SBpvJyQozjPNbcnyrsPjiD3g\"",
    "mtime": "2023-09-18T12:38:37.225Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.8bb59b0f.js"
  },
  "/_nuxt/founder-image.d1c23cef.js": {
    "type": "application/javascript",
    "etag": "\"70-Nrdif4QGsC0ZRjkzFocegt96DO8\"",
    "mtime": "2023-09-18T12:38:37.225Z",
    "size": 112,
    "path": "../public/_nuxt/founder-image.d1c23cef.js"
  },
  "/_nuxt/HeaderCommon.5aee4f3a.js": {
    "type": "application/javascript",
    "etag": "\"1b81-Gf5ziJsioDuyt30JGc9bqpI6Qwo\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 7041,
    "path": "../public/_nuxt/HeaderCommon.5aee4f3a.js"
  },
  "/_nuxt/HeaderCommon.ce236819.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12a-gy4CnuNH2RWlVMKLyF48TmcU+oo\"",
    "mtime": "2023-09-18T12:38:37.223Z",
    "size": 298,
    "path": "../public/_nuxt/HeaderCommon.ce236819.css"
  },
  "/_nuxt/index.3e320590.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"490-QsDrWGuZsi/Q8LOPCYEGIXcrV2w\"",
    "mtime": "2023-09-18T12:38:37.223Z",
    "size": 1168,
    "path": "../public/_nuxt/index.3e320590.css"
  },
  "/_nuxt/index.8c33b381.js": {
    "type": "application/javascript",
    "etag": "\"e043-bTYC1RPpR8qdv09tVw4Qh4SebcI\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 57411,
    "path": "../public/_nuxt/index.8c33b381.js"
  },
  "/_nuxt/jar.6bc29904.js": {
    "type": "application/javascript",
    "etag": "\"66-nc/LQ9741tSjw31hsiBAnvl9yRo\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 102,
    "path": "../public/_nuxt/jar.6bc29904.js"
  },
  "/_nuxt/jar2.260e5e01.js": {
    "type": "application/javascript",
    "etag": "\"67-DIqX7hdFrp1+ZDuVvq6/GLXP5os\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 103,
    "path": "../public/_nuxt/jar2.260e5e01.js"
  },
  "/_nuxt/logo.c0bce6b5.js": {
    "type": "application/javascript",
    "etag": "\"67-U9R/TiNJENj51l9Nlx0n8ew/jLM\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 103,
    "path": "../public/_nuxt/logo.c0bce6b5.js"
  },
  "/_nuxt/logout.2e9f9a11.js": {
    "type": "application/javascript",
    "etag": "\"93-t0PUniaPYvCPjy42QGD055k7q4M\"",
    "mtime": "2023-09-18T12:38:37.225Z",
    "size": 147,
    "path": "../public/_nuxt/logout.2e9f9a11.js"
  },
  "/_nuxt/nuxt-link.4aa62726.js": {
    "type": "application/javascript",
    "etag": "\"10e2-kkJEgV8eNDjHtolJhtZr38QpiWU\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 4322,
    "path": "../public/_nuxt/nuxt-link.4aa62726.js"
  },
  "/_nuxt/privacy-policy.cb332538.js": {
    "type": "application/javascript",
    "etag": "\"2101-P8XvOCOGqSWF73gKln75S6AFAsg\"",
    "mtime": "2023-09-18T12:38:37.232Z",
    "size": 8449,
    "path": "../public/_nuxt/privacy-policy.cb332538.js"
  },
  "/_nuxt/product-detail.5eb64480.js": {
    "type": "application/javascript",
    "etag": "\"9432-8ThZRe3cTTKJqgoM0jRtkCz2bH4\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 37938,
    "path": "../public/_nuxt/product-detail.5eb64480.js"
  },
  "/_nuxt/product-review.9c5162de.js": {
    "type": "application/javascript",
    "etag": "\"3e59-N0aw03eaPX/N5L4wzUPz+2ejUEs\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 15961,
    "path": "../public/_nuxt/product-review.9c5162de.js"
  },
  "/_nuxt/register.ace620e1.js": {
    "type": "application/javascript",
    "etag": "\"16ad0-nLE2yyj8vUd3SQluwnD7ueE8MY0\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 92880,
    "path": "../public/_nuxt/register.ace620e1.js"
  },
  "/_nuxt/rl-small.aa5ebee6.js": {
    "type": "application/javascript",
    "etag": "\"174-N4ehbRR3InCbF/jUmRiPQ+FPwNk\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 372,
    "path": "../public/_nuxt/rl-small.aa5ebee6.js"
  },
  "/_nuxt/sweetalert2.all.f813d74e.js": {
    "type": "application/javascript",
    "etag": "\"11093-AjVe3Fd92E7TH7ZoXlMCeWm4xDs\"",
    "mtime": "2023-09-18T12:38:37.238Z",
    "size": 69779,
    "path": "../public/_nuxt/sweetalert2.all.f813d74e.js"
  },
  "/_nuxt/_commonjsHelpers.28e086c5.js": {
    "type": "application/javascript",
    "etag": "\"81-C8N1nZQHhv0DyCQ+8q372xaksTY\"",
    "mtime": "2023-09-18T12:38:37.224Z",
    "size": 129,
    "path": "../public/_nuxt/_commonjsHelpers.28e086c5.js"
  },
  "/images/product/advantages.jpg": {
    "type": "image/jpeg",
    "etag": "\"613b1-YI25Oo0cs6/iW4pwnTMmLA0ctEM\"",
    "mtime": "2023-09-12T08:48:06.000Z",
    "size": 398257,
    "path": "../public/images/product/advantages.jpg"
  },
  "/images/product/boss.jpg": {
    "type": "image/jpeg",
    "etag": "\"871dd-/lq5BvsF3TTkZgojI1aStLkzxb0\"",
    "mtime": "2023-09-12T08:49:22.000Z",
    "size": 553437,
    "path": "../public/images/product/boss.jpg"
  },
  "/images/product/info.jpg": {
    "type": "image/jpeg",
    "etag": "\"28bea-JRAhN8rHiSifMTT5mhKk42iuctc\"",
    "mtime": "2023-09-12T08:49:32.000Z",
    "size": 166890,
    "path": "../public/images/product/info.jpg"
  },
  "/images/product/jar-with-box.jpg": {
    "type": "image/jpeg",
    "etag": "\"54780-Tdm1DhpL/KJNbiTUKMpasjKUib8\"",
    "mtime": "2023-09-12T08:48:50.000Z",
    "size": 345984,
    "path": "../public/images/product/jar-with-box.jpg"
  },
  "/images/product/jar-with-ingradients.jpg": {
    "type": "image/jpeg",
    "etag": "\"4fda5-MCTQlpd1p417Blf1Rpq0eZprRNQ\"",
    "mtime": "2023-09-12T08:48:30.000Z",
    "size": 327077,
    "path": "../public/images/product/jar-with-ingradients.jpg"
  },
  "/images/product/suplement.jpg": {
    "type": "image/jpeg",
    "etag": "\"a7b0c-aOTPDJXTisRS1xIGtuDDgQcq1aA\"",
    "mtime": "2023-09-12T08:49:04.000Z",
    "size": 686860,
    "path": "../public/images/product/suplement.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_Qi5n8L = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Qi5n8L, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Qi5n8L, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
