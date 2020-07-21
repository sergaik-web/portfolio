const bgAnimation = (delta) => {
  let video = document.querySelector("#bg-video");
  video.play();
  video.playbackRate = delta / 1000;
};

export default bgAnimation;
