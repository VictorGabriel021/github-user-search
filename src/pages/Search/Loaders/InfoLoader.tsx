import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={950}
    height={280}
    viewBox="100 0 950 280"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="2" ry="2" width="950" height="280" />
  </ContentLoader>
)

export default InfoLoader;