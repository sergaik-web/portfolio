const PrintText = (action) => {
  let render = "";
  const text = "Frontend JavaScript разработка !!!";

  (function addSimbol() {
    render = render + text[render.length];
    action(render);

    if (render.length < text.length) {
      let timer;
      switch (render.length % 17) {
        case 0:
          timer = 500;
          break;
        case 1:
          timer = 200;
          break;
        case 2:
          timer = 100;
          break;
        default:
          timer = 50;
      }

      setTimeout(() => addSimbol(), timer);
    }
  })();
};

export default PrintText;
