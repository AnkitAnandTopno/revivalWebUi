import React, { Component } from "react";
import colors from "../assets/colors";
import Icon from "./icon";
import { convert_to_unicode } from "../util/stringUtil";

const SongCard = ({
  songName,
  newNo,
  oldNo,
  hindi,
  onDelete,
  onClick,
  isDeletable
}) => {
  return (
    <div
      style={{
        margin: 5,
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
          alignItems: "center",
          height: 50
        }}
        onClick={() => onClick()}
      >
        <span style={{ paddingRight: 10 }}>{newNo}. </span>
        <span style={{ textOverflow: "ellipsis", wordWrap: "break-word" }}>
          {hindi ? convert_to_unicode(songName) : songName}
        </span>
      </div>
      {isDeletable ? (
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
      ) : null}
    </div>
  );
};
export default SongCard;
