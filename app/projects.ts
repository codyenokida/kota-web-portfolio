import blogImage from "@/public/images/projects/blog-preview.png";
import airswapImage from "@/public/images/projects/airswap-preview.png";
import dinobabiesImage from "@/public/images/projects/dinobabies-preview.png";
import zoomiezImage from "@/public/images/projects/zoomiez-preview.png";
import swifttipsImage from "@/public/images/projects/swifttips-preview.png";
import portfolioImage from "@/public/images/projects/portfolio-preview.png";

const projects = [
  {
    src: blogImage,
    title: "Kotakun.blog",
    description:
      "Personal Blog for travel and life updates for friends and family.",
    tech: "NextJS, Google Firebase",
    githubLink: "https://github.com/codyenokida/blog-nextjs",
    webLink: "https://www.kotakun.blog/",
  },
  {
    src: airswapImage,
    title: "Airswap DEX",
    description:
      "Airswap is the original trustless OTC and RFQ token trading network. Opensource Frontend developer.",
    tech: "React.js, ethers.js",
    githubLink: "https://github.com/airswap/airswap-web",
    webLink: "https://www.airswap.io/",
  },
  {
    src: zoomiezImage,
    title: "Zoomiez Chrome Extension",
    description:
      "Zoomiez is a Google Chrome extension to manage your online zoom meetings.",
    tech: "React.js, Rollup",
    githubLink: "https://github.com/codyenokida/zoomiez2.0",
    webLink:
      "https://chrome.google.com/webstore/detail/zoomiez/lmjfjafdpknamhnhkillmnhdmnolgmjl",
  },
  {
    src: swifttipsImage,
    title: "SwiftTips",
    description:
      "SwiftTips is a learn and earn platform for learning the Swift programming langauge.",
    tech: "React.js, NodeJS, MongoDB",
    githubLink: "https://github.com/beachead/SwiftTips.co",
    webLink: "https://www.swifttips.co/",
  },
  {
    src: dinobabiesImage,
    title: "Dino Babies in Space",
    description:
      "Dino Babies in Space is the first TV and Comic series built with an NFT component. Built an NFT locked website with 100+ daily active users.",
    tech: "React.js, Web3.js, Ethereum",
    githubLink: "https://twitter.com/DinoBabyZiggy",
    webLink: "https://www.dinobabies.io/",
  },
  {
    src: portfolioImage,
    title: "Personal Portfolio (V1)",
    description: "First iteration of Kota Cody Enokida's web portfolio.",
    tech: "React.js, Gatsby.js",
    githubLink: "https://github.com/codyenokida/kota-enokida-portfolio-v3",
    webLink: "https://kotaenokida.netlify.app/",
  },
];

export default projects;
