import { CheckCircle, Rocket, Building2 } from "lucide-react";

const StatusSection = () => {
  return (
    <section className="py-24 px-4 section-light">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">حالة الابتكار الحالية</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            استعداد كامل <span className="text-primary">للتوسّع</span>
          </h2>
        </div>

        {/* Status Cards */}
        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-primary/30 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">تم التنفيذ الفعلي</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تم تنفيذ ابتكار "منصة Smartsheet الذكية لإدارة المعاملات" فعليًا في إدارة عمليات الموارد البشرية بتجمع تبوك الصحي، وتم ربطه بجميع عناصر الأتمتة، مؤشرات الأداء، وجودة الإغلاق، بالإضافة إلى صوت المستفيد.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-success/30 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/15 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">نتائج مثبتة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أظهرت نتائج قياس الأثر تحسنًا ملحوظًا في المتابعة، وضوح المسؤوليات، سرعة الإنجاز، وجودة إغلاق المعاملات، ما يؤكد فاعلية الابتكار وجدواه.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-warning/30 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning/15 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-warning" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">جاهزية التعميم</h3>
                <p className="text-muted-foreground leading-relaxed">
                  على كامل الجاهزية لتعميم الابتكار على إدارات الموارد البشرية الأخرى أو أي إدارة ترغب في الاستفادة من هذا النموذج الذكي. مع تقديم التدريب اللازم لتطبيقه بما يتناسب مع احتياجها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;