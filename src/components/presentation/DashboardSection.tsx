import { Activity, CheckCircle, Clock, Smile, Target } from "lucide-react";

const metrics = [
  {
    icon: Activity,
    value: "127",
    label: "المعاملات قيد التنفيذ",
    suffix: "معاملة",
  },
  {
    icon: CheckCircle,
    value: "92.5",
    label: "معدل الإنجاز",
    suffix: "%",
  },
  {
    icon: Clock,
    value: "3.2",
    label: "متوسط وقت الإنجاز",
    suffix: "يوم",
  },
  {
    icon: Smile,
    value: "4.7",
    label: "رضا المستفيدين",
    suffix: "/5",
  },
  {
    icon: Target,
    value: "95.8",
    label: "جودة الإغلاق",
    suffix: "%",
  },
];

const DashboardSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Activity className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">مؤشرات Dashboard الحية</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            لوحة تحكم <span className="text-primary">ذكية ومتكاملة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مراقبة الأداء في الوقت الفعلي مع مؤشرات دقيقة وشاملة
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110 bg-primary/10">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {metric.value}
                  <span className="text-lg text-muted-foreground">{metric.suffix}</span>
                </div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Live Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-border">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            <span className="text-sm text-muted-foreground">بيانات حية ومحدثة</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;