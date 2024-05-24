"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorBtn
        onClick={onChange}
        color={{
          r: 244,
          g: 33,
          b: 129,
        }}
      />
    </div>
  );
};

interface ColorBtnProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorBtn = ({ onClick, color }: ColorBtnProps) => {
  return (
    <button
      className="w-8 h-8 flex items-center justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{
          background: colorToCss(color),
        }}
      />
    </button>
  );
};
