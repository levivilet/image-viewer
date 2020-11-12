module.exports = {
  plugins: [
    [
      '@semantic-release/github',
      {
        assets: [
          {
            label: 'image-viewer-amd64.deb',
            path: 'out/make/deb/x64',
          },
        ],
      },
    ],
  ],
}
