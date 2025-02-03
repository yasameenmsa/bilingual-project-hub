import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AdminReports = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Manage Reports",
      addNew: "Add New Report",
      columns: {
        title: "Title",
        date: "Date",
        type: "Type",
        size: "Size",
        actions: "Actions",
      },
    },
    ar: {
      title: "إدارة التقارير",
      addNew: "إضافة تقرير جديد",
      columns: {
        title: "العنوان",
        date: "التاريخ",
        type: "النوع",
        size: "الحجم",
        actions: "الإجراءات",
      },
    },
  };

  const t = content[language];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">{t.title}</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          {t.addNew}
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-start">{t.columns.title}</th>
              <th className="px-6 py-3 text-start">{t.columns.date}</th>
              <th className="px-6 py-3 text-start">{t.columns.type}</th>
              <th className="px-6 py-3 text-start">{t.columns.size}</th>
              <th className="px-6 py-3 text-start">{t.columns.actions}</th>
            </tr>
          </thead>
          <tbody>
            {/* Table content will be added later */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReports;