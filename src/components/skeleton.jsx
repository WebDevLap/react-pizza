import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader 
    speed={1.5}
    width={300}
    height={458}
    viewBox="0 0 300 458"
    backgroundColor="#d4d4d4"
    foregroundColor="#a1a1a1"
    {...props}
  >
    <rect x="-528" y="1146" rx="0" ry="0" width="258" height="80" /> 
    <rect x="69" y="51" rx="0" ry="0" width="1" height="1" /> 
    <circle cx="150" cy="140" r="130" /> 
    <rect x="20" y="280" rx="5" ry="5" width="260" height="14" /> 
    <rect x="20" y="310" rx="10" ry="10" width="260" height="83" /> 
    <rect x="20" y="408" rx="5" ry="5" width="60" height="18" /> 
    <rect x="138" y="408" rx="20" ry="20" width="142" height="36" />
  </ContentLoader>
)

export default Skeleton;