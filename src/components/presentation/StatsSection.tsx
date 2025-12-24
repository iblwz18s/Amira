import { TrendingDown, TrendingUp, Smile, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    value: "65",
    label: "تقليل المعاملات المتأخرة",
    suffix: "%",
  },
  {
    icon: TrendingUp,
    value: "40",
    label: "تحسين معدل الإنجاز",
    suffix: "%",
  },
  {
    icon: Smile,
    value: "92",
    label: "رضا المستفيدين",
    suffix: "%",
  },
  {
    icon: Clock,
    value: "120",
    label: "ساعة توفير شهرياً",
    suffix: "+",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 px-4 relative overflow-hidden section-primary">
      {/* Decorative Elements */}
      <div className="absolute right-10 top-1/4 opacity-10">
        <svg width="150" height="200" viewBox="0 0 100 140" className="fill-primary-foreground">
          <path d="M50 0 C50 0 0 60 0 90 C0 120 22 140 50 140 C78 140 100 120 100 90 C100 60 50 0 50 0Z" />
        </svg>
      </div>
      <div className="absolute left-10 bottom-1/4 opacity-10">
        <svg width="100" height="130" viewBox="0 0 100 140" className="fill-primary-foreground">
          <path d="M50 0 C50 0 0 60 0 90 C0 120 22 140 50 140 C78 140 100 120 100 90 C100 60 50 0 50 0Z" />
        </svg>
      </div>

      <div className="container max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">الأرقام والإنجازات</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary-foreground">
            إنجازات مبهرة ومثبتة
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-8 text-center card-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 mx-auto mb-6 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;