import React, { Component } from "react";
import colors from "../assets/colors";
import Icon from "./icon";

const SongCard = ({ songName, newNo, oldNo, isHindi, onDelete, onClick }) => {
  return (
    <div
      style={{
        margin: 10,
        backgroundColor: colors.colorPrimary,
        display: "flex",
        borderRadius: 10,
        cursor: "pointer",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          padding: 10,
          flex: 6,
          display: "flex",
          alignItems: "center"
        }}
        onClick={() => onClick()}
      >
        <p style={{ paddingRight: 10 }}>{newNo}. </p>
        <p>{songName}</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backgroundColor: "rgba(255,255,255,0.1)"
        }}
        onClick={() => onDelete()}
      >
        <Icon iconName="mdi-close" />
      </div>
    </div>
  );
};
export default SongCard;
