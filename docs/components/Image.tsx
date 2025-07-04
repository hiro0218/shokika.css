const Image = () => {
  return (
    <div className="content-wrapper">
      <h3 className="content-heading">Image</h3>

      <h4 className="content-sub-heading">Basic</h4>
      <div className="playground">
        <img src="sample.jpg" width="320" height="320" alt="Tokyo Tower" loading="lazy" />
      </div>

      <h4 className="content-sub-heading">figure + figcaption</h4>
      <div className="playground">
        <figure>
          <img src="sample.jpg" width="320" height="320" alt="Tokyo Tower" loading="lazy" />
          <figcaption>Tokyo Tower</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Image;
