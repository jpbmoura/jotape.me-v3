interface TagProps {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

export default function Tag({ label, icon }: TagProps) {
  return (
    <span
      className={`flex flex-row items-center w-fit gap-1 px-1 py-0.5 text-sm font-semibold text-white bg-white/10 rounded-sm hover:bg-white/20 cursor-cell`}
    >
      {icon}
      {label}
    </span>
  );
}
