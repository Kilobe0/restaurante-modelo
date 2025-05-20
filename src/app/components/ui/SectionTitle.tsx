// src/app/components/ui/SectionTitle.tsx
interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-12">
      {children}
    </h2>
  );
}