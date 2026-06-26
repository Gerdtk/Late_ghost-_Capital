interface ButtonLProps {
    text: string;
    onClick?: () => void;
    filled?: boolean;
    className?: string;
}

export default function ButtonL({
    text, onClick,
    filled = false, className = "",
}: ButtonLProps){
    return(
        <button
        onClick={onClick}
        className={`
            min-w-[140px]
            px-6
            py-2
            rounded-full
            border
            border-[#464439]
            text-sm
            font-light
            transition-all
            duration-300
            ${
                filled
                ? "bg-[#bd684c] text-[#f3ecdc]"
                : "bg-tranparent text-[#464439] hover:bg-[#bd684c] hover:text-[#f3ecdc]"
            }
            ${className}
            `}>
                {text}
            </button>
    );
}