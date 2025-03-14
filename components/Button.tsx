import React, { AnchorHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(" border h-12 rounded-full px-6 font-medium ", {
    variants: {
        variant: {
            primary: "bg-[#F2BB16] text-white border-line-400",
            secondary: "border-[#F2BB16] text-[#F2BB16] bg-transparent",
        },
        size: {
            sm: 'h-10 '
        }
    },
});

const Button = (
    prop: {
        variant: "primary" | "secondary";
        size?: 'sm'
    } & AnchorHTMLAttributes<HTMLAnchorElement>
) => {
    const { className, variant, size, href, ...otherProps } = prop;
    return (
        <a
            href={href}
            className={classes({
                variant,
                className,
                size
            })}
            {...otherProps}
        />
    );
};

export default Button;
