export function HeaderText({ children, className }) {
  const style = className ? className : "";

  return (
    <div className={`${style} text-4xl font-extralight font-roboto`}>
      {children}
    </div>
  );
}

export function LogoText({ children, className }) {
  const style = className ? className : "";

  return (
    <div className={`${style} text-2xl font-light font-roboto`}>{children}</div>
  );
}

export function WidgetTitleText({ children, className }) {
  const style = className ? className : "";

  return (
    <div className={`${style} text-xl font-extralight font-roboto`}>
      {children}
    </div>
  );
}

export function ParagraphText({ children, className }) {
  const style = className ? className : "";

  return (
    <div className={`${style} text-base font-normal font-space`}>
      {children}
    </div>
  );
}
