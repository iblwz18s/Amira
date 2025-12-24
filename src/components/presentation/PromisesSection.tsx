const promises = [
  {
    number: "الوعد الأول",
    text: "لمستفيدينا .. وضع احتياجاتكم في صدارة أولوياتنا",
  },
  {
    number: "الوعد الثاني",
    text: "لإدارتنا .. ضمان جودة المعاملات والشفافية الكاملة",
  },
  {
    number: "الوعد الثالث",
    text: "لموظفينا .. نكون بيئة العمل المحفزة والداعمة",
  },
  {
    number: "الوعد الرابع",
    text: "لمنظومتنا .. وضع معايير التميز في إدارة المعاملات",
  },
];

const values = [
  "نخدم بتعاطف",
  "شغف نحو التميز",
  "التفكير الإبداعي",
  "التمكين بثقة",
  "العمل كفريق واحد",
];

const goals = [
  "إدارة المعاملات بشكل استباقي من خلال التنبيهات الذكية",
  "الاستثمار في بناء بيئة عمل احترافية وشفافة",
  "بناء هياكل تشغيلية مستدامة ومؤتمتة",
  "تطبيق نموذج إداري مبتكر يتمحور حول المستفيد",
  "تطبيق منظومة عمل رقمية للتحليلات الفورية",
  "إعداد منظومة فعّالة من خلال حوكمة متينة",
];

const PromisesSection = () => {
  return (
    <section className="py-24 px-4 section-light">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            في استراتيجية منصة Smartsheet الذكية
          </h2>
          <p className="text-muted-foreground text-lg">
            أربعة وعود، وخمس قيم، وستة أهداف
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Promises */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="text-center mb-6">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                4 وعـود
              </span>
            </div>
            <div className="space-y-4">
              {promises.map((promise, index) => (
                <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <h4 className="font-bold text-primary mb-1">{promise.number}</h4>
                  <p className="text-muted-foreground text-sm">{promise.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="text-center mb-6">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                5 قيــــم
              </span>
            </div>
            <div className="space-y-3">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-muted/50 rounded-xl p-4 text-center font-medium text-foreground"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="text-center mb-6">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                6 أهــداف
              </span>
            </div>
            <div className="space-y-3">
              {goals.map((goal, index) => (
                <div key={index} className="flex gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;