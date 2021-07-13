module.exports = {
  shell: [
    'npm run clean',
    'npm run build',
    'node zip.js',
    // 'npm run zip',
    'node deploy.js',
  ],
}