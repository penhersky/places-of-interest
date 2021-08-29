import {
  AimOutlined,
  EnvironmentOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import React from "react";
import ReactMapGL, { Layer, Marker, Source } from "react-map-gl";

import { PageWrapper } from "../component";
import { getLocale } from "../services";

const { MAP_ACCESS_KEY } = process.env;

const from = {
  latitude: 49.8445,
  longitude: 24.0251,
};
const to = {
  latitude: 49.84991660590791,
  longitude: 24.02395246867904,
};

const Around = () => {
  const [viewport, setViewport] = React.useState({
    latitude: (from.latitude + to.latitude) / 2,
    longitude: (from.longitude + to.longitude) / 2,
    zoom: 14,
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
          dragPan
          bearing={0}
          pitch={0}
          onViewportChange={(view: any) => setViewport(view)}
          onResize={(data: any) => console.log(data)}
          onViewStateChange={(data: any) => console.log(data)}
        >
          <Marker
            latitude={from.latitude}
            longitude={from.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <AimOutlined />
          </Marker>
          <Marker
            latitude={to.latitude}
            longitude={to.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <EnvironmentOutlined />
          </Marker>
          <Source
            id="polylineLayer"
            type="geojson"
            data={{
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: [Object.values(from), Object.values(to)],
              },
            }}
          >
            <Layer
              id="lineLayer"
              type="line"
              source="my-data"
              layout={{
                "line-join": "round",
                "line-cap": "round",
              }}
              paint={{
                "line-color": "#EB4C42",
                "line-width": 50,
              }}
            />
          </Source>
          {/* <Marker
            latitude={51.638801064767486}
            longitude={24.1981574099999227}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <HomeOutlined />
          </Marker>
          <Marker
            latitude={51.648801064767486}
            longitude={24.1981574099999227}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <HomeOutlined />
          </Marker> */}
        </ReactMapGL>
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps = getLocale;

export default Around;
