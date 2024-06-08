import { type SimulationNodeDatum } from "d3-force";
import { type MotionValue } from "framer-motion";

export interface BubbleData {
  id: string;
  label: string;
  href: string;
  iconUrl: string;
  iconIsCircle: boolean;
  importance: number;
  backgroundColor: string;
}

export interface BubbleNode extends SimulationNodeDatum, BubbleData {
  radius: MotionValue<number>;
  collisionSpacing: MotionValue<number>;
  isHovering: boolean;
  isPressed: boolean;
  isDragging: boolean;
  dragOrigin: {
    x: number;
    y: number;
  } | null;
}
