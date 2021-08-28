import { AimOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import { PageWrapper } from "../component";
import { getLocale } from "../services";

const { MAP_ACCESS_KEY } = process.env;

const Around = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <PageWrapper seo={{ description: "", keywords: [], title: "" }}>
      <div style={{ height: "50vh", width: "100%" }}>
        <ReactMapGL
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...viewport}
          mapboxApiAccessToken={MAP_ACCESS_KEY}
          width="100%"
          height="50vh"
          onViewportChange={(view: any) => setViewport(view)}
          onResize={(data: any) => console.log(data)}
          onViewStateChange={(data: any) => console.log(data)}
        >
          <Marker
            latitude={50.638201064767486}
            longitude={24.190154099999127}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <AimOutlined />
          </Marker>
          <Marker
            latitude={50.638801064767486}
            longitude={24.1981574099999227}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <HomeOutlined />
          </Marker>
          <Marker
            latitude={50.648801064767486}
            longitude={24.1981574099999227}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <HomeOutlined />
          </Marker>
        </ReactMapGL>
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps = getLocale;

export default Around;
