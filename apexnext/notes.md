+   add intro after search submit of banners sliding from top to bottom of page and search input hiding
#   add css styling so it looks nice, similar to game menu:
# Tweaks
-   add all kill values for accurate display of total kills in SelectedCharacter view
-   finish adding stats to selected character view; shorthand in menu nameDisplay lower bar = also => add player stats to menu somewhere
X   figure out error handling for bad search
X   fix selectedCharacter image move on selection of legend
-   add recent match stats to banner at top of screen
# CSS
X   fix content to it all fits on screen
    X   smaller character display icons, maybe shrink images or make them the bg image of the boxes and skew bgImage to fit correctly
-   fix aspect ratio of images so it's not so crazy skewed
-   fix overflow of name banner and make it fill bottom of container
-   style the selected character stats display
-   smoke => threeJS
-   light flashes on select of character = add flash warning to page somewhere, maybe option to turn it off => accessibility mode?
-   font optimization for FOUT
-   fix fonts so contain vh and vw, allowing for responsive font sizes
-   maybe offset grid placements so it looks exactly like menu placement
# extra
-   maybe add randomized character taglines and display for each character selected
-   add multi user stat comparison

# mess with display of hovered selection viewed stats to make comparing stats between legends easier
# are the menu characters with an offset or ..??
# figure out how to render webgl with plain threeJS integrated. need renderer for plane i think.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
