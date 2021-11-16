export function HeaderText({ children, className }) {
  const style = className
    ? className.includes("override")
      ? className
      : `${className} text-4xl font-extralight font-roboto`
    : "text-4xl font-extralight font-roboto";

  return <div className={style}>{children}</div>;
}

export function LogoText({ children, className }) {
  const style = className
    ? className.includes("override")
      ? className
      : `${className} text-2xl font-light font-roboto`
    : "text-2xl font-light font-roboto";

  return <div className={style}>{children}</div>;
}

export function WidgetTitleText({ children, className }) {
  const style = className
    ? className.includes("override")
      ? className
      : `${className} text-xl font-extralight font-roboto`
    : "text-xl font-extralight font-roboto";

  return <div className={style}>{children}</div>;
}

export function ParagraphText({ children, className }) {
  const style = className
    ? className.includes("override")
      ? className
      : `${className} text-base font-normal font-space`
    : "text-base font-normal font-space";

  return <div className={style}>{children}</div>;
}
