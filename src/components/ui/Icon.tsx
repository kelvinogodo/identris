import {
  Fingerprint,
  LayoutDashboard,
  ShoppingCart,
  Server,
  ShieldCheck,
  Target,
  PenTool,
  Cpu,
  MessageCircle,
  ArrowRight,
  Check,
  X,
  Menu,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "fingerprint"
  | "dashboard"
  | "cart"
  | "server"
  | "shield"
  | "target"
  | "blueprint"
  | "circuit"
  | "waveform"
  | "arrow-right"
  | "check"
  | "close"
  | "menu";

const icons: Record<IconName, LucideIcon> = {
  fingerprint: Fingerprint,
  dashboard: LayoutDashboard,
  cart: ShoppingCart,
  server: Server,
  shield: ShieldCheck,
  target: Target,
  blueprint: PenTool,
  circuit: Cpu,
  waveform: MessageCircle,
  "arrow-right": ArrowRight,
  check: Check,
  close: X,
  menu: Menu,
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  const LucideComponent = icons[name];
  return <LucideComponent className={className} strokeWidth={1.75} aria-hidden="true" />;
}
