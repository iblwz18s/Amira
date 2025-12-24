import { Trophy, Wrench, Rocket, LineChart, Users, Zap, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "حل مشكلة واقعية",
    description: "معالجة تحديات حقيقية تواجه القطاع الصحي",
  },
  {
    icon: Rocket,
    title: "تقنية ذكية قابلة للتوسع",
    description: "استخدام Smartsheet بطريقة مبتكرة ومرنة",
  },
  {
    icon: LineChart,
    title: "قياس موضوعي وشفاف",
    description: "مؤشرات أداء دقيقة وقابلة للقياس",
  },
  {
    icon: Users,
    title: "تحسين تجربة المستفيد",
    description: "ربط مباشر مع صوت العميل",
  },
  {
    icon: Zap,
    title: "قابل للتطبيق الفوري",
    description: "يمكن تطبيقه في أي إدارة صحية",
  },
  {
    icon: DollarSign,
    title: "تكلفة منخفضة - عائد مرتفع",
    description: "استثمار ذكي بنتائج سريعة وملموسة",
  },
];

const WhyWinSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-warning/10 border border-warning/20 rounded-full mb-6 shadow-sm">
            <Trophy className="w-5 h-5 text-warning" />
            <span className="text-sm font-medium text-foreground">لماذا يستحق هذا الابتكار الفوز؟</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            مميزات تجعله <span className="text-primary">الخيار الأمثل</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 card-hover shadow-sm group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lg">
          <blockquote className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-relaxed">
            "هذا ليس مجرد نظام إداري، بل نقلة نوعية تحوّل ثقافة العمل بأكملها"
          </blockquote>
          <p className="text-muted-foreground text-lg">
            من بيئة ارتجالية إلى منظومة احترافية تعتمد على البيانات والشفافية والمساءلة
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWinSection;