function Loader() {
    return (
        <div className="relative w-16 h-16">
            <div className="absolute inset-0 animate-spin border-t-2 border-accent rounded-full"></div>
            <svg
                className="absolute top-1 left-1/2 transform translate-x-6 -translate-y-1/2 text-accent-1 w-4 h-4 animate-[twinkle_2s_infinite]"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
            </svg>
        </div>
    );
}

export default Loader;
