import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 520"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="311" rx="5" ry="5" width="280" height="90" />
      <rect x="0" y="266" rx="5" ry="5" width="280" height="27" />
      <circle cx="140" cy="120" r="120" />
      <rect x="1" y="418" rx="0" ry="0" width="122" height="40" />
      <rect x="145" y="414" rx="10" ry="10" width="134" height="47" />
    </ContentLoader>
  );
}

export default Skeleton;
