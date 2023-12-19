import React from "react";


// components import
import BasicLayout from "@/components/templates/BasicLayout";
import GenreBox from "@/components/organisms/GenreBox";


export default function Home() {
  return (
    <div id="app">
      <BasicLayout>
        <GenreBox />
      </BasicLayout>
    </div>
  );
}
