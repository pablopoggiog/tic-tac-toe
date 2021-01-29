import React from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
  } from "react-share";
  import {
    SocialMediaContainer,
  } from "./styles";
  

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <FacebookShareButton
        url="https://pablopoggiog.github.io/tic-tac-toe"
        quote="This is a pretty good game, check it out!"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url="https://pablopoggiog.github.io/tic-tac-toe"
        title="This is a pretty good game, check it out!"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </SocialMediaContainer>
  );
};
