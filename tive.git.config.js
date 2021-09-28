module.exports = {
  shell: [
    'git status',
    'git add .',
    'git commit -m "增加文章"',
    // 'git push origin test',
    // 'git checkout test',
    // 'git checkout master',
    'git pull origin master',
    // 'git merge --no-ff -m "clue-now merge into master" test',
    'git push origin master',
    // 'git checkout dev/0609-clue-now',
    'git status',
    // 'npm run d',
    // 'hexo d',
    // 'npm run push',
  ],
}