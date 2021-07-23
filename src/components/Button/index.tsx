import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import capitalize from "lodash/capitalize";

import MuiButton, {
    ButtonProps as MuiButtonProps
} from "@material-ui/core/Button";

export type ColorTypes =
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "warning"
    | "default"
    | "inherit"
    | "info";

type ButtonProps = { color: ColorTypes } & Omit<MuiButtonProps, "color">;

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        textSuccess: {
            color: theme.palette.success.main
        },
        textError: {
            color: theme.palette.error.main
        },
        textWarning: {
            color: theme.palette.warning.main
        },
        textInfo: {
            color: theme.palette.info.main
        },
        outlinedSuccess: {
            borderColor: theme.palette.success.main,
            color: theme.palette.success.main
        },
        outlinedError: {
            borderColor: theme.palette.error.main,
            color: theme.palette.error.main
        },
        outlinedWarning: {
            borderColor: theme.palette.warning.main,
            color: theme.palette.warning.main
        },
        outlinedInfo: {
            borderColor: theme.palette.info.main,
            color: theme.palette.info.main
        },
        containedSuccess: {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
            "&:hover": {
                backgroundColor: theme.palette.success.dark
            }
        },
        containedError: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            "&:hover": {
                backgroundColor: theme.palette.error.dark
            }
        },
        containedWarning: {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
            "&:hover": {
                backgroundColor: theme.palette.warning.dark
            }
        },
        containedInfo: {
            backgroundColor: theme.palette.info.main,
            color: theme.palette.info.contrastText,
            "&:hover": {
                backgroundColor: theme.palette.info.dark
            }
        }
    })
);

export const Button: React.FC<ButtonProps> = ({ children, color, ...props }) => {
    const classes = useStyles();
    const className = classes?.[`${props.variant || "text"}${capitalize(color)}`];
    const colorProp =
        ["default", "inherit", "primary", "secondary"].indexOf(color) > -1
            ? (color as "default" | "inherit" | "primary" | "secondary")
            : undefined;

    return (
        <MuiButton {...props} color={colorProp} className={className}>
            {children}
        </MuiButton>
    );
};
