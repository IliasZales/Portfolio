// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-tsx": () => import("./../../../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-html-tsx": () => import("./../../../src/pages/html.tsx" /* webpackChunkName: "component---src-pages-html-tsx" */),
  "component---src-pages-index-tsx": () => import("./../../../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-projects-tsx": () => import("./../../../src/pages/projects.tsx" /* webpackChunkName: "component---src-pages-projects-tsx" */),
  "component---src-pages-timeline-tsx": () => import("./../../../src/pages/timeline.tsx" /* webpackChunkName: "component---src-pages-timeline-tsx" */)
}

