import Heading from './ui/Heading';
import { Playground } from './ui/Playground';

interface ImageProps {
  id?: string;
}

function Image({ id }: ImageProps) {
  return (
    <div className="content-wrapper" id={id}>
      <Heading title="Image" level={3} />

      <h4 className="content-sub-heading">Basic</h4>
      <Playground>
        <img src="sample.jpg" width="320" height="320" alt="Tokyo Tower" loading="lazy" />
      </Playground>
    </div>
  );
}

export default Image;
