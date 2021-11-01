export function AppBackground({ children }) {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-blue-100 h-screen w-screen">
      {children}
    </div>
  );
}

export function OuterShellPadding({ children }) {
  return <div className="p-3">{children}</div>;
}

export function InnerMargins({ children }) {
  return <div className="mx-32">{children}</div>;
}
