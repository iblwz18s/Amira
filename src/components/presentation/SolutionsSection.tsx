import { Lightbulb, Mail, Bell, BarChart, LineChart, Users } from "lucide-react";

const solutions = [
  {
    step: 1,
    icon: Mail,
    title: "أتمتة التكليف",
    features: [
      "إرسال إيميل تلقائي فوري",
      "رقم المعاملة وموضوعها",
      "تنبيه رسمي بالمسؤولية",
    ],
  },
  {
    step: 2,
    icon: Bell,
    title: "التذكير الأسبوعي",
    features: [
      "إيميل تلقائي كل أحد",
      "المعاملات المتأخرة",
      "مؤشر الإنجاز الأسبوعي",
    ],
  },
  {
    step: 3,
    icon: BarChart,
    title: "تقارير الأداء الشهري",
    features: [
      "تقرير شامل للمدير",
      "المعاملات المتأخرة",
      "مؤشر أداء كل موظف",
    ],
  },
  {
    step: 4,
    icon: LineChart,
    title: "لوحة مؤشرات متقدمة",
    features: [
      "نسبة إنجاز الإدارة",
      "عدد المعاملات المتأخرة",
      "جودة الإغلاق",
    ],
  },
  {
    step: 5,
    icon: Users,
    title: "صوت المستفيد",
    features: [
      "نموذج تغذية راجعة",
      "قياس رضا المستفيدين",
      "تقييم جودة الخدمة",
    ],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 px-4 section-light">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Lightbulb className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">فكرة الابتكار</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            نظام <span className="text-primary">Smartsheet</span> ذكي ومترابط
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            يُعالج كل الثغرات من خلال منظومة متكاملة من الحلول الذكية
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-6 card-hover shadow-sm"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
                {solution.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">{solution.title}</h3>

              {/* Features */}
              <ul className="space-y-2">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;