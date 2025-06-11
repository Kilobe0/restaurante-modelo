// src/app/components/ui/SectionTitle.tsx
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string; // Para permitir classes adicionais
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-12 ${className}`}>
      {children}
    </h2>
  );
}