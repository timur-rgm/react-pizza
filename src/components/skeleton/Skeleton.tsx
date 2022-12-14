import ContentLoader from 'react-content-loader';

function Skeleton(): JSX.Element {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 520"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="325" rx="5" ry="5" width="280" height="90" />
      <rect x="0" y="279" rx="5" ry="5" width="280" height="27" />
      <circle cx="140" cy="130" r="125" />
      <rect x="0" y="438" rx="0" ry="0" width="122" height="40" />
      <rect x="145" y="435" rx="20" ry="20" width="134" height="47" />
    </ContentLoader>
  );
}

export default Skeleton;
