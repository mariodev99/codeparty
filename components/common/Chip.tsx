interface Chip {
  content: string;
  bg?: string;
}

export default function Chip({ content, bg }: Chip) {
  return (
    <div
      className="flex items-center px-3 py-1 rounded-full bg-content-primary text-content-secondary border border-border"
      style={{ backgroundColor: bg }}
    >
      {content}
    </div>
  );
}
