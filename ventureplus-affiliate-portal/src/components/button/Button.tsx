import { Spin } from "antd";

type ButtonType = {
    variant: "filled" | "outlined";
    label: string | JSX.Element;
    className?: string | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    onChange?: () => void | undefined;
    onClick?: any;
    htmlType?: any;
};

const Button = ({
    variant,
    label,
    className,
    disabled,
    loading = false,
    ...rest
}: ButtonType) => {
    if (variant === "filled") {
        return (
            <button
                {...rest}
                disabled={disabled || loading}
                className={`${className} disabled:bg-black] ${disabled
                    ? "bg-gray-500 cursor-not-allowed hover:bg-gray-500 text-white"
                    : ""
                    } px-4 py-3 border rounded-[10px] text-base font-semibold transition text-white bg-primary hover:bg-white hover:text-primary border-primary`}
            >
                <Spin spinning={loading} className="mr-2" />
                {label}
            </button>
        );
    }
    return (
        <button
            {...rest}
            disabled={disabled || loading}
            className={`${className} disabled:bg-black] ${disabled
                ? "bg-gray-500 cursor-not-allowed hover:bg-gray-500 text-white"
                : ""
                } px-4 py-3 border rounded-[10px] text-base font-semibold transition text-primary hover:bg-primary hover:text-white border-primary`}
        >
            <Spin spinning={loading} className="mr-2" />
            {label}
        </button>
    );
};

export default Button;
