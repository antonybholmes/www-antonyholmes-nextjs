# format code
pnpm update-version
pnpm format

pnpm image-optimize

# commit
git add -A .
git commit -m "Bug fixes and updates."
git push -u origin dev
