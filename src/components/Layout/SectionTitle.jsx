export default function SectionTitle({
    children,
    className = "",
}) {
    return (
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white ${className}`}>
            {children}
        </h2>
    );
}