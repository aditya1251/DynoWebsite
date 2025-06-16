import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import TrueFocus from "./TrueFocus";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  sentance?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  sentence?: string; // Fixed typo from 'sentance'
  variant?: 'default' | 'gradient' | 'glass' | 'neon';
  showTerminalHeader?: boolean;
  title?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    sentence, 
    customClass, 
    variant = 'default',
    showTerminalHeader = true,
    title,
    ...rest 
  }, ref) => {
    
    const getVariantStyles = () => {
      switch (variant) {
        case 'gradient':
          return 'bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90 border-purple-500/30 hover:border-purple-400/50';
        case 'glass':
          return 'bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-xl';
        case 'neon':
          return 'bg-black/90 border-cyan-500/50 hover:border-cyan-400/70 shadow-cyan-500/20 hover:shadow-cyan-400/30';
        default:
          return 'bg-gradient-to-br from-black/95 to-black/80 border-white/20 hover:border-white/30';
      }
    };

    return (
      <div
        ref={ref}
        {...rest}
        className={`
          absolute top-1/2 left-1/2 overflow-hidden rounded-xl border
          backdrop-blur-sm shadow-xl hover:shadow-2xl 
          transition-all duration-300 ease-out
          [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]
          hover:scale-[1.02] hover:-translate-y-1
          ${getVariantStyles()}
          ${customClass ?? ""} 
          ${rest.className ?? ""}
        `.trim()}
      >
        {showTerminalHeader && (
          <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
              </div>
              {title && (
                <span className="text-xs text-white/60 ml-2 font-mono">
                  {title}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-white/20 rounded-sm flex items-center justify-center">
                <div className="w-2 h-0.5 bg-white/40"></div>
              </div>
              <div className="w-4 h-4 border border-white/20 rounded-sm"></div>
              <div className="w-4 h-4 border border-white/20 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 border-t border-r border-white/40 transform rotate-45 -translate-x-0.5"></div>
              </div>
            </div>
          </div>
        )}
        
        <div className="relative p-4">
          <TrueFocus
            sentence={sentence}
            manualMode={false}
            blurAmount={3}
            borderColor={variant === 'neon' ? '#00ffff' : '#d297fc'}
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          
          {/* Optional decorative elements */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-green-400/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 left-2 text-xs text-white/30 font-mono">
            {variant}
          </div>
        </div>

        {/* Subtle animated border effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    );
  }
);


Card.displayName = "Card";
type CardRef = RefObject<HTMLDivElement>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(-1);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current!,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;
