import Image from 'next/image';

export default function FullWidthImage(props) {
  return (
    <div className="full-image relative h-auto w-screen">
      <Image alt={props.alt} src={props.url} {...props} />
    </div>
  );
}
