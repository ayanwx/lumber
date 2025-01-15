/**
 * Color codes for terminal styling.
 */
export declare const colors: {
  reset: string;
  fg: {
    red: string;
    green: string;
    blue: string;
    yellow: string;
    grey: string;
    white: string;
  };
  bg: {
    red: string;
    green: string;
    blue: string;
    yellow: string;
    grey: string;
    white: string;
  };
};

/**
 * A simple logging utility with support for color-coded log levels.
 */
export declare class Lumber {
  /** Color codes used for formatting log messages. */
  colors: typeof colors;

  constructor();

  private _getTime(): string;

  private _format(
    message: string,
    level: "INF" | "WRN" | "ERR" | "FTL" | string,
  ): string;

  /** Logs an informational message */
  info(message: string): void;

  /** Logs a warning message */
  warn(message: string): void;

  /** Logs an error message */
  error(message: string | Error): void;

  /** Logs a fatal error message */
  fatal(message: string | Error): void;
}
