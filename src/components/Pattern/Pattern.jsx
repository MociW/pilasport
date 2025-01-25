const Pattern = () => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.5)"
            >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    fill="currentColor"
                />
            </pattern>
        </defs>
        <rect width="800%" height="800%" fill="url(#b)" />
    </svg>
);

export default Pattern;
