import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useState } from "react";

const Map = () => {
  const container = {
    width: "75%",
    height: "500px"
  };
  
  const position = {
    lat: 35.182253007459444,
    lng: 136.90534328438358
  };

  const [apiKey, setApiKey] = useState<string | undefined>(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  console.log(apiKey);
  

  if (!apiKey) {
    return <div>Google Maps API key not found.</div>;
  }

  return(
    <>
      <div className=" w-full h-[500px] mt-[30px] flex justify-center">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap mapContainerStyle={container} center={position} zoom={15} />
        </LoadScript>
      </div>
    </>
  )
}

export default Map;