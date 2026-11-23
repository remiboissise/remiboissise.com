const config = require("./data/config")

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ")

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  headers: [
    {
      source: "/*",
      headers: [
        { key: "content-security-policy", value: contentSecurityPolicy },
        {
          key: "permissions-policy",
          value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
        },
        { key: "referrer-policy", value: "strict-origin-when-cross-origin" },
        {
          key: "strict-transport-security",
          value: "max-age=31536000; includeSubDomains",
        },
        { key: "x-content-type-options", value: "nosniff" },
        { key: "x-frame-options", value: "DENY" },
        { key: "x-xss-protection", value: "0" },
      ],
    },
  ],
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          silenceDeprecations: ["legacy-js-api", "import"],
        },
      },
    },
    "gatsby-plugin-sitemap",
  ],
}
