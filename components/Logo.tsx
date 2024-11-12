export default function Logo(props: any) {
  return (
    <div className="text-xl" {...props}>
      <div className="hidden lg:block  text-foreground">
        <span className="text-primary">{"{Code"}</span>
        {"party}"}
      </div>
      <div className="block lg:hidden text-primary">
        <span className="text-primary">{"{"}</span>
        {"}"}
      </div>
    </div>
  );
}
