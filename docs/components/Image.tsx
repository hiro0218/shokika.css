import Heading from './ui/Heading';
import { Playground } from './ui/Playground';

const Image = () => {
  return (
    <div className="content-wrapper">
      <Heading title="Image" id="image" level={3} />

      <h4 className="content-sub-heading">Basic</h4>
      <Playground>
        <img src="sample.jpg" width="320" height="320" alt="Tokyo Tower" loading="lazy" />
      </Playground>
    </div>
  );
};

export default Image;
