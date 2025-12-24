import { AlertTriangle, FileStack, Scale, Clock, TrendingDown, RefreshCcw, BarChart3 } from "lucide-react";

const challenges = [
  {
    icon: FileStack,
    title: "تراكم المعاملات",
    description: "دون قدرة على المتابعة أو معرفة أولوية كل معاملة",
  },
  {
    icon: TrendingDown,
    title: "غياب مؤشرات الأولوية",
    description: "صعوبة ترتيب المعاملات حسب الأهمية",
  },
  {
    icon: Scale,
    title: "توزيع غير عادل",
    description: "تشتت المسؤولية وصعوبة المحاسبة",
  },
  {
    icon: Clock,
    title: "غياب مدد الإنجاز",
    description: "محاسبة وتقييم غير فعالة",
  },
  {
    icon: BarChart3,
    title: "لا مؤشرات أداء",
    description: "غياب مقاييس واضحة للإدارة والموظفين",
  },
  {
    icon: RefreshCcw,
    title: "إغلاق شكلي",
    description: "معاملات تُغلق ظاهرياً لكنها تعود مجدداً",
  },
];

const ChallengesSection = () => {
  return (
    <section id="challenges" className="py-24 px-4 bg-background">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-warning/10 border border-warning/20 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <span className="text-sm font-medium text-foreground">التحدي قبل الابتكار</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            مشاكل جوهرية أثّرت على
            <span className="text-primary"> الكفاءة وجودة العمل</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            واجهت الإدارة عدة تحديات حقيقية تطلبت حلولاً مبتكرة
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 card-hover shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warning/15 flex items-center justify-center flex-shrink-0">
                  <challenge.icon className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;