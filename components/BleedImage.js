import Image from 'next/image';

export default function BleedImage(props) {
  return (
    <div className="bleed-image relative h-auto">
      <Image unoptimized={true} alt={props.alt} src={props.url} {...props} />
    </div>
  );
}
