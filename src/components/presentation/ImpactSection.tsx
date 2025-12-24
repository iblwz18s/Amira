import { Target, Zap, BarChart3, Heart, Building, Database } from "lucide-react";

const impacts = [
  {
    icon: Target,
    text: "رفع مستوى المساءلة الفردية والشفافية",
  },
  {
    icon: Zap,
    text: "تحسين سرعة الإنجاز عبر التقارير والتنبيهات",
  },
  {
    icon: BarChart3,
    text: "قياس الأداء والجودة بدقة لأول مرة",
  },
  {
    icon: Heart,
    text: "تعزيز رضا المستفيدين بشكل ملموس",
  },
  {
    icon: Building,
    text: "تحويل الإدارة لبيئة احترافية استباقية",
  },
  {
    icon: Database,
    text: "الاعتماد على البيانات في اتخاذ القرارات",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 px-4 section-light">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
            <Target className="w-5 h-5 text-success" />
            <span className="text-sm font-medium text-foreground">الأثر المحقق</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            نتائج <span className="text-primary">حقيقية وملموسة</span>
          </h2>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 card-hover shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-success/15 flex items-center justify-center flex-shrink-0">
                <impact.icon className="w-6 h-6 text-success" />
              </div>
              <p className="text-foreground font-medium">{impact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;