# Notater

## Nedgradere node til v20

* sudo n 20.18.0
* export PATH="/usr/local/bin:\$PATH"
* node --version

## Lag og kjør appen

- yarn create strapi
- yarn develop

## La til

- .github / workflows
- CODEOWNERS
- LICENCE
- Dockerfile
- src/admin/app.tsx for å skjule fra admin menyen
  - Media Library
  - Marketplace

## Endret

- config admin.ts
`flags: {
nps: env.bool('FLAG_NPS', false),
promoteEE: env.bool('FLAG_PROMOTE_EE', false),
},`
- yarn remove @strapi/plugin-cloud