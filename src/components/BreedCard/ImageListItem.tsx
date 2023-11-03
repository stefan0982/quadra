import React from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";

interface ImageItemProps {
  imgUrl: string | undefined;
  title?: string
}

export const ImageItem = ({imgUrl, title}: ImageItemProps) => {
  return (
    <ImageListItem>
      <img
        src={imgUrl}
        alt={title}
        loading="lazy"
      />
      <ImageListItemBar
        title={title}
      />
    </ImageListItem>
  )
}
