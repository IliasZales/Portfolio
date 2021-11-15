const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/macpro/Documents/GitHub/Portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/macpro/Documents/GitHub/Portfolio/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/macpro/Documents/GitHub/Portfolio/src/pages/index.tsx"))),
  "component---src-pages-projects-tsx": hot(preferDefault(require("/Users/macpro/Documents/GitHub/Portfolio/src/pages/projects.tsx"))),
  "component---src-pages-timeline-tsx": hot(preferDefault(require("/Users/macpro/Documents/GitHub/Portfolio/src/pages/timeline.tsx")))
}

