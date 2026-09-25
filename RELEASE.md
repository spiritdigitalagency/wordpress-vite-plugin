# Release Instructions

Releases are managed by [@vpsnak](https://github.com/vpsnak) for this repository.

1. Update the version number in [package.json](./package.json) and [CHANGELOG.md](./CHANGELOG.md), commit and push
2. `npm install`
3. `npm pack --dry-run`: the list must include `dist/` and `inertia-helpers/` (`prepack` builds them, on any OS)
4. `npm publish --access=public --otp=<code from your authenticator>`
5. Create a new GitHub release for this version with the release notes
