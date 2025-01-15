export const colors = {
  reset: "\x1b[0m",
  fg: {
    red: "\x1b[31m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    yellow: "\x1b[33m",
    grey: "\x1b[90m",
    white: "\x1b[37m",
  },
  bg: {
    red: "\x1b[41m",
    green: "\x1b[42m",
    blue: "\x1b[44m",
    yellow: "\x1b[43m",
    grey: "\x1b[100m",
    white: "\x1b[47m",
  },
};

export class Lumber {
  constructor() {
    this.colors = colors;
  }

  _getTime() {
    const fmt = Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour12: false,
    });
    const date = new Date();
    const milliseconds = date.getMilliseconds().toString().padStart(3, "0");

    return fmt.format(date).replace(", ", "-") + ":" + milliseconds;
  }

  _format(message, level) {
    let fmt;

    switch (level) {
      case "INF":
        fmt = `${this.colors.fg.blue} ${level} ${this.colors.reset}`;
        break;
      case "WRN":
        fmt = `${this.colors.fg.yellow} ${level} ${this.colors.reset}`;
        break;
      case "ERR":
        fmt = `${this.colors.fg.red} ${level} ${this.colors.reset}`;
        break;
      case "FTL":
        fmt = `${this.colors.bg.red} ${level} ${this.colors.reset}`;
        break;
      default:
        fmt = `${this.colors.fg.grey} ${level} ${this.colors.reset}`;
    }

    return (
      this.colors.fg.grey + this._getTime() + this.colors.reset + fmt + message
    );
  }

  info(message) {
    process.stdout.write(this._format(message, "INF") + "\n");
  }
  warn(message) {
    process.stdout.write(this._format(message, "WRN") + "\n");
  }
  error(message) {
    if (message instanceof Error) {
      process.stdout.write(this._format(message.stack, "ERR") + "\n");
    } else {
      process.stdout.write(this._format(message, "ERR") + "\n");
    }
  }
  fatal(message) {
    if (message instanceof Error) {
      process.stdout.write(this._format(message.stack, "FTL") + "\n");
    } else {
      process.stdout.write(this._format(message, "FTL") + "\n");
    }
  }
}
