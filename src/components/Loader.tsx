const COLOR_VARIANTS = {
    simple: {
        loader: "border-bck-dark",
        star: "text-bck-dark",
    },
    fancy: {
        loader: "border-accent",
        star: "text-accent-1",
    },
} as const;

type Variant = keyof typeof COLOR_VARIANTS;
type Size = "sm" | "md" | "lg";

const SIZE_CLASSES: Record<Size, { wrapper: string; star: string }> = {
    sm: { wrapper: "w-6 h-6", star: "w-2 h-2" },
    md: { wrapper: "w-12 h-12", star: "w-3 h-3" },
    lg: { wrapper: "w-16 h-16", star: "w-4 h-4" },
};

// Default size constant
const DEFAULT_SIZE: Size = "lg";

type PropTypes = {
    variant?: Variant;
    size?: Size;
};

function Loader({ variant = "fancy", size = DEFAULT_SIZE }: PropTypes) {
    const colors = COLOR_VARIANTS[variant];
    // Ensure size exists in SIZE_CLASSES, fallback to default
    const sizes = SIZE_CLASSES[size] || SIZE_CLASSES[DEFAULT_SIZE];

    return (
        <div className={`relative ${sizes.wrapper}`}>
            <div
                className={`absolute inset-0 animate-spin ${colors.loader} border-t-2 rounded-full`}
            ></div>
            <svg
                className={`absolute top-1 ${size == "sm" ? "left-7" : size == "md" ? "left-14" : "left-20"} transform -translate-x-1/2 -translate-y-1/2 ${colors.star} ${sizes.star} animate-[twinkle_2s_infinite]`}
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
            </svg>
        </div>
    );
}

export default Loader;
